<template>
  <div id="coach-list-page">
    <div id="filter-form" class="box">
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
    </div>

    <div id="coach-list" class="box">
      <button @click="refresh">Refresh</button>

      <coach-list-item
          v-for="coach in coaches" :id="coach.id" :name="coach.name"
          :price="coach.price"
          :features="coach.features" :key="coach.id">
      </coach-list-item>
    </div>
  </div>
</template>

<script>
import CoachListItem from "@/components/coach/CoachListItem";

export default {
  components: {CoachListItem},
  data() {
    return {
      coaches: [],
      filters: {
        frontend: false,
        backend: false,
        devops: false,
        career: false,
      },
    };
  },
  methods: {
    getCoaches(features = []) {
      this.coaches = this.$store.getters['coach/coaches'](features);
    },
    refresh() {
      const features = [];

      for (const key in this.filters) {
        if (this.filters[key]) {
          features.push(key);
        }
      }

      this.coaches = this.$store.getters['coach/coaches'](features);
    }
  },
  created() {
    this.getCoaches();
  }
}
</script>

<style lang="scss" scoped>
#coach-list-page {
  #filter-form {
    h3 {
      font-size: 1.2rem;
    }

    .cb-group {
      margin-top: 1rem;

      span {
        margin-right: 0.8rem;
      }
    }
  }
}
</style>