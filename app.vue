<template>
  <div>
    <span class="greetings">Hello!</span>
  </div>
</template>

<style>
  .greetings {
    color: darkgreen;
    text-decoration: underline;
  }
</style>

<script>
  module.exports = {
    mounted: function() {
      console.log('mounted');
    },
  };
</script>
