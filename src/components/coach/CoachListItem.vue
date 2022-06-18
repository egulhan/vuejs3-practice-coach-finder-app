<template>
  <div class="coach-list-item">
    <h3>{{ name }}</h3>
    <strong>${{ price }}/hour</strong>
    <ul class="label-group">
      <li v-for="(feature,index) in features" :key="feature" :class="labelClasses[index]">
        {{ feature }}
      </li>
    </ul>

    <div class="btn-group">
      <button @click="$router.push({name:'contact', params:{id}})">Contact</button>
      <button class="purple-d">View Details</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoachListItem",
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