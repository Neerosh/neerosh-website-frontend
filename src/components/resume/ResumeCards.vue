<script>
  import LocationIcon from '../icons/generic/LocationIcon.vue'
  import CalendarIcon from '../icons/resume/CalendarIcon.vue'
  import LevelIcon from '../icons/resume/LevelIcon.vue'
  import ExperienceItemIcon from '../icons/resume/ExperienceItemIcon.vue'
  import EducationItemIcon from '../icons/resume/EducationItemIcon.vue';
  import DynamicDevIcon from '../DynamicDevIcon.vue';

  export default {
    props: {
      itemList: Array,
      language: String,
      itemType: String,
      skillType: {
        typeOf: String,
        default: ''
      }
    },
    computed: {
      filteredItemList(){
        return this.itemList.filter(item => item.type == this.skillType)
      }
    },
    methods: {
      formatDate(date){
        var optionsDate= { year:"numeric", month:"2-digit", timeZone: 'UTC' };
        if (date !== null){
          date = new Date(date).toLocaleDateString('en-US', optionsDate);
        }
        return date
      }
    },
    components: {
      CalendarIcon, DynamicDevIcon, EducationItemIcon, ExperienceItemIcon, LevelIcon, LocationIcon
    }
  }
</script>

<template>
  <div v-if="itemType == 'Education'">
    <div class="card" v-for="item in itemList">
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
          <h4 class="flex-row-svg flex-date">
            <CalendarIcon class="svg-margin-subheader"/>
            {{ formatDate(item.startDate) }}
            <span>&nbsp;-&nbsp;</span>
            <span v-if="formatDate(item.endDate) !== null">{{ formatDate(item.endDate) }}</span>
            <span v-else>
              <span v-if="language == 'English'">Now</span>
              <span v-if="language == 'Portuguese'">Presente</span>
            </span>
          </h4>
        </div>
        <p class="description">{{ item.description }}</p>
      </div>
    </div>
  </div>
  <!-- DIVISION-->
  <div v-if="itemType == 'Experience'">
    <div class="card" v-for="item in itemList">
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
          <h4 class="flex-row-svg flex-date">
            <CalendarIcon class="svg-margin-subheader"/>
            {{ formatDate(item.startDate) }}
            <span>&nbsp;-&nbsp;</span>
            <span v-if="formatDate(item.endDate) !== null">{{ formatDate(item.endDate) }}</span>
            <span v-else>
              <span v-if="language == 'English'">Now</span>
              <span v-if="language == 'Portuguese'">Presente</span>
            </span>
          </h4>
        </div>
        <p class="description">{{ item.description }}</p>
      </div>
    </div>
  </div>
  <!-- DIVISION-->
  <div class="grid-skills" v-if="itemType == 'Skill'">
    <div class="card-skill" v-for="item in filteredItemList">
      <div class="flex-row-skill">
        <div>
          <DynamicDevIcon v-bind:iconName="item.name" 
          v-bind:iconHeight="'45px'"
          v-bind:iconWidth="'45px'"/>
        </div>
        <div class="flex-skill-info">
          <h3 class="header">
            {{ item.name }}
          </h3>
          <p class="flex-row-svg" title="Level">
            <LevelIcon class="svg-margin-subheader" 
            v-bind:class="{'skill-basic': item.level === 'Basic' || item.level === 'Básico',
                          'skill-intermediary': item.level === 'Intermediary' || item.level === 'Intermediário',
                          'skill-advanced': item.level === 'Advanced' || item.level === 'Avançado',}"/>
            {{ item.level }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card,.card-skill{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0.5rem;
    width: 100%;
  }

  .card-skill{
    padding: 0;
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
    padding: 0.4rem 0rem;
    row-gap: 0.5rem;
    column-gap: 0.5rem;
  }

  .flex-row-skill{
    justify-content: center;
    flex-wrap: nowrap;
    align-items: flex-start;
    padding: 0;
  }

  .grid-skills{
    display: grid;
    grid-template-columns: repeat(4,minmax(0, 1fr));
    row-gap: 1rem;
    column-gap: 1rem;
    padding: 0.3rem 0.5rem;
  }

  .flex-row-svg{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
  }

  .flex-date{
    min-width: 150px;
  }

  .flex-skill-info{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    row-gap: 0.2rem;
    height: 100%;
  }

  .svg-margin-header,.svg-margin-subheader{
    margin: 0 0.4rem 0 0;
  }

  .svg-margin-header{
    min-height: 1.5rem;
    min-width: 1.5rem;
    max-height: 1.5rem;
    max-width: 1.5rem;
  }

  .svg-margin-subheader{
    min-height: 1.4em;
    min-width: 1.4em;
    max-height: 1.4em;
    max-width: 1.4em;
  }

  .header{
    font-weight: 500;
    line-height: 1.2;
  }

  .description{
    color: var(--color-text-secondary);
  }

  .skill-basic{
    color: var(--color-skill-basic)
  }
  .skill-intermediary{
    color: var(--color-skill-intermediary)
  }
  .skill-advanced{
    color: var(--color-skill-advanced)
  }

  @media(max-width:1000px){
    .grid-skills{
      grid-template-columns: repeat(3,minmax(0, 1fr));
    }
  }

  @media(max-width:700px){
    .flex-row{
      flex-direction: column;
      align-items: flex-start;
    }

    .grid-skills{
      grid-template-columns: repeat(2,minmax(0, 1fr));
    }
  }

  @media print{
    .flex-row{
      flex-direction: row;
      align-items: flex-start;
    }

    .grid-skills{
      grid-template-columns: repeat(4,minmax(0, 1fr));
    }
  }
</style>