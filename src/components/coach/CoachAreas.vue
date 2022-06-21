<template>
  <section>
    <base-badge v-for="area in areas" :key="area" :name="area" :type="area"></base-badge>
  </section>
</template>

<script>
import BaseBadge from "@/components/ui/BaseBadge";

export default {
  name: "CoachAreas",
  components: {BaseBadge},
  props: ['areas'],
}
</script>

<style lang="scss" scoped>
section {
  margin: 1rem 0;
}
</style>