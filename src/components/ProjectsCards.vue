<script>
    import { RouterLink } from 'vue-router';
    export default {
      props: {
        projects: Array,
      },
      components: { RouterLink }
    }
  </script>
  
  <template>
    <div class="projects-list">
      <div class="card" v-for="project in projects">
        <img v-bind:src="project.imagePath">
        <div class="card-content">
          <RouterLink class="title-link" v-bind:to="project.urlPath">
            {{ project.name }}
          </RouterLink>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </template>
   
  <style scoped>
    .center-text{
      text-align: center;
    }
  
    .projects-list{
      display: grid;
      grid-template-columns: repeat(4,minmax(0, 1fr));
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
      padding: 1rem;
    }
    img{
      border-radius: 5px 5px 0 0 ;
    }
  
    .title-link{
      font-size: 1.2em;
      color: var(--color-link);
      text-decoration: none;
      font-weight: 600;
    }
    .title-link:hover{
      color: var(--color-link-hover);
      transition:  0.4s;
    }

    .card-content > p{
      color: var(--color-text-primary);
      margin-top: 0.3rem;
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