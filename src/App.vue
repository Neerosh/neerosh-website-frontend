<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import { ref } from 'vue'
  import ProjectsIcon from './components/icons/menu/ProjectsIcon.vue';
  import ResumeIcon from './components/icons/menu/ResumeIcon.vue';
  import BarIcon from './components/icons/menu/BarIcon.vue';
  import LogoIcon from './components/icons/LogoIcon.vue';

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
    }
  }

</script>

<template>
  <div class="container">
    <div>
      <header>
        <nav class="navbar">
          <RouterLink class="navbar-item-logo" to="/">
            <LogoIcon class="svg-logo" v-bind:height="navLogoHeight"/>
          </RouterLink>
          <div class="navbar-inner" id="menuDesktop">
            <RouterLink active-class="active-link" class="navbar-item" to="/projects">
              <ProjectsIcon class="svg-navitem" /> 
              Projects
            </RouterLink>
            <RouterLink active-class="active-link" class="navbar-item" to="/resume">
              <ResumeIcon class="svg-navitem" />
              Resume
            </RouterLink>
          </div>
          <div class="navbar-toggle" @click="loadMenuMobile()">
            <BarIcon class="svg-navitem-mobile" />
          </div>
          <div class="navbar-mobile" id="menuMobile">
          </div>
        </nav>
      </header>
      <main>
        <RouterView />
      </main>
    </div>
    <footer class="footer">
      Made By Neerosh 2022 ©
    </footer>
  </div>
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
    font-size: var(--font-size-navbar);
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
    min-height: 1.5em;
    min-width: 1.5em;
    max-height: 1.5em;
    max-width: 1.5em;
  }

  .svg-logo{
    min-height: 1.5em;
    min-width: 10em;
    max-height: 3em;
    max-width: 10em;
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

  .navbar-item:hover,.navbar-toggle:hover{
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

  .container{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

  footer{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    padding: 1rem;
    background-color: var(--color-navbar-background);
    border-top: solid 2px var(--color-navbar-border);
    font-weight: 600;
  }


  @media (max-width: 700px){
    .navbar-inner{
      display: none;
    }

    .navbar-toggle{
      display: flex;
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

  @media print {
      footer, header{
      display: none;
    }
  }


</style>
