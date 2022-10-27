<script>
  import EducationIcon from '../icons/resume/EducationIcon.vue';
  import EducationCard from './EducationCard.vue';
  import UserEducationService from '../../services/UserEducationService';
  export default {
    name: 'EducationSection',
    data() {
      return {
        headingIconHeight: '30px',
        headingIconWidth: '30px',
        educationList: []
      }
    },
    components:{ 
      EducationIcon,EducationCard
    },
    async created(){
      this.educationList = await UserEducationService.getUserEducations("6359bbec73c2685741589a0f");

      const optionsDate= { year:"numeric", month:"2-digit", day:"2-digit", timeZone: 'UTC'};

      this.educationList.forEach(education => {
        education.startDate = new Date(education.startDate).toLocaleDateString('en-US', optionsDate);
        if (education.endDate !== null){
          education.endDate = new Date(education.endDate).toLocaleDateString('en-US', optionsDate);
        }
      });
    }
  }
</script>

<template>
  <section name="Education">
    <h2 class="resume-section-heading">
      <EducationIcon class="svg-heading" v-bind:height="headingIconHeight" v-bind:width="headingIconWidth"/>Education
    </h2>
    <EducationCard v-for="education in educationList" v-bind:item="education" />
  </section>

</template>

<style scoped>
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
  .svg-heading{
    margin: 0 0.4rem 0 0;
  }
  
  @media (max-width: 700px){

  }
</style>