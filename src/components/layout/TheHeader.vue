<template>
  <header>
    <h2>
      <router-link class="home" :to="{name: 'home'}">Find a coach</router-link>
    </h2>
    <div class="actions">
      <ul>
        <li>
          <router-link class="active" :to="{name: 'coaches'}">All Coaches</router-link>
        </li>
        <li>
          <router-link :to="{name: 'requests'}">Requests</router-link>
        </li>
      </ul>
      <button v-if="!hasLoggedIn" @click="$router.push({name:'auth'})">Login</button>
      <button v-else @click="logout">Logout</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  computed: {
    hasLoggedIn() {
      return this.$store.getters['hasLoggedIn'];
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace({name: 'coaches'});
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/scss/ui/the-header.scss";
</style>