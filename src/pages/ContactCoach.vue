<template>
  <div id="contact-coach-page" class="page">
    <div class="box">
      <h3>Erman Gulhan</h3>
      <h4>$39/hour</h4>
    </div>

    <div class="form-container box">
      <h3>Interested? Reach out now!</h3>

      <form>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="text">
        </div>
        <div class="input-group">
          <label for="message">Message</label>
          <textarea></textarea>
        </div>
        <div class="d-flex jc-center">
          <button class="purple-d">Send Message</button>
        </div>
      </form>
    </div>

    <div class="box">
      <ul class="label-group">
        <li class="purple-d">FRONTEND</li>
        <li class="purple">BACKEND</li>
        <li class="purple-l">CAREER</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactCoach",
}
</script>

<style lang="scss" scoped>
#contact-coach-page {
  .form-container {
    > h3 {
      margin-bottom: 1rem;
    }
  }
}
</style>