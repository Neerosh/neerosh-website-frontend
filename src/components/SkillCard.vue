<script setup>
  import DynamicDevList from '../components/DynamicDevList.vue';

  const props = defineProps({
    item: Object,
  })
</script>

<template>
  <div class="card">
    <DynamicDevList 
      v-bind:itemName="item.iconName" 
      v-bind:iconHeight="item.iconHeight" 
      v-bind:iconWidth="item.iconWidth"
      v-bind:showName="true" />
    <div>
      <h2>{{ item.iconName }}</h2>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<style>
  .card{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0.5rem;
    width: 100%;
  }
</style>