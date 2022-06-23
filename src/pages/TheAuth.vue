<template>
  <base-page :title="modeTitle">
    <form @submit.prevent="submitForm">
      <div class="input-group" :class="{invalid: !form.email.isValid}">
        <label for="email">Email</label>
        <input id="email" type="email" v-model.trim="form.email.val">
        <p class="error-message" v-if="!form.email.isValid">{{ form.email.errMsg }}</p>
      </div>
      <div class="input-group" :class="{invalid: !form.password.isValid}">
        <label for="password">Password</label>
        <input id="password" type="password" v-model.trim="form.password.val">
        <p class="error-message" v-if="!form.password.isValid">{{ form.password.errMsg }}</p>
      </div>

      <div class="action-buttons">
        <button type="submit" class="purple-d">{{ modeTitle }}</button>
        <button type="button" @click="changeMode">{{ modeChangeTitle }}</button>
      </div>
    </form>

    <p class="error-message" v-if="!isFormValid">{{ generalErrMsg || 'Please fix the above form errors!' }}</p>
  </base-page>
</template>

<script>
export default {
  name: "TheAuth",
  data() {
    return {
      mode: 'login', // login or register
      isFormValid: true,
      generalErrMsg: null,
      form: {
        email: {
          val: null,
          isValid: true,
          errMsg: null,
        },
        password: {
          val: null,
          isValid: true,
          errMsg: null,
        },
      }
    };
  },
  computed: {
    modeTitle() {
      return this.mode === 'login' ? 'Login' : 'Register';
    },
    modeChangeTitle() {
      return this.mode === 'login' ? 'Register instead' : 'Login instead';
    }
  },
  methods: {
    async submitForm() {
      this.clearValidity();
      this.validateForm();

      if (!this.isFormValid) {
        return false;
      }

      const payload = {
        email: this.form.email.val,
        password: this.form.password.val,
        mode: this.mode,
      };

      try {
        await this.$store.dispatch('authenticate', payload);
        await this.$router.replace({name: 'coaches'});
      } catch (e) {
        console.log('ERROR', e);
      }
    },
    clearValidity() {
      this.isFormValid = true;
      this.form = {
        ...this.form,
        email: {
          ...this.form.email,
          isValid: true,
          errMsg: null,
        },
        password: {
          ...this.form.password,
          isValid: true,
          errMsg: null,
        }
      };
    },
    validateForm() {
      if (!this.form.email.val || this.form.email.val.length === 0) {
        this.isFormValid = false;
        this.form.email.isValid = false;
        this.form.email.errMsg = 'Email must not be empty!';
      }

      if (!this.form.password.val || this.form.password.val.length < 6) {
        this.isFormValid = false;
        this.form.password.isValid = false;
        this.form.password.errMsg = 'Password must be at least 6 characters!';
      }
    },
    changeMode() {
      this.mode = this.mode === 'login' ? 'register' : 'login';
    }
  },
}
</script>

<style scoped>

</style>