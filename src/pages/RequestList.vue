<template>
  <div id="request-list-page" class="page">
    <base-card>
      <h3 class="title">Requests</h3>

      <div v-if="requests.length>0">
        <request-item
            v-for="request in requests" :key="request.id"
            :id="request.id" :email="request.email"
            :message="request.message">
        </request-item>
      </div>
      <p v-else class="no-requests">You don't have any request.</p>
    </base-card>
  </div>
</template>

<script>
import RequestItem from "@/components/request/RequestItem";
import {mapGetters} from 'vuex';

export default {
  components: {RequestItem},
  computed: {
    ...mapGetters(['hasLoggedIn', 'authUser']),
    requests() {
      const authUserId = this.hasLoggedIn ? this.authUser.userId : null;

      return this.$store.getters['request/requests'](authUserId);
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/scss/request/request-list-page.scss";
</style>