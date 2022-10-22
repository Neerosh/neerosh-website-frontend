<script>
  import CodeIcon from '../icons/resume/CodeIcon.vue';
  import ToolsIcon from '../icons/resume/ToolsIcon.vue';
  import SkillsIcon from '../icons/resume/SkillsIcon.vue';
  import DynamicDevList from '../DynamicDevList.vue';
  import DynamicDevCard from '../DynamicDevCard.vue';
  import SkillService from '../../services/SkillService';

  function changeSkillCardParent(name){
    index.value = skillsList.findIndex((element) => element.name == name)
    skillCardShow.value = true
  }

  export default {
    name: 'SkillSection',
    data() {
      return {
        headingIconHeight: '30px',
        headingIconWidth: '30px',
        subHeadingIconHeight: '20px',
        subHeadingIconWidth: '20px',
        devIconHeight: '50px',
        devIconWidth: '50px',
        devIconShowName: false,
        skillCardShow: false,
        skillIndex: 0,
        skillsList: []
      }
    },
    components:{ 
      CodeIcon,ToolsIcon,SkillsIcon,DynamicDevList,DynamicDevCard
    },
    async created(){
      this.skillsList = await SkillService.getSkills();
    },
    methods:{
      changeSkillCardParent(_id){
        this.skillIndex = this.skillsList.findIndex((element) => element._id == _id)
        //console.log(skillsList[index])
        this.skillCardShow = true
      }
    }
  }
</script>


<template>
  <section name="Skills">
    <h2 class="resume-section-heading">
      <SkillsIcon class="svg-heading" v-bind:height="headingIconHeight" v-bind:width="headingIconWidth"/>Skills
    </h2>
    <div class="flex-bar-buttons">
      <button  @click="devIconShowName = !devIconShowName">Show/Hide Names</button>
      <button  @click="skillCardShow = !skillCardShow">Show/Hide Details</button>
    </div>
    <DynamicDevCard v-if="skillCardShow" v-bind:item="skillsList[skillIndex]" />
    <h3 class="resume-section-sub-heading">
      <CodeIcon class="svg-heading" v-bind:height="subHeadingIconHeight" v-bind:width="subHeadingIconWidth" />Programming Languages
    </h3>
    <div class="skill-icons">
      <DynamicDevList v-for="item in skillsList"
        v-bind:item="item"
        v-bind:itemType="'Language'" 
        v-bind:iconHeight="devIconHeight" 
        v-bind:iconWidth="devIconWidth"
        v-bind:showName="devIconShowName"
        v-on:changeSkillCardChild="changeSkillCardParent"/>
    </div>
    <h3 class="resume-section-sub-heading">
      <ToolsIcon class="svg-heading" v-bind:height="subHeadingIconHeight" v-bind:width="subHeadingIconWidth" />Tools
    </h3>
    <div class="skill-icons">
      <DynamicDevList v-for="item in skillsList"
        v-bind:item="item"
        v-bind:itemType="'Tool'" 
        v-bind:iconeight="devIconHeight" 
        v-bind:iconWidth="devIconWidth"
        v-bind:showName="devIconShowName"
        v-on:changeSkillCardChild="changeSkillCardParent"/>
    </div>   
  </section>

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