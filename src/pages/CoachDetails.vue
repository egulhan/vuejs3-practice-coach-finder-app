<template>
  <div id="coach-details-page" class="page">
    <div class="box">
      <h3>{{ coach.name }}</h3>
      <h4>${{ coach.price }}/hour</h4>
    </div>

    <div class="box">
      <ul class="label-group">
        <li v-for="(feature,index) in coach.features" :key="feature" :class="labelClasses[index]">
          {{ feature }}
        </li>
      </ul>
    </div>

    <request-list :id="$route.params.id"></request-list>
  </div>
</template>

<script>
import RequestList from "@/pages/RequestList";

export default {
  name: "CoachDetails",
  components: {RequestList},
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
      const coach = this.$store.getters['coach/coach'](route.params.id);

      if (!coach) {
        this.$router.push({name: 'not-found'});
        return;
      }

      this.coach = coach;
    }
  },
  watch: {
    $route(newRoute) {
      this.getCoach(newRoute);
    }
  },
  created() {
    this.getCoach(this.$route);
  }
}
</script>

<style lang="scss" scoped>

</style>