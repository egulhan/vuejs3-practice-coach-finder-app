<template>
  <section>
    <form @submit.prevent="submitForm">
      <div class="input-group" :class="{invalid: !form.name.isValid}">
        <label for="name">Name</label>
        <input type="text" id="name" v-model.trim="form.name.val">
        <p v-if="!form.name.isValid" class="error-message">{{ form.name.errMsg }}</p>
      </div>

      <div class="input-group" :class="{invalid: !form.rate.isValid}">
        <label for="rate">Hourly Rate</label>
        <input type="number" min="1" id="rate" v-model.trim="form.rate.val">
        <p v-if="!form.rate.isValid" class="error-message">{{ form.rate.errMsg }}</p>
      </div>

      <section class="cb-group">
        <h3>Areas of Expertise</h3>

        <div class="input-group" :class="{invalid: !form.areas.isValid}">
          <input type="checkbox" id="cb-frontend" value="frontend" @change="onAreasChange">
          <label for="cb-frontend">Front-end</label>
        </div>

        <div class="input-group" :class="{invalid: !form.areas.isValid}">
          <input type="checkbox" id="cb-backend" value="backend" @change="onAreasChange">
          <label for="cb-backend">Back-end</label>
        </div>

        <div class="input-group" :class="{invalid: !form.areas.isValid}">
          <input type="checkbox" id="cb-devops" value="devops" @change="onAreasChange">
          <label for="cb-devops">Devops</label>
        </div>

        <div class="input-group" :class="{invalid: !form.areas.isValid}">
          <input type="checkbox" id="cb-career" value="career" @change="onAreasChange">
          <label for="cb-career">Career</label>
        </div>

        <p v-if="!form.areas.isValid" class="error-message">{{ form.areas.errMsg }}</p>
      </section>

      <div class="action-buttons">
        <button class="purple-d" type="submit">Register</button>
      </div>
    </form>

    <p v-if="!isFormValid">Please fix the above form errors.</p>
  </section>
</template>

<script>
export default {
  name: "CoachRegistrationForm",
  data() {
    return {
      isFormValid: true,
      form: {
        name: {
          isValid: true,
          val: null,
          errMsg: null,
        },
        rate: {
          isValid: true,
          val: null,
          errMsg: null,
        },
        areas: {
          isValid: true,
          val: [],
          errMsg: null,
        }
      }
    };
  },
  methods: {
    submitForm() {
      this.clearValidity();
      this.validateForm();

      if (!this.isFormValid) {
        return false;
      }

      const formData = {
        name: this.form.name.val,
        rate: this.form.rate.val,
        areas: this.form.areas.val,
      };

      this.$store.dispatch('coach/register', formData);

      this.$router.replace({name: 'coaches'});
    },
    clearValidity() {
      this.isFormValid = true;
      this.form.name.isValid = true;
      this.form.name.errMsg = null;
      this.form.rate.isValid = true;
      this.form.rate.errMsg = null;
      this.form.areas.isValid = true;
      this.form.areas.errMsg = null;
    },
    validateForm() {
      if (!this.form.name.val || this.form.name.val.length === 0) {
        this.isFormValid = false;
        this.form.name.isValid = false;
        this.form.name.errMsg = 'Name must not be empty!';
      }

      if (!this.form.rate.val || this.form.rate.val.length === 0) {
        this.isFormValid = false;
        this.form.rate.isValid = false;
        this.form.rate.errMsg = 'Rate must not be empty!';
      }

      if (this.form.areas.val.length === 0) {
        this.isFormValid = false;
        this.form.areas.isValid = false;
        this.form.areas.errMsg = 'Areas of Expertise must not be empty!';
      }
    },
    onAreasChange(event) {
      const area = event.target.value;
      const isChecked = event.target.checked;

      if (isChecked) {
        this.form.areas.val.push(area);
      } else {
        this.form.areas.val = this.form.areas.val.filter(item => item !== area);
      }

      console.log('this.form.areas', this.form.areas.val);
    }
  }
}
</script>

<style scoped>
.action-buttons {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

h3 {
  margin: 1rem 0;
}
</style>