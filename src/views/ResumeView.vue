<script>
  import CodeIcon from '../components/icons/CodeIcon.vue';
  import DeveloperIcon from '../components/icons/resume/DeveloperIcon.vue';
  import EducationIcon from '../components/icons/resume/EducationIcon.vue';
  import ExperienceIcon from '../components/icons/resume/ExperienceIcon.vue';
  import IntroductionIcon from '../components/icons/resume/IntroductionIcon.vue';
  import TranslateIcon from '../components/icons/TranslateIcon.vue';
  import ToolsIcon from '../components/icons/ToolsIcon.vue';
  import SkillsIcon from '../components/icons/resume/SkillsIcon.vue';

  import EducationCard from '../components/resume/EducationCard.vue';
  import ExperienceCard from '../components/resume/ExperienceCard.vue';
  import SkillCard from '../components/resume/SkillCard.vue';
  import SkillList from '../components/resume/SkillList.vue';

  import UserBasicService from '../services/UserBasicService.js';
  import UserEducationService from '../services/UserEducationService.js';
  import UserExperienceService from '../services/UserExperienceService.js';
  import UserSkillService from '../services/UserSkillService.js';
  import UserService from '../services/UserService.js';

  export default {
    data() {
      return {
        user: Object,
        userBasic: Object,
        experiencesList: [],
        educationList: [],
        skillsList: [],
        subHeadingIconHeight: '20px',
        subHeadingIconWidth: '20px',
        headingIconHeight: '30px',
        headingIconWidth: '30px',
        devIconHeight: '50px',
        devIconWidth: '50px',
        devIconShowName: false,
        skillCardShow: false,
        skillIndex: 0,
        resumeLanguage: 'English'
      }
    },
    components:{ 
      CodeIcon,DeveloperIcon,EducationIcon,ExperienceIcon,IntroductionIcon,TranslateIcon,ToolsIcon,SkillsIcon,
      EducationCard,ExperienceCard,SkillCard,SkillList
    },
    methods:{
      changeSkillCardParent(_id){
        this.skillIndex = this.skillsList.findIndex((element) => element._id == _id)
        //console.log(skillsList[index])
        this.skillCardShow = true
      },
      changeLanguageSelected(event,language){
        var selectedButton = document.getElementsByClassName("language-button-selected");
        for (var i = 0; i < selectedButton.length; i++) {
          selectedButton[i].classList.remove("language-button-selected")
        }
        event.target.classList.add("language-button-selected")
        this.resumeLanguage = language
        this.skillIndex = 0
      },
      async RequestResumeInfo(userId,language){
        this.user = await UserService.getUser(userId,language);
        this.userBasic = await UserBasicService.getUserBasic(userId,language);
        this.educationList = await UserEducationService.getUserEducations(userId,language);
        this.experiencesList = await UserExperienceService.getUserExperiences(userId,language);
        this.skillsList = await UserSkillService.getUserSkills(userId,language);
  
      }
    },
		watch: {
			"resumeLanguage": async function(val, oldVal) {
				await this.RequestResumeInfo("6359bbec73c2685741589a0f",val)
			}
		},
    async created(){
      await this.RequestResumeInfo("6359bbec73c2685741589a0f","English")
    }
  }

</script>

<template>
  <div class="flex-bar-buttons-languages">
    <button class="language-button-left language-button-selected" @click="changeLanguageSelected($event,'English')">English</button>
    <button class="language-button-right" @click="changeLanguageSelected($event,'Portuguese')">Portuguese</button>
  </div>
  <section name="Basic-Information" class="basic-info">
    <h1>{{ user.fullname }}</h1>
    <h2 class="developer">
      <DeveloperIcon class="svg-heading" v-bind:height="subHeadingIconHeight" v-bind:width="subHeadingIconWidth"/>{{ userBasic.title }}
    </h2>
  </section>
  <section name="Introduction">
    <h2 class="resume-section-heading">
      <IntroductionIcon class="svg-heading" v-bind:height="headingIconHeight" v-bind:width="headingIconWidth"/>
      <span v-if="resumeLanguage == 'English'">Introduction</span>
      <span v-if="resumeLanguage == 'Portuguese'">Introdução</span>
    </h2>
    <p class="resume-section-paragraph"> {{ userBasic.introduction }} </p>
  </section>
  <section name="Education">
    <h2 class="resume-section-heading">
      <EducationIcon class="svg-heading" v-bind:height="headingIconHeight" v-bind:width="headingIconWidth"/>
      <span v-if="resumeLanguage == 'English'">Education</span>
      <span v-if="resumeLanguage == 'Portuguese'">Educação</span>
    </h2>
    <EducationCard v-for="education in educationList" v-bind:item="education" />
  </section>
  <section name="Experience">
    <h2 class="resume-section-heading">
      <ExperienceIcon class="svg-heading" v-bind:height="headingIconHeight" v-bind:width="headingIconWidth"/>
      <span v-if="resumeLanguage == 'English'">Experience</span>
      <span v-if="resumeLanguage == 'Portuguese'">Experiências</span>
    </h2>
    <ExperienceCard v-for="experience in experiencesList" v-bind:item="experience" />
  </section>
  <section name="Skills">
    <h2 class="resume-section-heading">
      <SkillsIcon class="svg-heading" v-bind:height="headingIconHeight" v-bind:width="headingIconWidth"/>
      <span v-if="resumeLanguage == 'English'">Skills</span>
      <span v-if="resumeLanguage == 'Portuguese'">Habilidades</span>
    </h2>
    <div class="flex-bar-buttons-skills">
      <button  @click="devIconShowName = !devIconShowName">
        <span v-if="resumeLanguage == 'English'">Show/Hide Names</span>
        <span v-if="resumeLanguage == 'Portuguese'">Mostrar/Esconder Nomes</span>
      </button>
      <button  @click="skillCardShow = !skillCardShow">
        <span v-if="resumeLanguage == 'English'">Show/Hide Details</span>
        <span v-if="resumeLanguage == 'Portuguese'">Mostrar/Esconder Detalhes</span>
      </button>
    </div>
    <SkillCard v-if="skillCardShow" v-bind:item="skillsList[skillIndex]" />
    <h3 class="resume-section-sub-heading">
      <CodeIcon class="svg-heading" v-bind:height="subHeadingIconHeight" v-bind:width="subHeadingIconWidth" />
      <span v-if="resumeLanguage == 'English'">Programming Languages</span>
      <span v-if="resumeLanguage == 'Portuguese'">Linguagens de Programação</span>
    </h3>
    <div class="skill-icons">
      <SkillList v-for="item in skillsList"
        v-bind:item="item"
        v-bind:itemType="'Language'" 
        v-bind:iconHeight="devIconHeight" 
        v-bind:iconWidth="devIconWidth"
        v-bind:showName="devIconShowName"
        v-on:changeSkillCardChild="changeSkillCardParent"/>
    </div>
    <h3 class="resume-section-sub-heading">
      <ToolsIcon class="svg-subheading" v-bind:height="subHeadingIconHeight" v-bind:width="subHeadingIconWidth" />
      <span v-if="resumeLanguage == 'English'">Tools</span>
      <span v-if="resumeLanguage == 'Portuguese'">Ferramentas</span>
    </h3>
    <div class="skill-icons">
      <SkillList v-for="item in skillsList"
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

  .resume-section-heading > span, .resume-section-sub-heading > span{
    font-weight: 600;
  }

  .svg-heading{
    margin: 0 0.3rem 0 0;
    min-height: 30px;
    min-width: 30px;
  }

  .svg-subheading{
    margin: 0 0.3rem 0 0;
    min-height: 20px;
    min-width: 20px;
  }

  .resume-section-paragraph{
    padding: 0.5rem 0 0 0.5rem;
  }

  .skill-icons{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .flex-bar-buttons-skills, .flex-bar-buttons-languages{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0.5rem 0 ;
  }

  .flex-bar-buttons-skills > button{
    margin-right: 0.5rem;
  }

  .language-button-left{
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
  }

  .language-button-right{
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
  }

  .language-button-selected{
    background-color: var(--color-button-background-highlight);
  }

  @media (max-width: 700px){
    .resume-section-heading{
      text-align: center;
    }

    .skill-icons, .flex-bar-buttons-skills{
      justify-content: center;
    }
  }
</style>