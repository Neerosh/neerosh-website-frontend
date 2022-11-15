<script setup>
  import PythonSolidIcon from '../../components/icons/development/languages/PythonSolidIcon.vue'
  import GitHubIcon from '../../components/icons/development/tools/GitHubIcon.vue';
  import ImageCarousel from '../../components/ImageCarousel.vue';

  const imageList = [
    {
      name:'Database Search TID',
      path:'/images/Projects/pythonScripts/PythonScripts_DatabaseSearchTID.png'
    },
    {
      name:'File Organizer',
      path:'/images/Projects/pythonScripts/PythonScripts_FileOrganizer.png'
    },
    {
      name:'Music Lyrics Finder',
      path:'/images/Projects/pythonScripts/PythonScripts_MusicLyricsFinder.png'
    }
  ]
</script>

<template>
  <div class="center-text">
    <h1 class="flex-bar-header">
      <PythonSolidIcon class="svg-header"/>
      Python Scripts
    </h1>
    <p class="description">
      Set of scripts designed to automate or improve repetitive tasks.
    </p>
  </div>
  <div class="flex-bar-buttons">
    <a href="https://github.com/Neerosh/PythonScripts" target="_blank">
      <button  class="flex-button">
        <GitHubIcon class="svg-button"/>
        GitHub Repository
      </button>
    </a>
  </div>
  <ImageCarousel v-bind:imagesList="imageList"/>
</template>

<style scoped>
  .description{
    color: var(--color-text-secondary);
    padding: 1rem 0.5rem;
  }

  .flex-bar-header, .flex-bar-buttons, .flex-button{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .flex-bar-header{
    font-weight: 500;
  }

  .svg-header{
    min-height: 30px;
    min-width: 30px;
    max-height: 30px;
    max-width: 30px;
    margin-right: 0.3rem;
  }

  .svg-button{
    min-height: 25px;
    max-height: 25px;
    min-width: 25px;
    max-width: 25px;
    margin-right: 0.3rem;
  }
</style>