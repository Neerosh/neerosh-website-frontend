<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import { ref } from 'vue'
  import HomeIcon from './components/icons/menu/HomeIcon.vue';
  import ProjectsIcon from './components/icons/menu/ProjectsIcon.vue';
  import ResumeIcon from './components/icons/menu/ResumeIcon.vue';
  import BarIcon from './components/icons/menu/BarIcon.vue';
  import LogoIcon from './components/icons/LogoIcon.vue';

  const navIconHeight = ref('22px')
  const navIconWidth = ref('22px')
  var navLogoHeight = ref('50px')
  var showMenuMobile = false


  async function loadMenuMobile(){
    showMenuMobile = !showMenuMobile
    const navbarElement = document.getElementById('menuDesktop')
    const navbarMobile = document.getElementById('menuMobile')
    while (navbarMobile.lastChild) {
      navbarMobile.removeChild(navbarMobile.lastChild);
    }
    if (showMenuMobile){
      for (var i = 0; i < navbarElement.childNodes.length; i++) {
        const element = navbarElement.childNodes[i].cloneNode(true)
        navbarMobile.appendChild(element)
      }
      for (var i = 0; i < navbarMobile.childNodes.length; i++) {
        if (navbarMobile.childNodes[i].classList.contains('active-link')){
          navbarMobile.childNodes[i].classList.remove('active-link')
          navbarMobile.childNodes[i].classList.add('active-link-mobile')
        }
      }
    }
  }

</script>

<template>
  <header>
    <div>
      <nav class="navbar">
        <RouterLink class="navbar-item-logo" to="/">
          <LogoIcon class="svg-logo" v-bind:height="navLogoHeight"/>
        </RouterLink>
        <div class="navbar-inner" id="menuDesktop">
          <RouterLink active-class="active-link" class="navbar-item" to="/projects">
            <ProjectsIcon class="svg-navitem" v-bind:height="navIconHeight" v-bind:width="navIconWidth" /> 
            Projects
          </RouterLink>
          <RouterLink active-class="active-link" class="navbar-item" to="/resume">
            <ResumeIcon class="svg-navitem" v-bind:height="navIconHeight" v-bind:width="navIconWidth" />
            Resume
          </RouterLink>
        </div>
        <div class="navbar-toggle" @click="loadMenuMobile()">
          <BarIcon class="svg-navitem-mobile" v-bind:height="navIconHeight" v-bind:width="navIconWidth" />
        </div>
        <div class="navbar-mobile" id="menuMobile">
        </div>
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>

  </footer>
</template>

<style scoped>
  .navbar{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 0.3rem;
    row-gap: 0.3rem;
    padding: 0.5rem 1.5rem;
    background-color: var(--color-navbar-background);
    border-bottom: solid 2px var(--color-navbar-border);
  }

  .navbar-inner, .navbar-mobile{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 0.3rem;
    row-gap: 0.4rem;
    margin-left: 0.5rem;
  }

  .navbar-mobile{
    display: none;
    flex-direction: column;
  }

  .svg-navitem, .svg-navitem-mobile{
    min-height: v-bind(navIconHeight);
    min-width: v-bind(navIconWidth);
  }

  .svg-logo{
    min-height: v-bind(navLogoHeight);
  }

  .svg-navitem{
    margin-right: 0.3rem;
  }

  .navbar-item, .navbar-item-logo, .navbar-toggle{
    display: flex;
    align-items: center;
    padding: 0.4rem;
    row-gap: 0.3rem;
    color: var(--color-navbar-item);
    text-decoration: none;
    border-radius: 5px;
    font-weight: 600;
    border-bottom: solid 3px var(--color-navbar-background);
  }

  .navbar-item-logo{
    padding: 0;
  }

  .navbar-toggle{
    border: solid 2px var(--color-navbar-border);
    padding: 0.5rem 0.8rem;
    display: none;
  }

  a:hover,.navbar-toggle:hover{
    background-color: var(--color-item-background-highlight);
    border-color: var(--color-item-background-highlight);
    transition:  0.4s;
  }

  .active-link, .active-link:hover{
    background-color: var(--color-item-background-highlight);
    border-color: var(--color-link);
  }
  .active-link-mobile, .active-link-mobile:hover{
    color: var(--color-link);
  }

  main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1440px;
    padding: 1rem 2rem;
  }

  @media (max-width: 700px){
    .navbar-inner{
      display: none;
    }

    .navbar-toggle{
      display: flex;
    }

    .navbar-item{
      border: none;
    }

    .navbar-mobile{
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: stretch;
    }

    .navbar{
      justify-content: space-between;
      padding: 0.5rem 1rem;
    }

    main{
      padding: 1rem;
    }

  }

</style>
