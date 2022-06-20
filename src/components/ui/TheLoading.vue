<template>
  <div class="loading-container" v-if="isLoading">
    <img src="@/assets/loading.gif">
  </div>
</template>

<script>
export default {
  name: "TheLoading",
  props: ['isLoading'],
}
</script>

<style lang="scss" scoped>
.loading-container {
  text-align: center;

  img {
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style>