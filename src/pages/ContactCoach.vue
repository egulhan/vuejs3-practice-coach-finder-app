<template>
  <div id="contact-coach-page" class="page">
    <base-card class="form-container">
      <h3>Interested? Reach out now!</h3>
      <contact-form @submit-form="sendMessage"></contact-form>
    </base-card>
  </div>
</template>

<script>
import ContactForm from "@/components/coach/ContactForm";

export default {
  name: "ContactCoach",
  components: {ContactForm},
  methods: {
    getCoach(route) {
      const id = route.params.id;
      this.coach = this.$store.getters['coach/coach'](id);
    },
    sendMessage(formData) {
      this.$store.dispatch('request/addRequest', formData);

      this.email = null;
      this.message = null;

      this.$router.replace({name: 'home'});
    },
  },
  created() {
    this.getCoach(this.$route);
  },
  watch: {
    $route(newRoute) {
      this.getCoach(newRoute);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/scss/coach/contact-coach-page.scss';
</style>