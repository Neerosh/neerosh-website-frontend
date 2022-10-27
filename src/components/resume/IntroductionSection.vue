<script>
  import IntroductionIcon from '../icons/resume/IntroductionIcon.vue';
  import DeveloperIcon from '../icons/resume/DeveloperIcon.vue';
  import UserService from '../../services/UserService.js';
  import UserBasicService from '../../services/UserBasicService.js';
  export default {
    name: 'IntroductionSection',
    data() {
      return {
        headingIconHeight: '30px',
        headingIconWidth: '30px',
        user: Object,
        userBasic: Object
      }
    },
    components:{ 
      DeveloperIcon,IntroductionIcon
    },
    async created(){
      this.user = await UserService.getUser("6359bbec73c2685741589a0f");
      const userBasic = await UserBasicService.getUserBasic("6359bbec73c2685741589a0f","English");
      this.userBasic = userBasic[0]
    }
  }
</script>

<template>
  <section name="Basic-Information" class="basic-info">
    <h1>{{ user.fullname }}</h1>
    <h2 class="developer">
      <DeveloperIcon class="svg-heading" v-bind:height="'25px'" v-bind:width="'25px'"/>{{ userBasic.title }}
    </h2>
  </section>
  <section name="Introduction">
    <h2 class="resume-section-heading">
      <IntroductionIcon class="svg-heading" v-bind:height="headingIconHeight" v-bind:width="headingIconWidth"/> Introduction
    </h2>
    <p class="resume-section-paragraph"> {{ userBasic.introduction }} </p>
  </section>
</template>

<style scoped>
  .basic-info{
    margin: 1rem 0;
    color: var(--color-heading);
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
    color: var(--color-heading);
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