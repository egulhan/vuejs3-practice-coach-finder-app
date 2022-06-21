<template>
  <span :class="type">{{ formattedName }}</span>
</template>

<script>
export default {
  name: "BaseBadge",
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  computed:{
    formattedName(){
      return this.name.toUpperCase();
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/scss/ui/base-badge.scss";
</style>