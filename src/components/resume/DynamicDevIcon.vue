<script setup>
  import AndroidIcon from '../icons/development/languages/AndroidIcon.vue';
  import C_Icon from '../icons/development/languages/C_Icon.vue';
  import CsharpIcon from '../icons/development/languages/CsharpIcon.vue';
  import ClarionIcon from '../icons/development/languages/ClarionIcon.vue';
  import CssIcon from '../icons/development/languages/CssIcon.vue';
  import ElectronIcon from '../icons/development/languages/ElectronIcon.vue';
  import HtmlIcon from '../icons/development/languages/HtmlIcon.vue';
  import JavaIcon from '../icons/development/languages/JavaIcon.vue';
  import JavascriptIcon from '../icons/development/languages/JavascriptIcon.vue';
  import PhpIcon from '../icons/development/languages/PhpIcon.vue';
  import PythonIcon from '../icons/development/languages/PythonIcon.vue';

  import GitHubIcon from '../icons/development/tools/GitHubIcon.vue';
  import LinuxIcon from '../icons/development/tools/LinuxIcon.vue';
  import MysqlIcon from '../icons/development/tools/MysqlIcon.vue';
  import SqliteIcon from '../icons/development/tools/SqliteIcon.vue';
  import SqlServerIcon from '../icons/development/tools/SqlServerIcon.vue';
  import WindowsIcon from '../icons/development/tools/WindowsIcon.vue';

  const props = defineProps({
    iconName: String,
    iconHeight: String,
    iconWidth: String,
  })

</script>

<template>
  <AndroidIcon    v-if="iconName == 'Android'"     v-bind:height="iconHeight" v-bind:width="iconWidth" />
  <C_Icon         v-if="iconName == 'C'"           v-bind:height="iconHeight" v-bind:width="iconWidth" />
  <CsharpIcon     v-if="iconName == 'C#'"          v-bind:height="iconHeight" v-bind:width="iconWidth" />
  <ClarionIcon    v-if="iconName == 'Clarion'"     v-bind:height="iconHeight" v-bind:width="iconWidth" />
  <CssIcon        v-if="iconName == 'CSS'"         v-bind:height="iconHeight" v-bind:width="iconWidth" />
  <ElectronIcon   v-if="iconName == 'Electron'"    v-bind:height="iconHeight" v-bind:width="iconWidth" />
  <HtmlIcon       v-if="iconName == 'HTML'"        v-bind:height="iconHeight" v-bind:width="iconWidth" />
  <GitHubIcon     v-if="iconName == 'GitHub'"      v-bind:height="iconHeight" v-bind:width="iconWidth" />
  <JavaIcon       v-if="iconName == 'Java'"        v-bind:height="iconHeight" v-bind:width="iconWidth" />
  <JavascriptIcon v-if="iconName == 'Javascript'"  v-bind:height="iconHeight" v-bind:width="iconWidth" />
  <PhpIcon        v-if="iconName == 'PHP'"         v-bind:height="iconHeight" v-bind:width="iconWidth" />
  <PythonIcon     v-if="iconName == 'Python'"      v-bind:height="iconHeight" v-bind:width="iconWidth" />


  <MysqlIcon      v-if="iconName == 'MySQL'"       v-bind:height="iconHeight" v-bind:width="iconWidth" />
  <SqliteIcon     v-if="iconName == 'SQLite'"      v-bind:height="iconHeight" v-bind:width="iconWidth" />
  <SqlServerIcon  v-if="iconName == 'SQL Server'"  v-bind:height="iconHeight" v-bind:width="iconWidth" />
  <LinuxIcon      v-if="iconName == 'Linux'"       v-bind:height="iconHeight" v-bind:width="iconWidth" />
  <WindowsIcon    v-if="iconName == 'Windows'"     v-bind:height="iconHeight" v-bind:width="iconWidth" />
</template>
