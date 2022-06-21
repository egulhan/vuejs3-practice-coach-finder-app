<template>
  <header>
    <h2>
      <router-link class="home" :to="{name: 'home'}">Find a coach</router-link>
    </h2>
    <ul>
      <li>
        <router-link class="active" :to="{name: 'coaches'}">All Coaches</router-link>
      </li>
      <li>
        <router-link :to="{name: 'requests'}">Requests</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/scss/ui/the-header.scss";
</style>