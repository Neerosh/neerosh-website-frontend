<script>
import GitHubCards from '../../components/GitHubCards.vue'
import GitHubIcon from '../../components/icons/development/tools/GitHubIcon.vue'

var r = document.querySelector(':root');
var rs = getComputedStyle(r);
const originalCardBorderColor = rs.getPropertyValue('--color-card-border');
const originalLinkColor = rs.getPropertyValue('--color-link');
const originalLinkHighlightColor = rs.getPropertyValue('--color-link-hover');

export default {
  components: { GitHubCards, GitHubIcon },
  data() {
    return {
      inputUsername: '',
      searchUsername: '',
      inputCardBorderColor: '',
      inputLinkColor: '',
      inputLinkHighlightColor: ''
    };
  }, 
  methods:{
    SearchClick(){
      if (this.searchUsername != this.inputUsername){
        this.searchUsername = this.inputUsername
      }
    },
    UpdateCardBorderColor(){
      r.style.setProperty('--color-card-border', this.inputCardBorderColor);
    },
    UpdateLinkColor(){
      r.style.setProperty('--color-link', this.inputLinkColor);
    },
    UpdateLinkHighlightColor(){
      r.style.setProperty('--color-link-hover', this.inputLinkHighlightColor);
    }
  },
  created(){
    this.inputCardBorderColor = rs.getPropertyValue('--color-card-border');
    this.inputLinkColor = rs.getPropertyValue('--color-link');
    this.inputLinkHighlightColor = rs.getPropertyValue('--color-link-hover');
  },
  unmounted(){
    r.style.setProperty('--color-card-border', originalCardBorderColor);
    r.style.setProperty('--color-link', originalLinkColor);
    r.style.setProperty('--color-link-hover', originalLinkHighlightColor);
  }
}
</script>
  
<template>
  <div class="center-text">
    <h1 class="flex-bar-wrap">
      <GitHubIcon class="svg-header"/>GitHub User Search
    </h1>
    <p class="project-description">
      Search request made using javascript and the GitHub API, listing basic information of the user and his publics repositories in cards.
    </p>
    <div class="flex-bar-nowrap">
      <input class="input-search" v-model="inputUsername" v-on:keyup.enter="SearchClick" placeholder="Username"/>
      <button class="search-button" v-on:click="SearchClick">Search</button>
    </div>
    <div class="flex-bar-colors">
      <div class="flex-color">
        <label>Card Border Color:</label>
        <input type="color" v-model="inputCardBorderColor" v-on:change="UpdateCardBorderColor"/>
      </div>
      <div class="flex-color">
        <label>Link Color:</label>
        <input type="color" v-model="inputLinkColor" v-on:change="UpdateLinkColor"/>
      </div>
      <div class="flex-color">
        <label>Link Highlight Color:</label>
        <input type="color" v-model="inputLinkHighlightColor" v-on:change="UpdateLinkHighlightColor"/>
      </div>
    </div>
  </div>
  <GitHubCards v-bind:username="searchUsername" v-bind:itemsPerPage="9"/>
</template>
       
<style scoped>
  .center-text{
    margin-bottom: 1rem;
  }
  
  .flex-bar-nowrap{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
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

  .flex-bar-colors{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .flex-color{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding-right: 0.5rem;
  }

  .input-search{
    margin: 1rem 0;
    padding: 0.7rem 0.5rem;
    min-width: 50%;
    border: solid 1px var(--color-button-border);
    border-radius: 10px;
  }

  .project-description{
    padding: 1rem 0.5rem;
    text-align: center;
    color: var(--color-text-secondary);
  }

  label{
    padding:0.5rem;
    color: var(--color-text-primary);
  }

  .search-button{
    margin: 1rem 0 1rem 0.5rem;
    padding: 0.7rem 1rem;
  }
  
  @media (max-width: 700px){
    .flex-color{
      justify-content: space-between;
      width: 100%;
    }
    
    .input-search{
      width: 100%;
    }
  }
</style>