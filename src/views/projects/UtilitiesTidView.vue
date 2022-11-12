<script setup>
  import ToolsIcon from '../../components/icons/ToolsIcon.vue'
  import LinkIcon from '../../components/icons/LinkIcon.vue';
  import ImageCarousel from '../../components/ImageCarousel.vue';
  const imageList = [
    {
      id:0,
      path:'/images/Projects/utilitiesTid/UtilitiesTID_ManageCode.png'
    },
    {
      id:1,
      path:'/images/Projects/utilitiesTid/UtilitiesTID_ManageFiles.png'
    },
    {
      id:2,
      path:'/images/Projects/utilitiesTid/UtilitiesTID_ManageProcesses.png'
    },
  ]

</script>

<template>
  <div class="center-text">
    <h1 class="flex-bar-header">
      <ToolsIcon class="svg-header"/>Utilities TID
    </h1>
    <p class="description">
      Set of versatile tools and utilities to speed up my work as a Clarion desktop programmer. App developed using C# Winforms using .NET 6.0 and SQLite.
    </p>
    <p class="warning-text">
      Required .NET Desktop Runtime/SDK 6.0.3 or Greater
    </p>
  </div>
  <div class="flex-bar-buttons">
    <a href="https://github.com/Neerosh/UtilitiesTID" target="_blank">
      <button  class="flex-button">
        <LinkIcon class="svg-button"/> GitHub Repository
      </button>
    </a>
  </div>
  <ImageCarousel v-bind:imagesList="imageList"/>
</template>

<style scoped>
  .description,.warning-text{
    font-size: 16px;
  }

  .warning-text{
    color: var(--color-warning);
    font-weight: 700;
    padding: 0 0.5rem 1rem 0.5rem;
  }

  .description{
    color: var(--color-text-secondary);
    padding: 1rem 0.5rem;
  }

  .flex-bar-images-mini, .flex-bar-images,  .flex-bar-buttons, .flex-button{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .flex-bar-header{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-weight: 500;
  }

  .flex-bar-images, .flex-bar-images-mini{
    margin: 1rem 0 0 0;
    column-gap: 0.5rem;
  }

  .project-image{
    width: 700px;
  }

  .project-image-mini{
    width: 150px;
    transition: 0.2s;
    border: 1px solid var(--color-text-secondary);
  }

  .project-image-mini:hover{
    border-color: var(--color-card-border);
  }

  .svg-header{
    min-height: 25px;
    max-height: 25px;
    min-width: 25px;
    max-width: 25px;
    margin-right: 0.3rem;
  }

  .svg-button{
    min-height: 25px;
    max-height: 25px;
    min-width: 25px;
    max-width: 25px;
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