<script>
  import CodeIcon from '../components/icons/generic/CodeIcon.vue';
  import DeveloperIcon from '../components/icons/resume/DeveloperIcon.vue';
  import EducationIcon from '../components/icons/resume/EducationIcon.vue';
  import EmailIcon from '../components/icons/resume/EmailIcon.vue';
  import ExperienceIcon from '../components/icons/resume/ExperienceIcon.vue';
  import IntroductionIcon from '../components/icons/resume/IntroductionIcon.vue';
  import OrderIcon from '../components/icons/generic/OrderIcon.vue';
  import PhoneIcon from '../components/icons/resume/PhoneIcon.vue';
  import TranslateIcon from '../components/icons/generic/TranslateIcon.vue';
  import ToolsIcon from '../components/icons/generic/ToolsIcon.vue';
  import SkillsIcon from '../components/icons/resume/SkillsIcon.vue';
  import LinkIcon from '../components/icons/generic/LinkIcon.vue';
  import VisibilityIcon from '../components/icons/generic/VisibilityIcon.vue';

  import ResumeCard from '../components/resume/ResumeCards.vue';
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
        devIconHeight: '3.2em',
        devIconWidth: '3.2em',
        skillIndex: 0,
        resumeLanguage: 'English',
        devIconShowName: false,
        skillDynamicCardShow: false,
        skillListOrderByLevel: true,
        experiencesListOrderByDate: true,
        educationListOrderByDate: true
      }
    },
    components:{ 
      CodeIcon,DeveloperIcon,EducationIcon,EmailIcon,ExperienceIcon,IntroductionIcon,OrderIcon,
      PhoneIcon,TranslateIcon,ToolsIcon,SkillsIcon,LinkIcon,VisibilityIcon,
      ResumeCard,SkillDynamicCard,SkillIconList
    },
    methods:{
      changeSkillCardParent(_id){
        this.skillIndex = this.skillsList.findIndex((element) => element._id == _id)
        //console.log(skillsList[index])
        this.skillDynamicCardShow = true
      },
      changeLanguageSelected(event,language){
        var selectedButton = document.getElementsByClassName("language-button-selected");
        var selectedElement = event.target
        for (var i = 0; i < selectedButton.length; i++) {
          selectedButton[i].classList.remove("language-button-selected")
        }

        if (selectedElement.tagName == 'SPAN'){
          selectedElement = event.target.parentElement
        }
        selectedElement.classList.add("language-button-selected")
        this.resumeLanguage = language
        this.skillIndex = 0
      },
      async RequestResumeInfo(userId,language){
        this.user = await UserService.getUser(userId,language);
        this.userInfo = await UserInfoService.getUserInfo(userId,language);
        this.educationList = await UserEducationService.getUserEducations(userId,language);
        this.experiencesList = await UserExperienceService.getUserExperiences(userId,language);
        this.skillsList = await UserSkillService.getUserSkills(userId,language);
        UserEducationService.sortSkillsListByDate(this.educationList,'startDate',1)
        UserExperienceService.sortSkillsListByDate(this.experiencesList,'startDate',1)
        UserSkillService.sortSkillsListByLevel(this.skillsList,1)
      },
    },
		watch: {
			"resumeLanguage": async function(val, oldVal) {
				await this.RequestResumeInfo("6359bbec73c2685741589a0f",val)
			},
      "skillListOrderByLevel": function(val, oldVal){
        //false = Descending, true = Ascending
        UserSkillService.sortSkillsListByLevel(this.skillsList,val)
      },
      "educationListOrderByDate": function(val, oldVal){
        //false = Descending, true = Ascending
        UserEducationService.sortSkillsListByDate(this.educationList,'startDate',val)
      },
      "experiencesListOrderByDate": function(val, oldVal){
        //false = Descending, true = Ascending
        UserExperienceService.sortSkillsListByDate(this.experiencesList,'startDate',val)
      }
		},
    async created(){
      await this.RequestResumeInfo("6359bbec73c2685741589a0f","English")
    }
  }

</script>

<template>
  <div class="flex-bar-buttons-languages">
    <button class="language-button-left language-button-selected" @click="changeLanguageSelected($event,'English')">
      <span v-if="resumeLanguage == 'Portuguese'">Inglês</span>
      <span v-else>English</span>
    </button>
    <button class="language-button-right" @click="changeLanguageSelected($event,'Portuguese')">
      <span v-if="resumeLanguage == 'Portuguese'">Português</span>
      <span v-else>Portuguese</span>
    </button>
  </div>
  <section name="Basic-Information" class="basic-info">
    <h1 class="basic-info-heading">
      {{ user.fullname }}
    </h1>
    <h2 class="flex-row-info-item basic-info-heading">
      <DeveloperIcon class="svg-basicinfo"/>
      {{ userInfo.title }}
    </h2>
    <div class="flex-row-info">
      <div name="Phones" class="flex-row-info-type">
        <h3 class="flex-row-info-item" v-for="phone in user.phones">
          <p class="info-item">
            <PhoneIcon class="svg-heading"/>
            {{ phone }}
          </p>
        </h3>
      </div>
      <div name="Emails" class="flex-row-info-type">
        <h3 class="flex-row-info-item" v-for="email in user.emails">
          <a class="flex-link" v-bind:href="'mailto:'+email" target="_blank">
            <EmailIcon class="svg-heading"/>
            {{ email }}
          </a>
        </h3>
      </div>
      <div name="Websites" class="flex-row-info-type">
        <h3 class="flex-row-info-item" v-for="website in user.websites">
          <a class="flex-link" v-bind:href="'https://'+website" target="_blank">
            <LinkIcon class="svg-heading"/>
            {{ website }}
          </a>
        </h3>
      </div>
    </div>
  </section>
  <section name="Introduction">
    <h2 class="resume-section-heading">
      <IntroductionIcon class="svg-heading"/>
      <span v-if="resumeLanguage == 'Portuguese'">Introdução</span>
      <span v-else>Introduction</span>
    </h2>
    <p class="resume-section-paragraph"> {{ userInfo.introduction }} </p>
  </section>
  <section name="Education">
    <h2 class="resume-section-heading">
      <EducationIcon class="svg-heading"/>
      <span v-if="resumeLanguage == 'Portuguese'">Educação</span>
      <span v-else>Education</span>
    </h2>
    <div class="flex-bar-buttons" >
      <button class="flex-button" @click="(educationListOrderByDate = !educationListOrderByDate)">
        <OrderIcon class="svg-button" />
        <span v-if="resumeLanguage == 'Portuguese'">
          <span v-if="educationListOrderByDate">
            Ordenar por Data (Decrescente)
          </span>
          <span v-else>
            Ordenar por Data (Crescente)
          </span>
        </span>
        <span v-else>
          <span v-if="educationListOrderByDate">
            Order By Date (Descending)
          </span>
          <span v-else>
            Order By Date (Ascending)
          </span>
        </span>
      </button>
    </div>
    <ResumeCard v-bind:itemList="educationList" 
    v-bind:language="resumeLanguage"
    v-bind:itemType="'Education'"/>
  </section>
  <section name="Experience">
    <h2 class="resume-section-heading">
      <ExperienceIcon class="svg-heading"/>
      <span v-if="resumeLanguage == 'Portuguese'">Experiências</span>
      <span v-else>Experience</span>
    </h2>
    <div class="flex-bar-buttons" >
      <button class="flex-button" @click="(experiencesListOrderByDate = !experiencesListOrderByDate)">
        <OrderIcon class="svg-button" />
        <span v-if="resumeLanguage == 'Portuguese'">
          <span v-if="experiencesListOrderByDate">
            Ordenar por Data (Decrescente)
          </span>
          <span v-else>
            Ordenar por Data (Crescente)
          </span>
        </span>
        <span v-else>
          <span v-if="experiencesListOrderByDate">
            Order By Date (Descending)
          </span>
          <span v-else>
            Order By Date (Ascending)
          </span>
        </span>
      </button>
    </div>
    <ResumeCard v-bind:itemList="experiencesList" 
    v-bind:language="resumeLanguage"
    v-bind:itemType="'Experience'"/>
  </section>
  <section name="Skills">
    <h2 class="resume-section-heading">
      <SkillsIcon class="svg-heading"/>
      <span v-if="resumeLanguage == 'Portuguese'">Habilidades</span>
      <span v-else>Skills</span>
    </h2>
    <div class="flex-bar-buttons" >
      <button class="flex-button" @click="skillDynamicCardShow = !skillDynamicCardShow">
        <VisibilityIcon class="svg-button" />
        <span v-if="resumeLanguage == 'Portuguese'">
          <span v-if="skillDynamicCardShow">
            Visualização Simples
          </span>
          <span v-else>
            Visualização Dinâmica
          </span>
        </span>
        <span v-else>
          <span v-if="skillDynamicCardShow">
            Simple View
          </span>
          <span v-else>
            Dynamic View
          </span>
        </span>
      </button>
      <button class="flex-button" @click="skillListOrderByLevel = !skillListOrderByLevel">
        <OrderIcon class="svg-button" />
        <span v-if="resumeLanguage == 'Portuguese'">
          <span v-if="skillListOrderByLevel">
            Ordenar por Nivel (Decrescente)
          </span>
          <span v-else>
            Ordenar por Nivel (Crescente)
          </span>
        </span>
        <span v-else>
          <span v-if="skillListOrderByLevel">
            Order By Level (Descending)
          </span>
          <span v-else>
            Order By Level (Ascending)
          </span>
        </span>
      </button>
    </div>
    <div v-if="!skillDynamicCardShow">
      <h3 class="resume-section-sub-heading">
        <CodeIcon class="svg-subheading"/>
        <span v-if="resumeLanguage == 'Portuguese'">Linguagens de Programação</span>
        <span v-else>Programming Languages</span>
      </h3>
      <ResumeCard v-if="!skillDynamicCardShow"
      v-bind:itemList="skillsList" 
      v-bind:language="resumeLanguage"
      v-bind:itemType="'Skill'"
      v-bind:skillType="'Language'"/>
      <h3 class="resume-section-sub-heading">
        <ToolsIcon class="svg-subheading"/>
        <span v-if="resumeLanguage == 'Portuguese'">Ferramentas</span>
        <span v-else>Tools</span>
      </h3>
      <ResumeCard v-if="!skillDynamicCardShow"
      v-bind:itemList="skillsList" 
      v-bind:language="resumeLanguage"
      v-bind:itemType="'Skill'"
      v-bind:skillType="'Tool'"/>
    </div>
    <div v-else>
      <SkillDynamicCard v-if="skillDynamicCardShow" v-bind:item="skillsList[skillIndex]"/>
      <h3 class="resume-section-sub-heading">
        <CodeIcon class="svg-subheading"/>
        <span v-if="resumeLanguage == 'Portuguese'">Linguagens de Programação</span>
        <span v-else>Programming Languages</span>
      </h3>
      <SkillIconList
        v-bind:itemList="skillsList"
        v-bind:itemType="'Language'" 
        v-bind:iconHeight="devIconHeight" 
        v-bind:iconWidth="devIconWidth"
        v-on:changeSkillCardChild="changeSkillCardParent"/>
      <h3 class="resume-section-sub-heading">
        <ToolsIcon class="svg-subheading"/>
        <span v-if="resumeLanguage == 'Portuguese'">Ferramentas</span>
        <span v-else>Tools</span>
      </h3>
      <SkillIconList
        v-bind:itemList="skillsList"
        v-bind:itemType="'Tool'" 
        v-bind:iconHeight="devIconHeight" 
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

  .flex-row-info-item, .flex-link, .info-item{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  .flex-link{
    color: var(--color-text-primary);
    text-decoration: none;
    align-items: unset;
  }

  .flex-link,.info-item{
    color: var(--color-text-primary);
    text-decoration: none;
    padding-right: 0.3rem;
  }

  .flex-link:hover{
    background-color: var(--color-button-background-highlight);
    border-radius: 8px;
  }

  .resume-section-sub-heading{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;

    margin: 1rem 0;
    color: var(--color-heading);
    font-weight: 600;
  }

  .resume-section-heading > span, .resume-section-sub-heading > span{
    font-weight: 600;
  }

  .svg-heading,.svg-basicinfo{
    margin: 0 0.3rem 0 0;
    min-height: 1.5em;
    min-width: 1.5em;
    max-height: 1.5em;
    max-width: 1.5em;
  }

  .svg-subheading{
    margin: 0 0.3rem 0 0;
    min-height: 1.3em;
    min-width: 1.3em;
    max-height: 1.3em;
    max-width: 1.3em;
  }

  .resume-section-paragraph{
    padding: 0.5rem 0 0 0.5rem;
  }

  .flex-bar-buttons, .flex-bar-buttons-languages{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0.5rem 0 ;
    row-gap: 0.5rem;
  }
  .flex-bar-buttons-languages{
    justify-content: flex-end;
  }

  .flex-bar-buttons{
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
    cursor: default;
  }

  @media (max-width: 700px){
    .resume-section-heading{
      text-align: center;
    }

    .flex-bar-buttons{
      justify-content: center;
    }
  }

  @media print{
    .resume-section-heading{
      text-align: left;
    }

    .flex-bar-buttons, .flex-bar-buttons-languages{
      justify-content: left;
      display: none;
    }
  }
</style>