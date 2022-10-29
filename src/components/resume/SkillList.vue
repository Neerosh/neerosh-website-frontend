<script setup>
  import DynamicDevIcon from '../DynamicDevIcon.vue';

  const props = defineProps({
    item: Object,
    itemType: String,
    iconHeight: String,
    iconWidth: String,
    showName: Boolean
  })

  const emit = defineEmits(["changeSkillCardChild"])
 
  function changeSkillCardChild() {
    emit("changeSkillCardChild", props.item._id);
  }

</script>

<template>
  <div class="flex-item" v-if="item.type == itemType">
    <div class="dev-icon" v-on:click="changeSkillCardChild">
      <DynamicDevIcon v-bind:iconName="item.name" v-bind:iconHeight="iconHeight" v-bind:iconWidth="iconWidth" />
    </div>
    <p v-if="showName == true" class="item-text">{{ item.name }}</p>
  </div>
</template>
<style scoped>
  .dev-icon{
    padding:0.5rem;
    background-color: var(--color-card-background);
    border: solid 2px var(--color-card-border);
    border-radius: 10px;
  }
  .flex-item{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    margin: 0.5rem;
  }
  .dev-icon:hover{
    background-color: var(--color-item-background-highlight);
    cursor: pointer;
  }
  .item-text{
    font-size: 13px;
  }
</style>