<script>
  import ProjectsCards from '../components/ProjectsCards.vue';
  
  export default {
    data() {
      return {
        projectsArray: [
          {
            name: "Utilities TID",
            description: "Set of versatile tools and utilities designed for my work environment as a clarion desktop developer.",
            image: "images/UtilitiesTID_ManageFiles.png",
            url: "/projects/UtilitiesTID"
          },
          {
            name: "Python Automation Scripts",
            description: "Set of scripts designed to automate or improve repetitive tasks.",
            image: "images/PythonAutomationScripts_DatabaseSearch.png",
            url: "/projects/PythonAutomationScripts"
          },
          {
            name: "GitHub User Search",
            description: "User search made using JavaScript and Github API.",
            image: "images/GitHubUserSearch_Index.png",
            url: "/projects/GitHubUserSearch"
          },
        ]
      };
    },
    components: { ProjectsCards }
  }
  
  </script>
  
  
  <template>
    <div class="center-text">
      <h1>Projects</h1>
    </div>
    <ProjectsCards v-bind:projects="projectsArray" />
  </template>
  
  <style scoped>
    .center-text{
      text-align: center;
    }
  </style>