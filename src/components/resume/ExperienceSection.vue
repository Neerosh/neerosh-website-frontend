<script>
  import ExperienceIcon from '../icons/resume/ExperienceIcon.vue';
  import ExperienceCard from './ExperienceCard.vue';
  import ExperienceService from '../../services/ExperienceService';
  export default {
    name: 'ExperienceSection',
    data() {
      return {
        headingIconHeight: '30px',
        headingIconWidth: '30px',
        experiencesList: []
      }
    },
    components:{ 
      ExperienceIcon,ExperienceCard
    },
    async created(){
      this.experiencesList = await ExperienceService.getExperiences();

      const optionsDate= { year:"numeric", month:"2-digit", day:"2-digit", timeZone: 'UTC'};

      this.experiencesList.forEach(experience => {
        experience.startDate = new Date(experience.startDate).toLocaleDateString('en-US', optionsDate);
        if (experience.endDate !== null){
          experience.endDate = new Date(experience.endDate).toLocaleDateString('en-US', optionsDate);
        }
      });
    }
  }
</script>

<template>
  <section name="Experience">
    <h2 class="resume-section-heading">
      <ExperienceIcon class="svg-heading" v-bind:height="headingIconHeight" v-bind:width="headingIconWidth"/>Experience
    </h2>
    <ExperienceCard v-for="experience in experiencesList" v-bind:item="experience" />
  </section>

</template>

<style scoped>
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
  .svg-heading{
    margin: 0 0.4rem 0 0;
  }
  
  @media (max-width: 700px){

  }
</style>