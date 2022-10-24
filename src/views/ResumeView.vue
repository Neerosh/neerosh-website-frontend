<script setup>
  import { ref } from 'vue'
  import IntroductionSection from '../components/resume/IntroductionSection.vue';
  import EducationSection from '../components/resume/EducationSection.vue';
  import ExperienceSection from '../components/resume/ExperienceSection.vue';
  import SkillSection from '../components/resume/SkillSection.vue';
</script>

<template>
  <IntroductionSection />
  <br>
  <EducationSection />
  <br>
  <ExperienceSection />
  <br>
  <SkillSection />
</template>

<style scoped>
  button{
    margin: 0.5rem 0.5rem 0.5rem 0 ;
  }
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
  .skill-icons{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .flex-bar-buttons{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0.5rem 0;
  }
  .center-text{
    text-align: center;
    margin-bottom: 1rem;
  }
  @media (max-width: 700px){
    .skill-icons, .flex-bar-buttons{
      justify-content: center;
    }
    .resume-section-heading{
      text-align: center;
    }
  }
</style>