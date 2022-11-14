<script setup>
  import CodeSnippetIcon from './icons/projects/UtilitiesTid/CodeSnippetIcon.vue'
  import ConverterIcon from './icons/generic/ConverterIcon.vue'
  import FileLockIcon from './icons/projects/UtilitiesTid/FileLockIcon.vue'
  import FileManagerIcon from './icons/projects/UtilitiesTid/FileManagerIcon.vue'
  import ProcessManagerIcon from './icons/projects/UtilitiesTid/ProcessManagerIcon.vue'
  import ScriptIcon from './icons/projects/UtilitiesTid/ScriptIcon.vue'
  import WatcherIcon from './icons/projects/UtilitiesTid/WatcherIcon.vue'

  const props = defineProps({
    iconName: String,
    iconHeight: String,
    iconWidth: String,
  })
</script>

<template>
    <CodeSnippetIcon      v-if="iconName == 'Code Snippet'"/>
    <ConverterIcon        v-if="iconName == 'Converter'"/>
    <FileLockIcon         v-if="iconName == 'File Lock'"/>
    <FileManagerIcon      v-if="iconName == 'File Manager'"/>
    <ProcessManagerIcon   v-if="iconName == 'Process Manager'"/>
    <ScriptIcon           v-if="iconName == 'Script'"/>
    <WatcherIcon          v-if="iconName == 'Watcher'"/>
</template>

<style scoped>

  svg{
    min-height: v-bind(iconHeight);
    max-height: v-bind(iconHeight);
    min-width: v-bind(iconWidth);
    max-width: v-bind(iconWidth);
  }

</style>