<template>
  <base-card>
    <h3>{{ title }}</h3>
    <slot></slot>
  </base-card>
</template>

<script>
export default {
  name: "BasePage",
  props: {
    title: {
      type: String,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
h3 {
  text-align: center;
  margin-bottom: 1.5rem;
}
</style>