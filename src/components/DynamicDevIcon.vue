<script setup>
  import C_Icon from './icons/development/languages/C_Icon.vue';
  import CsharpIcon from './icons/development/languages/CsharpIcon.vue';
  import ClarionIcon from './icons/development/languages/ClarionIcon.vue';
  import CssIcon from './icons/development/languages/CssIcon.vue';
  import HtmlIcon from './icons/development/languages/HtmlIcon.vue';
  import JavaIcon from './icons/development/languages/JavaIcon.vue';
  import JavascriptIcon from './icons/development/languages/JavascriptIcon.vue';
  import PhpIcon from './icons/development/languages/PhpIcon.vue';
  import PythonIcon from './icons/development/languages/PythonIcon.vue';

  import AndroidStudioIcon from './icons/development/tools/AndroidStudioIcon.vue';
  import ElectronIcon from './icons/development/tools/ElectronIcon.vue';
  import GitIcon from './icons/development/tools/GitIcon.vue';
  import GitHubIcon from './icons/development/tools/GitHubIcon.vue';
  import GimpIcon from './icons/development/tools/GimpIcon.vue';
  import LinuxIcon from './icons/development/tools/LinuxIcon.vue';
  import MysqlIcon from './icons/development/tools/MysqlIcon.vue';
  import NodejsIcon from './icons/development/tools/NodejsIcon.vue';
  import SqliteIcon from './icons/development/tools/SqliteIcon.vue';
  import SqlServerIcon from './icons/development/tools/SqlServerIcon.vue';
  import VisualStudioIcon from './icons/development/tools/VisualStudio.vue';
  import VisualStudioCodeIcon from './icons/development/tools/VisualStudioCode.vue';
  import VuejsIcon from './icons/development/tools/VuejsIcon.vue';
  import WindowsIcon from './icons/development/tools/WindowsIcon.vue';

  const props = defineProps({
    iconName: String,
    iconHeight: String,
    iconWidth: String,
  })
</script>

<template>
    <C_Icon         v-if="iconName == 'C'"         />
    <CsharpIcon     v-if="iconName == 'C#'"        />
    <ClarionIcon    v-if="iconName == 'Clarion'"   />
    <CssIcon        v-if="iconName == 'CSS'"       />
    <ElectronIcon   v-if="iconName == 'Electron'"  />
    <HtmlIcon       v-if="iconName == 'HTML'"      />
    <GitHubIcon     v-if="iconName == 'GitHub'"    />
    <JavaIcon       v-if="iconName == 'Java'"      />
    <JavascriptIcon v-if="iconName == 'Javascript'"/>
    <PhpIcon        v-if="iconName == 'PHP'"       />
    <PythonIcon     v-if="iconName == 'Python'"    />
    <GitIcon        v-if="iconName == 'Git'"       />
    <GimpIcon       v-if="iconName == 'Gimp'"      />
    <MysqlIcon      v-if="iconName == 'MySQL'"     />
    <NodejsIcon     v-if="iconName == 'Node.js'"   />
    <SqliteIcon     v-if="iconName == 'SQLite'"    />
    <SqlServerIcon  v-if="iconName == 'SQL Server'"/>
    <VuejsIcon      v-if="iconName == 'Vue.js'"    />
    <LinuxIcon      v-if="iconName == 'Linux'"     />
    <WindowsIcon    v-if="iconName == 'Windows'"   />
    <VisualStudioIcon     v-if="iconName == 'Visual Studio'"    />
    <VisualStudioCodeIcon v-if="iconName == 'Visual Studio Code'"  />
    <AndroidStudioIcon    v-if="iconName == 'Android Studio'"   />
</template>

<style scoped>
  svg{
    min-height: v-bind(iconHeight);
    max-height: v-bind(iconHeight);
    min-width: v-bind(iconWidth);
    max-width: v-bind(iconWidth);
  }
</style>
