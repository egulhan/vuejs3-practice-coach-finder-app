<template>
  <div id="coach-list-page">
    <div id="filter-form" class="box">
      <h3>Find Your Coach</h3>
      <div class="cb-group">
        <span class="cb"><input type="checkbox" name="frontend" id="cb-frontend"><label
            for="cb-frontend">Frontend</label></span>
        <span class="cb"><input type="checkbox" name="backend" id="cb-backend"><label
            for="cb-backend">Backend</label></span>
        <span class="cb"><input type="checkbox" name="career" id="cb-career"><label
            for="cb-career">Career</label></span>
      </div>
    </div>

    <div id="coach-list" class="box">
      <button>Refresh</button>

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
    return {};
  },
  computed: {
    coaches() {
      return this.$store.getters['coach/coaches']();
    },
  },
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