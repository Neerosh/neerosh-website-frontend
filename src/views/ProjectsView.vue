<script>
  import ProjectsIcon from '../components/icons/menu/ProjectsIcon.vue';
  import ProjectsCards from '../components/ProjectsCards.vue';
  import ProjectService from '../services/ProjectService.js';

  export default {
    data(){
      return{
        projects: []
      }
    },
    components: { ProjectsCards,ProjectsIcon },
    async created(){
      this.projects  = await ProjectService.getProjects()
    }
  }  
  </script>
  

  <template>
    <div class="center-text">
      <h1 class="flex-bar-wrap">
        <ProjectsIcon class="svg"/>
        Projects
      </h1>
    </div>
    <ProjectsCards v-bind:projects="projects" />
  </template>
  
<style scoped>
  .svg {
    min-height: 30px;
    max-height: 30px;
    min-width: 30px;
    max-width: 30px;
    margin-right: 0.3rem;
  }

  .flex-bar-wrap{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-weight: 500;
  }
</style>