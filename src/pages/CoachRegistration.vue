<template>
  <base-page title="Coach Registration">
    <coach-registration-form @register-coach="registerCoach"></coach-registration-form>
  </base-page>
</template>

<script>
import CoachRegistrationForm from "@/components/coach/CoachRegistrationForm";

export default {
  name: "CoachRegistration",
  components: {CoachRegistrationForm},
  methods: {
    registerCoach(data) {
      this.$store.dispatch('coach/register', data);
      setTimeout(()=>
          console.log('authUserId',this.$store.getters['authUserId']),2000);
      this.$router.replace({name: 'coaches'});
    }
  },
}
</script>