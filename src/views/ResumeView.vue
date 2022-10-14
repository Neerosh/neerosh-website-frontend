<script setup>
  import { ref } from 'vue'
  import IntroductionIcon from '../components/icons/resume/IntroductionIcon.vue';
  import EducationIcon from '../components/icons/resume/EducationIcon.vue';
  import ExperienceIcon from '../components/icons/resume/ExperienceIcon.vue';
  import DeveloperIcon from '../components/icons/resume/DeveloperIcon.vue';
  import SkillSection from '../components/resume/SkillSection.vue';
  const headingIconHeight = ref('30px')
  const headingIconWidth= ref('30px')
</script>

<template>
  <section name="Basic-Information" class="basic-info">
    <h1>Firstname Forename Lastname</h1>
    <h2 class="developer">
      <DeveloperIcon class="svg-heading" v-bind:height="'25px'" v-bind:width="'25px'"/>Developer
    </h2>
  </section>
  <section name="Introduction">
    <h2 class="resume-section-heading">
      <IntroductionIcon class="svg-heading" v-bind:height="headingIconHeight" v-bind:width="headingIconWidth"/> Introduction
    </h2>
    <p class="resume-section-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at leo malesuada, porttitor urna in, sodales urna. Nam rhoncus metus pellentesque imperdiet lobortis. Quisque pretium turpis sem, ac egestas nibh tincidunt sit amet. Phasellus pulvinar felis et lorem tincidunt, eu lacinia orci lacinia. Duis consequat quam id venenatis aliquam. Quisque iaculis sapien sed ipsum semper, non scelerisque neque tristique. Pellentesque egestas, dolor non lacinia dictum, orci erat rhoncus risus, sit amet elementum augue urna non mi. Maecenas vitae nunc luctus dui gravida efficitur. In vitae elit sed libero hendrerit eleifend. Nulla non nulla velit. Praesent magna odio, bibendum et orci quis, porttitor sodales lacus. Nullam eros justo, ultrices ac interdum non, maximus quis mi. Fusce volutpat molestie nulla, quis semper nisi. Donec vel ex ut tellus lacinia condimentum. Fusce bibendum feugiat lectus, et scelerisque urna suscipit sed. Pellentesque sed elementum nibh.
    </p>
  </section>
  <br>
  <section name="Education">
    <h2 class="resume-section-heading">
      <EducationIcon class="svg-heading" v-bind:height="headingIconHeight" v-bind:width="headingIconWidth"/>Education
    </h2>
    <p class="resume-section-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at leo malesuada, porttitor urna in, sodales urna. Nam rhoncus metus pellentesque imperdiet lobortis. Quisque pretium turpis sem, ac egestas nibh tincidunt sit amet. Phasellus pulvinar felis et lorem tincidunt, eu lacinia orci lacinia. Duis consequat quam id venenatis aliquam. Quisque iaculis sapien sed ipsum semper, non scelerisque neque tristique. Pellentesque egestas, dolor non lacinia dictum, orci erat rhoncus risus, sit amet elementum augue urna non mi. Maecenas vitae nunc luctus dui gravida efficitur. In vitae elit sed libero hendrerit eleifend. Nulla non nulla velit. Praesent magna odio, bibendum et orci quis, porttitor sodales lacus. Nullam eros justo, ultrices ac interdum non, maximus quis mi. Fusce volutpat molestie nulla, quis semper nisi. Donec vel ex ut tellus lacinia condimentum. Fusce bibendum feugiat lectus, et scelerisque urna suscipit sed. Pellentesque sed elementum nibh.
    </p>
  </section>
  <br>
  <section name="Experience">
    <h2 class="resume-section-heading">
      <ExperienceIcon class="svg-heading" v-bind:height="headingIconHeight" v-bind:width="headingIconWidth"/>Experience
    </h2>
    <p class="resume-section-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at leo malesuada, porttitor urna in, sodales urna. Nam rhoncus metus pellentesque imperdiet lobortis. Quisque pretium turpis sem, ac egestas nibh tincidunt sit amet. Phasellus pulvinar felis et lorem tincidunt, eu lacinia orci lacinia. Duis consequat quam id venenatis aliquam. Quisque iaculis sapien sed ipsum semper, non scelerisque neque tristique. Pellentesque egestas, dolor non lacinia dictum, orci erat rhoncus risus, sit amet elementum augue urna non mi. Maecenas vitae nunc luctus dui gravida efficitur. In vitae elit sed libero hendrerit eleifend. Nulla non nulla velit. Praesent magna odio, bibendum et orci quis, porttitor sodales lacus. Nullam eros justo, ultrices ac interdum non, maximus quis mi. Fusce volutpat molestie nulla, quis semper nisi. Donec vel ex ut tellus lacinia condimentum. Fusce bibendum feugiat lectus, et scelerisque urna suscipit sed. Pellentesque sed elementum nibh.
    </p>
  </section>
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