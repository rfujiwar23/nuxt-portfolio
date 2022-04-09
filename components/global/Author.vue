<template>
  <div>
    <div class="about-me">
      <h4>About Me: </h4>
      <p>{{ author.name }} - {{ author.bio }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      author: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>
.about-me {
    font-size:0.8em;
}
</style>