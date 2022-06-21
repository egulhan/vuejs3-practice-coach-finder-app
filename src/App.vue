<template>
  <the-header></the-header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import './assets/css/scss/ui/app.scss';
import TheHeader from "@/components/layout/TheHeader";

export default {
  name: 'App',
  components: {
    TheHeader,
  },
}
</script>
