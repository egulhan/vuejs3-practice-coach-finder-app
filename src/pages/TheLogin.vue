<template>
  <base-card class="page">
    <h3 class="title">Login</h3>
    <p>You need to login to access this content. You can
      <router-link :to="{name:'register'}">register</router-link>
      to get authenticated.
    </p>
  </base-card>
</template>

<script>

export default {
  name: "TheLogin",
  components: {}

}
</script>

<style lang="scss" scoped>
@import '@/assets/css/scss/ui/not-found-page.scss';
</style>