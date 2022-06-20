<template>
  <ul class="label-group">
    <li v-for="(feature,index) in features" :key="feature" :class="labelClasses[index]">
      {{ feature }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CoachFeatures",
  props: ['features'],
  data() {
    return {
      labelClasses: [
        'purple-d',
        'purple',
        'purple-l',
      ],
    };
  }
}
</script>

<style scoped>

</style>