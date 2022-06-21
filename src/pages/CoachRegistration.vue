<template>
  <base-page title="Coach Registration">
    <coach-registration-form></coach-registration-form>
  </base-page>
</template>

<script>
import CoachRegistrationForm from "@/components/coach/CoachRegistrationForm";

export default {
  name: "CoachRegistration",
  components: {CoachRegistrationForm},
}
</script>