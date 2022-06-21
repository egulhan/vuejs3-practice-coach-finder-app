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
@import "@/assets/css/scss/ui/the-loading.scss";
</style>