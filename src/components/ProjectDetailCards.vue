<script>
  import DynamicProjectIcon from './DynamicProjectIcon.vue'
  export default {
    props: {
      projectDetails: {
        typeof: Array,
        require: true
      }
    },
    components: { DynamicProjectIcon }
  }
</script>

<template>
  <div class="project-detail-list">
    <div class="card" v-for="item in projectDetails">
      <div class="flex-name">
        <DynamicProjectIcon v-bind:iconName="item.icon" v-bind:iconHeight="'30px'" v-bind:iconWidth="'30px'"/>
        <h3>
          {{ item.name }}
        </h3>
      </div>
      <p class="description">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
  .project-detail-list{
    display: grid;
    grid-template-columns: repeat(3,minmax(0, 1fr));
    margin-top: 1.5rem;
    column-gap: 1rem;
    row-gap: 1rem;
  }

  .card{
    display: flex;
    flex-direction: column;
    border: 2px solid var(--color-card-border);
    background-color: var(--color-card-background);
    border-radius: 7px;
    padding: 1rem;
  }

  .description{
    color: var(--color-text-secondary);
    margin-top: 0.5rem;
  }

  .flex-name{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    column-gap: 0.3rem;
  }

  .flex-name > h3{
    font-weight: 500;
    font-size: 20px;
  }

  .svg-name{
    min-height: 30px;
    max-height: 30px;
    min-width: 30px;
    max-width: 30px;
    margin-right: 0.3rem;
  }

  @media (max-width: 1000px) {
    .project-detail-list{
      grid-template-columns: repeat(2,minmax(0, 1fr));
    }
  }

  @media (max-width: 700px) {
    .project-detail-list{
      grid-template-columns: minmax(0, 1fr);
    }
  }
</style>