<script>
  import IntroductionIcon from '../icons/resume/IntroductionIcon.vue';
  import DeveloperIcon from '../icons/resume/DeveloperIcon.vue';
  import ProfileService from '../../services/ProfileService.js';

  export default {
    name: 'IntroductionSection',
    data() {
      return {
        headingIconHeight: '30px',
        headingIconWidth: '30px',
        profile: Object
      }
    },
    components:{ 
      DeveloperIcon,IntroductionIcon
    },
    async created(){
      this.profile = await ProfileService.getProfile("63557372954d77adbf584221");
    }
  }
</script>

<template>
  <section name="Basic-Information" class="basic-info">
    <h1>{{ profile.fullname }}</h1>
    <h2 class="developer">
      <DeveloperIcon class="svg-heading" v-bind:height="'25px'" v-bind:width="'25px'"/>{{ profile.occupation }}
    </h2>
  </section>
  <section name="Introduction">
    <h2 class="resume-section-heading">
      <IntroductionIcon class="svg-heading" v-bind:height="headingIconHeight" v-bind:width="headingIconWidth"/> Introduction
    </h2>
    <p class="resume-section-paragraph"> {{ profile.introduction }} </p>
  </section>
</template>

<style scoped>
  .basic-info{
    margin: 1rem 0;
    color: var(--color-link);
  }
  .developer{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
  }
  .resume-section-heading{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;

    margin: 0.5rem 0;
    color: var(--color-link);
    font-weight: 600;
    border-bottom: solid 2px;
  }
  .resume-section-sub-heading{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;

    margin: 0.5rem 0;
    color: var(--color-link);
    font-weight: 600;
  }
  .svg-heading{
    margin: 0 0.3rem 0 0;
  }
  .resume-section-paragraph{
    padding: 0.5rem 0 0 0.5rem;
  }

  @media (max-width: 700px){
    .resume-section-heading{
      text-align: center;
    }
  }
</style>