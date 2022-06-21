<template>
  <div class="request-item box-square">
    <p><a :href="`mailto:${email}`">{{ email }}</a></p>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "RequestItem",
  props: ['id', 'email', 'message'],
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/scss/request/request-item.scss";
</style>