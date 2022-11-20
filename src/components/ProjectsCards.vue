<script>
  import { RouterLink } from 'vue-router';
  import LinkIcon from './icons/generic/LinkIcon.vue'
  export default {
    props: {
      projects: Array,
    },
    components: { RouterLink, LinkIcon }
  }
</script>
  
<template>
  <div class="projects-list">
    <div class="card" v-for="project in projects">
      <div class="image-container">
        <img v-bind:src="project.imagePath"/>
        <div class="image-overlay">
          <div class="card-content">
            <h3 class="card-title">
              {{ project.name }}
            </h3>
            <p class="card-description">
              {{ project.description }}
            </p>
            <RouterLink v-bind:to="project.urlPath" class="project-link">
              <button class="project-button">
                View Project
                <LinkIcon class="svg-button"/> 
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
   
<style scoped>
  img{
    display: block;
    max-width: 100%;
    border-radius: 5px 5px;
  }

  .image-container{
    position: relative;
    width: 100%;
  }

  .image-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 5px;
    background-color: var(--color-overlay);
    overflow: hidden;
    width: 100%;
    height: 100%;
    transform: scale(0);
    transition: .4s ease;
  }

  .card:hover .image-overlay {
    transform: scale(1);
  }

  .card:hover  .card-title:hover{
    color: var(--color-link-hover);
    transition:  0.4s;
  }

  .project-button{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    font-size: 17px;
  }

  .svg-button{
    min-height: 25px;
    min-width: 25px;
    max-height: 25px;
    max-width: 25px;
  }

  .project-link{
    width: 100%;
    margin-top: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .projects-list{
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
  }

  .card-content{
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 100%;
  }

  .card-title{
    color: var(--color-link);
    text-decoration: none;
    font-weight: 600;
  }

  .card-description{
    color: var(--color-text-primary);
    margin-top: 0.5rem;
  }

  @media (max-width: 1000px) {
    .projects-list{
      grid-template-columns: repeat(2,minmax(0, 1fr));
    }
  }

  @media (max-width: 700px) {
    .projects-list{
      grid-template-columns: minmax(0, 1fr);
    }
  }

</style>