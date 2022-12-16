<script setup>
  import DynamicDevIcon from '../DynamicDevIcon.vue';
  import LevelIcon from '../icons/resume/LevelIcon.vue'
  const props = defineProps({
    item: Object
  })

  const iconHeight = '6em'
  const iconWidth =  '6em'
</script>

<template>
  <div class="card">
    <div class="wrapper">
      <div class="info-icon-wrapper">
        <DynamicDevIcon v-bind:iconName="item.name" v-bind:iconHeight="iconHeight" v-bind:iconWidth="iconWidth" />
      </div>
      <div class="flex-column">
        <h3 class="info-name">{{ item.name }}</h3>
        <p class="flex-row-svg">
          <LevelIcon  class="svg-subheader"
            v-bind:class="{'skill-basic': item.level === 'Basic' || item.level === 'Básico',
                           'skill-intermediary': item.level === 'Intermediary' || item.level === 'Intermediário',
                           'skill-advanced': item.level === 'Advanced' || item.level === 'Avançado',}"/>
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

  .svg-subheader{
    margin: 0 0.4rem 0 0;
    min-height: 1.3em;
    min-width: 1.3em;
    max-height: 1.3em;
    max-width: 1.3em;
  }

  .skill-basic{
    color: var(--color-skill-basic)
  }
  .skill-intermediary{
    color: var(--color-skill-intermediary)
  }
  .skill-advanced{
    color: var(--color-skill-advanced)
  }
</style>