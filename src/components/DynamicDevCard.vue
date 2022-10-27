<script setup>
  import DynamicDevIcon from './DynamicDevIcon.vue';

  const props = defineProps({
    item: Object
  })
</script>

<template>
  <div class="card">
    <div class="wrapper">
      <div class="icon-wrapper">
        <DynamicDevIcon v-bind:iconName="item.name" v-bind:iconHeight="'80px'" v-bind:iconWidth="'80px'" />
      </div>
      <div class="info">
        <h3 class="info-name">{{ item.name }}</h3>
        <p>Level: {{ item.level }}</p>
        <p class="info-description">{{ item.description }}</p>
      </div>
    </div>
    <div v-if="item.tags" class="info-tags">
      <span v-for="tag in item.tags" class="info-tag">{{ tag }}</span>
    </div>
  </div>

</template>

<style scoped>
  .card{
    padding: 0.7rem;
    background-color: var(--color-card-background);
    border: solid 2px var(--color-card-border);
    border-radius: 10px;
    transition: 1s;
  }
  .wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
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
    color: var(--color-text-secondary);
  }
  .info-icon-wrapper{
    min-width: 80px;
    min-width: 80px;
  }
  .info-tags{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0.5rem 0 0 0;
  }
  .info-tag{
    font-size: 13px;
    padding: 0.3rem 0.6rem;
    background-color: var(--color-link-hover);
    border-radius: 15px;
    margin: 0.4rem 0.4rem 0 0;
  }
</style>