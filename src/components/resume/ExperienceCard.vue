<script setup>
  import LocationIcon from '../icons/LocationIcon.vue'
  import ExperienceItemIcon from '../icons/resume/ExperienceItemIcon.vue'
  import CalendarIcon from '../icons/CalendarIcon.vue'
  const props = defineProps({
    item: Object,
    language: String
  })

</script>

<template>
  <div class="card">
    <div class="card-body">
      <h3 class="work-position">
        <ExperienceItemIcon class="svg-margin-header"/>
        {{ item.occupation }}</h3>
      <div class="flex-row">
        <h4 class="work-location">
          <LocationIcon class="svg-margin-subheader"/>
          {{ item.company }}, {{ item.city }} - {{ item.state}}
        </h4>
        <h4 class="work-dates">
          <CalendarIcon class="svg-margin-subheader"/>
          {{ item.startDate }}
          <span>&nbsp;-&nbsp;</span>
          <span v-if="item.endDate !== null">{{ item.endDate }}</span>
          <span v-else>
            <span v-if="language == 'English'">Now</span>
            <span v-if="language == 'Portuguese'">Presente</span>
          </span>
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
    row-gap: 0.5rem;
    column-gap: 0.5rem;
  }
  .svg-margin, .svg-margin-header, .svg-margin-subheader{
    margin: 0 0.4rem 0 0;
  }
  .svg-margin-header{
    min-height: 25px;
    min-width: 25px;
    height: 25px;
    width: 25px;
  }
  .svg-margin-subheader{
    min-height: 20px;
    min-width: 20px;
    height: 20px;
    width: 20px;
  }
  .work-position,.work-dates{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
  }
  .work-location{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
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