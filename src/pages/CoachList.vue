<template>
  <div id="coach-list-page">
    <base-card id="filter-form">
      <h3>Find Your Coach</h3>
      <div class="cb-group">
        <span class="cb">
          <input type="checkbox" name="frontend" id="cb-frontend" v-model="filters.frontend">
          <label for="cb-frontend">Frontend</label>
        </span>
        <span class="cb">
          <input type="checkbox" name="backend" id="cb-backend" v-model="filters.backend">
          <label
              for="cb-backend">Backend</label>
        </span>
        <span class="cb">
          <input type="checkbox" name="devops" id="cb-devops" v-model="filters.devops">
          <label
              for="cb-devops">Devops</label>
        </span>
        <span class="cb">
          <input type="checkbox" name="career" id="cb-career" v-model="filters.career">
          <label for="cb-career">Career</label>
        </span>
      </div>
    </base-card>

    <base-card id="coach-list">
      <section class="action-buttons">
        <button @click="refresh">Refresh</button>
        <button
            v-if="showRegisterButton"
            @click="$router.push({name:'register'})"
            class="purple-d">Register as a Coach
        </button>
      </section>

      <the-loading :is-loading="loading"></the-loading>

      <coach-list-item
          v-for="coach in coaches" :id="coach.id" :name="coach.name"
          :rate="coach.rate"
          :areas="coach.areas" :key="coach.id">
      </coach-list-item>
    </base-card>
  </div>
</template>

<script>
import CoachListItem from "@/components/coach/CoachListItem";
import TheLoading from "@/components/ui/TheLoading";

export default {
  components: {CoachListItem, TheLoading},
  data() {
    return {
      loading: false,
      coaches: [],
      filters: {
        frontend: false,
        backend: false,
        devops: false,
        career: false,
      },
    };
  },
  computed: {
    showRegisterButton() {
      return this.$store.getters['hasLoggedIn'];
    }
  },
  methods: {
    getCoaches(areas = []) {
      this.loading = true;
      this.coaches = [];

      // demonstrate the loading functionality
      setTimeout(() => {
        this.coaches = this.$store.getters['coach/coaches'](areas);
        this.loading = false;
      }, 1000);
    },
    refresh() {
      const areas = [];

      for (const key in this.filters) {
        if (this.filters[key]) {
          areas.push(key);
        }
      }

      // this.coaches = this.$store.getters['coach/coaches'](areas);
      this.getCoaches(areas);
    },
  },
  created() {
    this.getCoaches();
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/scss/coach/contact-list-page.scss';
</style>