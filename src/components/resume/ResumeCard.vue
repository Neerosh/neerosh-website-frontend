<script setup>
  import LocationIcon from '../icons/generic/LocationIcon.vue'
  import CalendarIcon from '../icons/resume/CalendarIcon.vue'
  import LevelIcon from '../icons/resume/LevelIcon.vue'
  import ExperienceItemIcon from '../icons/resume/ExperienceItemIcon.vue'
  import EducationItemIcon from '../icons/resume/EducationItemIcon.vue';
  import DynamicDevIcon from '../DynamicDevIcon.vue';

  const props = defineProps({
    item: Object,
    language: String,
    itemType: String
  })

</script>

<template>
  <div class="card" v-if="itemType == 'Education'">
    <div class="card-body">
      <h3 class="flex-row-svg header">
        <EducationItemIcon class="svg-margin-header"/>
        {{ item.courseName }}
      </h3>
      <div class="flex-row">
        <h4 class="flex-row-svg">
          <LocationIcon class="svg-margin-subheader"/>
          {{ item.institution }}, {{ item.city }} - {{ item.state}}
        </h4>
        <h4 class="flex-row-svg">
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
  <!-- DIVISION-->
  <div class="card" v-if="itemType == 'Experience'">
    <div class="card-body">
      <h3 class="flex-row-svg header">
        <ExperienceItemIcon class="svg-margin-header"/>
        {{ item.occupation }}
      </h3>
      <div class="flex-row">
        <h4 class="flex-row-svg">
          <LocationIcon class="svg-margin-subheader"/>
          {{ item.company }}, {{ item.city }} - {{ item.state}}
        </h4>
        <h4 class="flex-row-svg">
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
  <!-- DIVISION-->
  <div class="card" v-if="itemType == 'Skill'">
    <div class="card-body">
      <div class="flex-row-skill">
        <div class="svg-skill">
          <DynamicDevIcon v-bind:iconName="item.name" />
        </div>
        <div class="flex-skill-info">
          <h3 class="header">
            {{ item.name }}
          </h3>
          <h4 class="flex-row-svg" title="Level">
            <LevelIcon class="svg-margin-subheader"/>
            {{ item.level }}
          </h4>
          <p class="description">{{ item.description }}</p>
        </div>
      </div>
      <div v-if="item.tags" class="info-tag-list">
        <span v-for="tag in item.tags" class="info-tag">{{ tag }}</span>
      </div>
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

  .flex-row,.flex-row-skill{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.3rem;
    row-gap: 0.5rem;
    column-gap: 0.5rem;
  }

  .flex-row-skill{
    justify-content: left;
    align-items: flex-start;
  }

  .flex-row-svg{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
  }

  .flex-skill-info{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    row-gap: 0.2rem;
  }

  .svg-margin-header,.svg-margin-subheader{
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

  .svg-skill{
    min-width: 80px;
    min-width: 80px;
  }

  .header{
    font-weight: 500;
  }

  .description{
    margin: 0.3rem 0 0 0;
    color: var(--color-text-secondary);
  }

  .info-tag-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 0.4rem;
    row-gap: 0.4rem;
    margin: 0.5rem 0 0 0;
  }

  .info-tag{
    font-size: 13px;
    padding: 0.2rem 0.6rem;
    background-color: var(--color-link-hover);
    border-radius: 15px;
  }

  @media(max-width:700px){
    .flex-row{
      flex-direction: column;
      align-items: flex-start;
    }

  }
</style>