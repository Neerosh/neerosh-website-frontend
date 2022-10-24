<script setup>
  import LocationIcon from '../icons/resume/LocationIcon.vue'
  import CalendarIcon from '../icons/CalendarIcon.vue'
  import GraduationIcon from '../icons/resume/GraduationIcon.vue';
  const props = defineProps({
    item: Object,
  })

</script>

<template>
  <div class="card">
    <div class="card-body">
      <h3 class="education-position">
        <GraduationIcon class="svg-margin" v-bind:height="'20px'" v-bind:width="'20px'" />
        {{ item.name }}
      </h3>
      <div class="flex-row">
        <h4 class="education-location">
          <LocationIcon class="svg-margin" v-bind:height="'15px'" v-bind:width="'15px'" />
          {{ item.location }}
        </h4>
        <h4 class="education-dates">
          <CalendarIcon class="svg-margin" v-bind:height="'15px'" v-bind:width="'15px'"/>
          {{ item.startDate }}
          <span>&nbsp;-&nbsp;</span>
          <span v-if="item.endDate !== null">{{ item.endDate }}</span>
          <span v-else>Now</span>
        </h4>
      </div>
      <p class="description">{{ item.description }}</p>
    </div>
  </div>
</template>

<style scoped>
  .card{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0.5rem;
    width: 100%;
  }
  .card-body{
    width: 100%;
  }
  .flex-row{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.3rem;
    row-gap: 0.2rem;
  }
  .svg-margin{
    margin: 0 0.4rem 0 0;
  }
  .education-position,.education-dates{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
  }
  .education-location{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    margin-right: 0.3rem;
  }
  .description{
    margin: 0.3rem 0 0 0;
    color: var(--color-text-secondary);
  }
  @media(max-width:700px){
    .flex-row{
      flex-direction: column;
      align-items: flex-start;
    }

  }
</style>