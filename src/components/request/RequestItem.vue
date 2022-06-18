<template>
  <div class="request-item box-square">
    <p><a href="mailto:aaa@aaa.com">{{ email }}</a></p>
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
.request-item {
  > p {
    margin-bottom: 0.5rem;

    > a {
      color: purple;
      text-decoration: none;
      font-weight: bold;
    }
  }
}
</style>