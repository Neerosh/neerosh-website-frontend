<script setup>
  import DynamicDevIcon from './DynamicDevIcon.vue';

  const props = defineProps({
    item: Object
  })
</script>

<template>
  <div class="card">
    <div class="icon-wrapper">
      <DynamicDevIcon v-bind:iconName="item.name" v-bind:iconHeight="'80px'" v-bind:iconWidth="'80px'" />
    </div>
    <div class="info">
      <div>

      </div>
      <h3 class="info-name">{{ item.name }}</h3>
      <p>Level: {{ item.level }}</p>
      <p class="info-description">{{ item.description }}</p>
    </div>
  </div>

</template>

<style scoped>
  .card{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    padding: 0.7rem;
    background-color: var(--color-card-background);
    border: solid 2px var(--color-card-border);
    border-radius: 10px;
    transition: 1s;
  }
  .info{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 0.5rem;
  }
  .info-name{
    font-weight: 500;
  }
  .info-description{
    margin-top: 0.4rem;
  }
  .info-icon-wrapper{
    min-width: 80px;
    min-width: 80px;
  }

</style>