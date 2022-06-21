<template>
  <div id="coach-details-page" class="page">
    <div class="box">
      <h3>{{ coach.name }}</h3>
      <h4>${{ coach.price }}/hour</h4>
    </div>

    <div class="box">
      <coach-areas :areas="coach.areas"></coach-areas>
    </div>

    <request-list :id="$route.params.id"></request-list>
  </div>
</template>

<script>
import RequestList from "@/pages/RequestList";
import CoachAreas from "@/components/coach/CoachAreas";

export default {
  name: "CoachDetails",
  components: {CoachAreas, RequestList},
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