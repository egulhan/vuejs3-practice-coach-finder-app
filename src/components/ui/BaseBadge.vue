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
span {
  border-radius: 20px;
  padding: 0.5rem 1rem;
  color: white;
  font-size: 0.9rem;
  background: grey;
  margin-right: 0.5rem;

  &.backend {
    background: purple;
  }

  &.frontend {
    background: #380c87;
  }

  &.career {
    background: #8d1266;
  }

  &.devops {
    background: blue;
  }
}
</style>