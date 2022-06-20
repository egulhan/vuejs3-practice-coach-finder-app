<template>
  <div class="coach-list-item">
    <h3>{{ name }}</h3>
    <strong>${{ price }}/hour</strong>

    <coach-features :features="features"></coach-features>

    <div class="btn-group">
      <button @click="$router.push({name:'contact', params:{id}})">Contact</button>
      <button class="purple-d" @click="$router.push({name:'coach-details',params:{id}})">View Details</button>
    </div>
  </div>
</template>

<script>
import CoachFeatures from "@/components/coach/CoachFeatures";

export default {
  name: "CoachListItem",
  components: {CoachFeatures},
  props: ['id', 'name', 'price', 'features'],
  data() {
    return {
      labelClasses: [
        'purple-d',
        'purple',
        'purple-l',
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
.coach-list-item {
  border-radius: 25px;
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid black;
}
</style>