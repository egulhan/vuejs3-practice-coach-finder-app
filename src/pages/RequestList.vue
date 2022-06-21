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
      <p v-else class="no-requests">The coach does not have any request.</p>
    </base-card>
  </div>
</template>

<script>
import RequestItem from "@/components/request/RequestItem";

export default {
  components: {RequestItem},
  props: ['id'],
  computed: {
    requests() {
      const id = this?.id ?? null;
      return this.$store.getters['request/requests'](id);
    },
  },
}
</script>

<style lang="scss" scoped>
#request-list-page {
  .no-requests {
    text-align: center;
    margin-top: 1.5rem;
  }
}
</style>