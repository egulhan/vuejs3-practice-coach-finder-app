<template>
  <div id="coach-details-page" class="page">
    <div class="box">
      <h3>{{ coach.name }}</h3>
      <h4>${{ coach.price }}/hour</h4>
    </div>

    <div class="box">
      <coach-features :features="coach.features"></coach-features>
    </div>

    <request-list :id="$route.params.id"></request-list>
  </div>
</template>

<script>
import RequestList from "@/pages/RequestList";
import CoachFeatures from "@/components/coach/CoachFeatures";

export default {
  name: "CoachDetails",
  components: {CoachFeatures, RequestList},
  data() {
    return {
      coach: null,
    };
  },
  methods: {
    getCoach(route) {
      const coach = this.$store.getters['coach/coach'](route.params.id);

      if (!coach) {
        return this.$router.push({name: 'coaches'});
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