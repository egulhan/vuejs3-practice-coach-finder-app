<template>
  <section>
    <form @submit.prevent="sendMessage">
      <div class="input-group" :class="{invalid:!form.email.isValid}">
        <label for="email">Email</label>
        <input type="email" v-model.trim="form.email.val">
        <p class="error-message" v-if="!form.email.isValid">{{ form.email.errMsg }}</p>
      </div>
      <div class="input-group" :class="{invalid:!form.message.isValid}">
        <label for="message">Message</label>
        <textarea v-model.trim="form.message.val"></textarea>
        <p class="error-message" v-if="!form.message.isValid">{{ form.message.errMsg }}</p>
      </div>
      <div class="d-flex jc-center">
        <button type="submit" class="purple-d">Send Message</button>
      </div>
    </form>

    <p v-if="!isFormValid">Please fix the above form errors.</p>
  </section>
</template>

<script>
export default {
  emits: ['submit-form'],
  name: "ContactForm",
  data() {
    return {
      isFormValid: true,
      form: {
        coach: null,
        email: {
          val: null,
          isValid: true,
          errMsg: null,
        },
        message: {
          val: null,
          isValid: true,
          errMsg: null,
        },
      }
    };
  },
  methods: {
    sendMessage() {
      this.clearFormValidity();
      this.validateForm();

      if (!this.isFormValid) {
        return false;
      }

      const payload = {
        id: this.$route.params.id,
        email: this.form.email.val,
        message: this.form.message.val,
      };

      this.$emit('submit-form', payload);
    },
    validateForm() {
      if (!this.form.email.val || this.form.email.val?.length === 0) {
        this.isFormValid = false;

        this.form.email = {
          ...this.form.email,
          isValid: false,
          errMsg: 'Email must not be empty!',
        }
      }

      if (!this.form.message.val || this.form.message.val?.length === 0) {
        this.isFormValid = false;

        this.form.message = {
          ...this.form.message,
          isValid: false,
          errMsg: 'Message must not be empty!',
        }
      }
    },
    clearFormValidity() {
      this.isFormValid = true;
      this.form.email.isValid = true;
      this.form.email.errMsg = null;
      this.form.message.isValid = true;
      this.form.message.errMsg = null;
    }
  }
}
</script>

<style scoped>

</style>