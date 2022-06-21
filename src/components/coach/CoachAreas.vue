<template>
  <ul class="label-group">
    <li v-for="(area,index) in areas" :key="area" :class="labelClasses[index]">
      {{ area }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CoachAreas",
  props: ['areas'],
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