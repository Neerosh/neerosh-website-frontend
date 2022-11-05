<script>
  import CodeIcon from '../components/icons/CodeIcon.vue';
  import DeveloperIcon from '../components/icons/resume/DeveloperIcon.vue';
  import EducationIcon from '../components/icons/resume/EducationIcon.vue';
  import EmailIcon from '../components/icons/EmailICon.vue';
  import ExperienceIcon from '../components/icons/resume/ExperienceIcon.vue';
  import IntroductionIcon from '../components/icons/resume/IntroductionIcon.vue';
  import PhoneIcon from '../components/icons/PhoneIcon.vue';
  import TranslateIcon from '../components/icons/TranslateIcon.vue';
  import ToolsIcon from '../components/icons/ToolsIcon.vue';
  import SkillsIcon from '../components/icons/resume/SkillsIcon.vue';
  import WebsiteIcon from '../components/icons/WebsiteIcon.vue';

  import EducationCard from '../components/resume/EducationCard.vue';
  import ExperienceCard from '../components/resume/ExperienceCard.vue';
  import SkillDynamicCard from '../components/resume/SkillDynamicCard.vue';
  import SkillIconList from '../components/resume/SkillIconList.vue';

  import UserInfoService from '../services/UserInfoService.js';
  import UserEducationService from '../services/UserEducationService.js';
  import UserExperienceService from '../services/UserExperienceService.js';
  import UserSkillService from '../services/UserSkillService.js';
  import UserService from '../services/UserService.js';

  export default {
    data() {
      return {
        user: Object,
        userInfo: Object,
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
        skillDynamicCardShow: false,
        skillIndex: 0,
        resumeLanguage: 'English'
      }
    },
    components:{ 
      CodeIcon,DeveloperIcon,EducationIcon,EmailIcon,ExperienceIcon,IntroductionIcon,PhoneIcon,TranslateIcon,ToolsIcon,SkillsIcon,WebsiteIcon,
      EducationCard,ExperienceCard,SkillDynamicCard,SkillIconList
    },
    methods:{
      changeSkillCardParent(_id){
        this.skillIndex = this.skillsList.findIndex((element) => element._id == _id)
        //console.log(skillsList[index])
        this.skillDynamicCardShow = true
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
        this.userInfo = await UserInfoService.getUserInfo(userId,language);
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
    <h1 class="basic-info-heading">{{ user.fullname }}</h1>
    <h2 class="developer basic-info-heading">
      <DeveloperIcon class="svg-basicinfo" v-bind:height="subHeadingIconHeight" v-bind:width="subHeadingIconWidth"/>{{ userInfo.title }}
    </h2>
    <div class="flex-row-info">
      <div name="Phones" class="flex-row-info-type">
        <h3 class="flex-row-info-item" v-for="phone in user.phone">
          <PhoneIcon class="svg-heading" v-bind:height="subHeadingIconHeight" v-bind:width="subHeadingIconWidth"/>
          <p class="info-item">
            {{ phone }}
          </p>
        </h3>
      </div>
      <div name="Emails" class="flex-row-info-type">
        <h3 class="flex-row-info-item" v-for="email in user.email">
          <EmailIcon class="svg-heading" v-bind:height="subHeadingIconHeight" v-bind:width="subHeadingIconWidth"/>
          <a class="link" v-bind:href="'mailto:'+email" target="_blank">
            {{ email }}
          </a>
        </h3>
      </div>
      <div name="Websites" class="flex-row-info-type">
        <h3 class="flex-row-info-item" v-for="website in user.website">
          <WebsiteIcon class="svg-heading" v-bind:height="subHeadingIconHeight" v-bind:width="subHeadingIconWidth"/>
          <a class="link" v-bind:href="'https://'+website" target="_blank">
            {{ website }}
          </a>
        </h3>
      </div>
    </div>
  </section>
  <section name="Introduction">
    <h2 class="resume-section-heading">
      <IntroductionIcon class="svg-heading" v-bind:height="headingIconHeight" v-bind:width="headingIconWidth"/>
      <span v-if="resumeLanguage == 'English'">Introduction</span>
      <span v-if="resumeLanguage == 'Portuguese'">Introdução</span>
    </h2>
    <p class="resume-section-paragraph"> {{ userInfo.introduction }} </p>
  </section>
  <section name="Education">
    <h2 class="resume-section-heading">
      <EducationIcon class="svg-heading" v-bind:height="headingIconHeight" v-bind:width="headingIconWidth"/>
      <span v-if="resumeLanguage == 'English'">Education</span>
      <span v-if="resumeLanguage == 'Portuguese'">Educação</span>
    </h2>
    <EducationCard v-for="education in educationList" v-bind:item="education" v-bind:language="resumeLanguage"/>
  </section>
  <section name="Experience">
    <h2 class="resume-section-heading">
      <ExperienceIcon class="svg-heading" v-bind:height="headingIconHeight" v-bind:width="headingIconWidth"/>
      <span v-if="resumeLanguage == 'English'">Experience</span>
      <span v-if="resumeLanguage == 'Portuguese'">Experiências</span>
    </h2>
    <ExperienceCard v-for="experience in experiencesList" v-bind:item="experience" v-bind:language="resumeLanguage"/>
  </section>
  <section name="Skills">
    <h2 class="resume-section-heading">
      <SkillsIcon class="svg-heading" v-bind:height="headingIconHeight" v-bind:width="headingIconWidth"/>
      <span v-if="resumeLanguage == 'English'">Skills</span>
      <span v-if="resumeLanguage == 'Portuguese'">Habilidades</span>
    </h2>
    <div class="flex-bar-buttons-skills">
      <button  @click="skillDynamicCardShow = !skillDynamicCardShow">
        <span v-if="resumeLanguage == 'English'">Show/Hide Details</span>
        <span v-if="resumeLanguage == 'Portuguese'">Mostrar/Esconder Detalhes</span>
      </button>
    </div>
    <SkillDynamicCard v-if="skillDynamicCardShow" v-bind:item="skillsList[skillIndex]" />
    <h3 class="resume-section-sub-heading">
      <CodeIcon class="svg-subheading" v-bind:height="subHeadingIconHeight" v-bind:width="subHeadingIconWidth" />
      <span v-if="resumeLanguage == 'English'">Programming Languages</span>
      <span v-if="resumeLanguage == 'Portuguese'">Linguagens de Programação</span>
    </h3>
    <div class="skill-flex-icons">
      <SkillIconList v-for="item in skillsList"
        v-bind:item="item"
        v-bind:itemType="'Language'" 
        v-bind:iconHeight="devIconHeight" 
        v-bind:iconWidth="devIconWidth"
        v-on:changeSkillCardChild="changeSkillCardParent"/>
    </div>
    <h3 class="resume-section-sub-heading">
      <ToolsIcon class="svg-subheading" v-bind:height="subHeadingIconHeight" v-bind:width="subHeadingIconWidth" />
      <span v-if="resumeLanguage == 'English'">Tools</span>
      <span v-if="resumeLanguage == 'Portuguese'">Ferramentas</span>
    </h3>
    <div class="skill-flex-icons">
      <SkillIconList v-for="item in skillsList"
        v-bind:item="item"
        v-bind:itemType="'Tool'" 
        v-bind:iconeight="devIconHeight" 
        v-bind:iconWidth="devIconWidth"
        v-on:changeSkillCardChild="changeSkillCardParent"/>
    </div>   
  </section>
</template>

<style scoped>
  .basic-info{
    margin: 1rem 0;
    color: var(--color-heading);
  }

  .basic-info-heading{
    font-weight: 600;
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

  .flex-row-info{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    column-gap: 0.3rem;
    row-gap: 0.3rem;
    margin: 0.5rem 0 0 0;
    color: var(--color-text-primary);
  }

  .flex-row-info-item, .flex-row-info-type{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
  }

  .flex-row-info-item{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  .link,.info-item{
    color: var(--color-text-primary);
    text-decoration: none;
    padding: 0.3rem 0.2rem;
  }
  .link:hover{
    background-color: var(--color-button-background-highlight);
    border-radius: 8px;
  }

  .resume-section-sub-heading{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;

    margin: 0.5rem 0;
    color: var(--color-heading);
    font-weight: 600;
  }

  .resume-section-heading > span, .resume-section-sub-heading > span{
    font-weight: 600;
  }

  .svg-heading,.svg-subheading,.svg-basicinfo{
    margin: 0 0.3rem 0 0;
    min-height: 30px;
    min-width: 30px;
  }

  .svg-subheading{
    min-height: 20px;
    min-width: 20px;
  }

  .svg-basicinfo{
    min-height: 25px;
    min-width: 25px;
  }

  .resume-section-paragraph{
    padding: 0.5rem 0 0 0.5rem;
  }

  .skill-flex-icons{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .flex-bar-buttons-skills, .flex-bar-buttons-languages{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0.5rem 0 ;
    row-gap: 0.5rem;
  }
  .flex-bar-buttons-languages{
    justify-content: flex-end;
  }

  .flex-bar-buttons-skills{
    column-gap: 0.5rem;
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

    .skill-flex-icons, .flex-bar-buttons-skills{
      justify-content: center;
    }
  }
</style>