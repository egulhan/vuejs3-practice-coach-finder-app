<template>
  <base-card class="page">
    <h3 class="title">Page Not Found</h3>
    <p>Sorry, the page you're looking for is not found.</p>
  </base-card>
</template>

<script>
export default {
  name: "NotFound",
  components: {}

}
</script>

<style lang="scss" scoped>
.page {
  >p {
    margin-top: 1.5rem;
    text-align: center;
  }
}
</style>