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
header {
  padding: 1rem;
  background: #380c87;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a.home {
    color: white;
    text-decoration: none;
  }

  ul {
    list-style-type: none;

    li {
      display: inline;

      :last-child {
        margin-left: 0.5rem;
      }

      a:not(.home) {
        color: pink;
        padding: 0.5rem 0.8rem;
        text-decoration: none;
        font-size: 1.1rem;

        &.router-link-active:not(.home) {
          border: 1px solid pink;
        }
      }
    }
  }
}
</style>