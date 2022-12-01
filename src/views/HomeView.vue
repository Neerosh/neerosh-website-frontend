<script setup>
  import GitHubCards from '../components/GitHubCards.vue'
</script>

<template>
  <div class="welcome-text">
    <h1>Welcome</h1>
    <h3>You can check my Github profile and projects below.</h3>
  </div>
  <GitHubCards v-bind:username="'Neerosh'" v-bind:executeWhenCreated="true" v-bind:itemsPerPage="100"/>
</template>

<style scoped>
  .welcome-text{
    text-align: center;
    margin-bottom: 1rem;
  }
</style>