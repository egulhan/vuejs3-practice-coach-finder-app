<template>
  <the-header></the-header>
  <main>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
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
  created() {
    this.$store.dispatch('tryAutoLogin');
  }
}
</script>
