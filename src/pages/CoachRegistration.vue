<template>
  <base-page title="Coach Registration">
    <form @submit.prevent="submitForm">
      <div class="input-group" :class="{invalid: !form.name.isValid}">
        <label for="name">Name</label>
        <input type="text" id="name" v-model.trim="form.name.val">
        <p v-if="!form.name.isValid" class="error-message">{{ form.name.errMsg }}</p>
      </div>
      <div class="input-group" :class="{invalid: !form.description.isValid}">
        <label for="description">Description</label>
        <textarea v-model.trim="form.description.val"></textarea>
        <p v-if="!form.description.isValid" class="error-message">{{ form.description.errMsg }}</p>
      </div>

      <div class="action-buttons">
        <button class="purple-d" type="submit">Register</button>
      </div>
    </form>

    <p v-if="!isFormValid">Please fix the above form errors.</p>
  </base-page>
</template>

<script>
export default {
  name: "CoachRegistration",
  data() {
    return {
      isFormValid: true,
      form: {
        name: {
          isValid: true,
          errMsg: null,
        },
        description: {
          isValid: true,
          errMsg: null,
        },
      }
    };
  },
  methods:{
    submitForm(){

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
</style>