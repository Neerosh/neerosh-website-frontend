<script>
  export default {
    props: {
      projectDetails: {
        typeof: Array,
        require: true
      }
    },
    components: {  }
  }
</script>

<template>
  <div class="project-detail-list">
    <div class="card" v-for="item in projectDetails">
      <h2>
        {{ item.name }}
      </h2>
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
    color: var(--color-text-secondary)
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