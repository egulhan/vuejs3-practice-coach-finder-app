<template>
  <div id="contact-coach-page" class="page">
    <div class="box">
      <h3>{{ coach.name }}</h3>
      <h4>${{ coach.price }}/hour</h4>
    </div>

    <div class="form-container box">
      <h3>Interested? Reach out now!</h3>

      <form>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="text">
        </div>
        <div class="input-group">
          <label for="message">Message</label>
          <textarea></textarea>
        </div>
        <div class="d-flex jc-center">
          <button class="purple-d">Send Message</button>
        </div>
      </form>
    </div>

    <div class="box">
      <ul class="label-group">
        <li v-for="(feature,index) in coach.features" :key="feature" :class="labelClasses[index]">
          {{ feature }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactCoach",
  props: ['id'],
  data() {
    return {
      coach: null,
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