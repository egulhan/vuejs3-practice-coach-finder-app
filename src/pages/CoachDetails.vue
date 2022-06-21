<template>
  <div id="coach-details-page" class="page">
    <base-card>
      <h3>{{ coach.name }}</h3>
      <h4>${{ coach.rate }}/hour</h4>
    </base-card>

    <router-view></router-view>

    <base-card>
      <coach-areas :areas="coach.areas"></coach-areas>
    </base-card>
  </div>
</template>

<script>
import CoachAreas from "@/components/coach/CoachAreas";

export default {
  name: "CoachDetails",
  components: {CoachAreas},
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