<template>
  <div id="contact-coach-page" class="page">
    <div class="form-container box">
      <h3>Interested? Reach out now!</h3>

      <form @submit.prevent="sendMessage">
        <div class="input-group">
          <label for="email">Email</label>
          <input type="text" v-model="email">
        </div>
        <div class="input-group">
          <label for="message">Message</label>
          <textarea v-model="message"></textarea>
        </div>
        <div class="d-flex jc-center">
          <button type="submit" class="purple-d">Send Message</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactCoach",
  data() {
    return {
      coach: null,
      email: null,
      message: null,
      labelClasses: [
        'purple-d',
        'purple',
        'purple-l',
      ],
    };
  },
  methods: {
    getCoach(route) {
      const id = route.params.id;
      this.coach = this.$store.getters['coach/coach'](id);
    },
    sendMessage() {
      if (this.email.trim().length > 0 && this.message.trim().length > 0) {
        const payload = {
          id: this.$route.params.id,
          email: this.email,
          message: this.message,
        };

        this.$store.dispatch('request/addRequest', payload);

        this.email = null;
        this.message = null;

        this.$router.push({name: 'home'});
      }
    }
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
#contact-coach-page {
  .form-container {
    > h3 {
      margin-bottom: 1rem;
    }
  }
}
</style>