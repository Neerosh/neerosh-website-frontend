<script>
  import DynamicDevIcon from '../DynamicDevIcon.vue';

  export default {
    props: {
      itemList: Array,
      itemType: String,
      iconHeight: String,
      iconWidth: String
    },
    components: {
      DynamicDevIcon
    },
    computed: {
      filteredItemList(){
        return this.itemList.filter(item => item.type == this.itemType)
      }
    },
    emits: ["changeSkillCardChild"]
  }
</script>

<template>
  <div class="skill-flex-icons">
    <div class="flex-item" v-for="item in filteredItemList">
      <div class="dev-icon" v-on:click="$emit('changeSkillCardChild', item._id)">
        <DynamicDevIcon v-bind:iconName="item.name" v-bind:iconHeight="iconHeight" v-bind:iconWidth="iconWidth"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .dev-icon{
    padding: 0.5rem 0.5rem 0.3rem 0.5rem;
    background-color: var(--color-card-background);
    border: solid 2px var(--color-card-border);
    border-radius: 10px;
  }
  
  .skill-flex-icons{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
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

  @media (max-width: 700px){
    .skill-flex-icons{
      justify-content: center;
    }
  }
</style>