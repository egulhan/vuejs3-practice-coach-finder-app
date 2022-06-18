<template>
  <div id="request-list-page" class="page">
    <div class="box">
      <h3 class="title">Requests</h3>

      <request-item v-for="request in requests" :key="request.id"
                    :id="request.id" :email="request.email"
                    :message="request.message">
      </request-item>
    </div>
  </div>
</template>

<script>
import RequestItem from "@/components/request/RequestItem";

export default {
  components: {RequestItem},
  data() {
    return {
      requests: [
        {
          id: 'r1',
          email: 'aaa@a.com',
          message: 'Hey you!',
        },
        {
          id: 'r2',
          email: 'bbb@b.com',
          message: "What's up man?",
        },
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
#request-list-page {

}
</style>