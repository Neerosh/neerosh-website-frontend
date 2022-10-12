<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import { ref } from 'vue'
  import HomeIcon from './components/icons/HomeIcon.vue';
  import ProjectsIcon from './components/icons/ProjectsIcon.vue';
  import ResumeIcon from './components/icons/ResumeIcon.vue';
  import ContactIcon from './components/icons/ContactIcon.vue';

  const navIconHeight = ref('22px')
  const navIconWidth = ref('22px')

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink active-class="active-link" class="navbar-item" to="/">
          <HomeIcon v-bind:height="navIconHeight" v-bind:width="navIconWidth"
          /> Home
        </RouterLink>
        <RouterLink active-class="active-link" class="navbar-item" to="/projects">
          <ProjectsIcon v-bind:height="navIconHeight" v-bind:width="navIconWidth"
          /> Projects
        </RouterLink>
        <RouterLink active-class="active-link" class="navbar-item" to="/resume">
          <ResumeIcon v-bind:height="navIconHeight" v-bind:width="navIconWidth"
          /> Resume
        </RouterLink>
        <RouterLink active-class="active-link" class="navbar-item" to="/contact">
          <ContactIcon v-bind:height="navIconHeight" v-bind:width="navIconWidth"
          /> Contact
        </RouterLink>
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
  nav{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    padding: 0.5rem;
    background-color: var(--color-navbar-background);
    border-bottom: solid 2px var(--color-navbar-border);
  }

  main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1440px;
    padding: 1rem;
  }
  svg{
    margin-right: 0.3rem;
  }


  .navbar-item{
    display: flex;
    align-items: center;
    margin: 0 0.2rem;
    padding: 0.4rem 0.4rem;
    color: var(--color-navbar-item);
    text-decoration: none;
    border-radius: 5px;
    font-weight: 600;
    border-bottom: solid 3px var(--color-navbar-background);
  }

  a:hover{
    background-color: var(--color-item-background-highlight);
    border-color: var(--color-item-background-highlight);
    transition:  0.4s;
  }

  .active-link, .active-link:hover{
    background-color: var(--color-item-background-highlight);
    border-color: var(--color-link);
  }
</style>
