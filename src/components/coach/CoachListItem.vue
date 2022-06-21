<template>
  <div class="coach-list-item">
    <h3>{{ name }}</h3>
    <strong>${{ price }}/hour</strong>

    <coach-areas :areas="areas"></coach-areas>

    <div class="btn-group">
      <button @click="$router.push({name:'contact', params:{id}})">Contact</button>
      <button class="purple-d" @click="$router.push({name:'coach-details',params:{id}})">View Details</button>
    </div>
  </div>
</template>

<script>
import CoachAreas from "@/components/coach/CoachAreas";

export default {
  name: "CoachListItem",
  components: {CoachAreas},
  props: ['id', 'name', 'price', 'areas'],
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
@import "@/assets/css/scss/coach/coach-list-item.scss";
</style>