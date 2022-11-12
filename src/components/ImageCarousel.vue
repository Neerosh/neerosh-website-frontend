<script>
  import LeftIcon from './icons/LeftIcon.vue'
  import RightIcon from './icons/RightIcon.vue'

	export default {
		props:{ 
			imagesList: {
				typeof: Array,
				default: true
			},
		},
    data() {
			return {
				selectedIndex: 0,
			};
		},
    components:{
      LeftIcon,RightIcon
    },
    methods:{
      changeImage(direction){
        if (direction == 'right' && this.selectedIndex < (this.imagesList.length-1)){
          this.selectedIndex += 1
        }

        if (direction == 'left' && this.selectedIndex > 0){
          this.selectedIndex -= 1
        }
      }
    }
  }
</script>

<template>
  <div class="flex-image">
    <LeftIcon class="svg-arrows" @click="changeImage('left')"/>
    <img class="main-image" v-bind:src="imagesList[selectedIndex].path" />
    <RightIcon class="svg-arrows" @click="changeImage('right')"/>
  </div>
  <div class="flex-bar-miniatures">
    <img class="mini-image" v-for="image in imagesList" v-bind:src="image.path" @click="selectedIndex = image.id"/>
  </div>
</template>

<style scoped>
  .flex-image, .flex-bar-miniatures, .flex-bar-buttons, .flex-button{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .flex-bar-miniatures{
    margin: 1rem 0 0 0;
    column-gap: 0.5rem;
  }

  .flex-image{
    margin: 1rem 0 0 0;
    align-items: stretch;
    flex: 1 0 0;
    user-select: none;
  }
  
  .svg-arrows{
    min-width: 30px;
    max-width: 30px;
    padding: 0 0.3rem;
  }

  .svg-arrows:hover{
    background-color: var(--color-button-background-highlight);
  }

  .main-image{
    transition: 0.2s;
    width: 700px;
  }

  .mini-image{
    transition: 0.2s;
    width: 200px;
    border: 1px solid var(--color-text-secondary);
  }

  .mini-image:hover{
    border-color: var(--color-card-border);
  }

  
  @media (max-width: 800px) {
    .svg-arrows{
      display: none;
    }

    .main-image{
      width: 100%;
    }

    .mini-image{
      width: 28%;
    }
  }
</style>