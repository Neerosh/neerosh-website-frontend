<script>
  import ProjectsCards from '../components/ProjectsCards.vue';
  import ProjectService from '../services/ProjectService.js';

  export default {
    data(){
      return{
        projects: []
      }
    },
    components: { ProjectsCards },
    async created(){
      this.projects  = await ProjectService.getProjects()
    }
  }  
  </script>
  

  <template>
    <div class="center-text">
      <h1>Projects</h1>
    </div>
    <ProjectsCards v-bind:projects="projects" />
  </template>
  
  <style scoped>
    .center-text{
      text-align: center;
    }
  </style>