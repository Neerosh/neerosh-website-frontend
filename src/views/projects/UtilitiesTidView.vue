<script setup>
  import ToolsIcon from '../../components/icons/generic/ToolsIcon.vue'
  import ResourcesIcon from '../../components/icons/generic/ResourcesIcon.vue'
  import GitHubIcon from '../../components/icons/development/tools/GitHubIcon.vue';
  import ImageCarousel from '../../components/ImageCarousel.vue';
  import ProjectDetailCards from '../../components/ProjectDetailCards.vue';

  const imageList = [
    {
      name:'Manage Code',
      path:'/images/Projects/utilitiesTid/UtilitiesTID_ManageCode.png'
    },
    {
      name:'Manage Files',
      path:'/images/Projects/utilitiesTid/UtilitiesTID_ManageFiles.png'
    },
    {
      name:'Manage Processes',
      path:'/images/Projects/utilitiesTid/UtilitiesTID_ManageProcesses.png'
    },
    {
      name:'Clarion Converter',
      path:'/images/Projects/utilitiesTid/UtilitiesTID_ClarionConverter.png'
    },
    {
      name:'File Locks',
      path:'/images/Projects/utilitiesTid/UtilitiesTID_FileLocks.png'
    },
  ]

  const detailsList = [
    {
      name:'Code Snippets',
      description:'Add, change or delete repetitive code snippets. Use the registered codes to quickly copy to the clipboard.',
      icon:'Code Snippet'
    },
    {
      name:'Clarion Converter',
      description:'Convert times and dates to the standard format used by the Clarion language. Find out the day of week of any date in Clarion format.',
      icon:'Converter'
    },
    {
      name:'File Manager',
      description:'Add, change or delete file filters. Use filters to copy, move or delete duplicated files. Generate or validate file hashes.',
      icon:'File Manager'
    },
    {
      name:'File Locks',
      description:'Check if files are open by any process or shared folder. Find out which user is responsible for the process or shared folder.',
      icon:'File Lock'
    },
    {
      name:'Process Manager',
      description:'List or search processes, check the user responsible for each process. End processes with one click.',
      icon:'Process Manager'
    },
    {
      name:'SQL Scripts',
      description:'Generate predefined scripts using specific folder paths from your machine.',
      icon:'Script'
    },
    {
      name:'Watcher',
      description:'Watch over files or folders in real time, choose the events to be notified: name change, last access, etc...',
      icon:'Watcher'
    },
  ]

</script>

<template>
  <div class="center-text">
    <h1 class="flex-bar-header">
      <ToolsIcon class="svg-header"/>Utilities TID
    </h1>
    <p class="description">
      Set of versatile tools and utilities to speed up my work as a Clarion desktop programmer. App developed using C# Winforms .NET 6.0 and SQLite.
    </p>
    <p class="warning-text">
      Required .NET Desktop Runtime/SDK 6.0.3 or Greater
    </p>
  </div>
  <div class="flex-bar-buttons">
    <a href="https://github.com/Neerosh/UtilitiesTID" target="_blank">
      <button  class="flex-button">
        <GitHubIcon class="svg-button"/>
        GitHub Repository
      </button>
    </a>
  </div>
  <ImageCarousel v-bind:imagesList="imageList"/>
  <section name="Resources">
    <h2 class="section-heading">
      <ResourcesIcon class="svg-heading"/>Modules
    </h2>
    <ProjectDetailCards v-bind:projectDetails="detailsList"/>
  </section>
</template>

<style scoped>

  .warning-text{
    color: var(--color-warning);
    font-weight: 700;
    padding: 0 0.5rem 1rem 0.5rem;
  }

  .description{
    color: var(--color-text-secondary);
    padding: 1rem 0.5rem;
  }

  .flex-bar-header, .flex-bar-buttons{
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

  .section-heading{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    margin: 1.5rem 0 0.5rem;
    color: var(--color-heading);
    font-weight: 600;
    border-bottom: solid 2px;
  }

  .svg-header,.svg-heading{
    min-height: 30px;
    min-width: 30px;
    max-height: 30px;
    max-width: 30px;
    margin-right: 0.3rem;
  }
  

  @media (max-width: 800px) {
    .project-image{
      width: 95%;
    }
    .project-image-mini{
      width: 28%;
    }
  }
</style>