<script setup>
  import DynamicDevIcon from '../DynamicDevIcon.vue';
  import LevelIcon from '../icons/LevelIcon.vue'
  const props = defineProps({
    item: Object
  })
</script>

<template>
  <div class="card">
    <div class="wrapper">
      <div class="info-icon-wrapper">
        <DynamicDevIcon v-bind:iconName="item.name" v-bind:iconHeight="'80px'" v-bind:iconWidth="'80px'" />
      </div>
      <div class="flex-column">
        <h3 class="info-name">{{ item.name }}</h3>
        <p class="flex-row-svg">
          <LevelIcon  class="svg-margin-subheader"/>
          {{ item.level }}
        </p>
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
    column-gap: 0.5rem;
  }

  .info{
    margin-left: 0.5rem;
    width: 100%;
  }

  .info-name{
    font-weight: 500;
  }

  .info-description{
    margin-top: 0.2rem;
    color: var(--color-text-secondary);
  }

  .info-icon-wrapper{
    min-width: 80px;
    min-width: 80px;
    margin-right: 0.4rem;
  }

  .info-tags{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 0.4rem;
    row-gap: 0.4rem;
    margin: 0.5rem 0 0 0;
  }

  .info-tag{
    font-size: 13px;
    padding: 0.2rem 0.6rem;
    background-color: var(--color-link-hover);
    border-radius: 15px;
  }

  .flex-row-svg{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .flex-column{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    row-gap: 0.2rem;
  }

  .svg-margin-subheader{
    min-height: 20px;
    min-width: 20px;
    height: 20px;
    width: 20px;
    margin: 0 0.4rem 0 0;
  }
</style>