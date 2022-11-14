<script>
  import LeftIcon from './icons/generic/LeftIcon.vue'
  import RightIcon from './icons/generic/RightIcon.vue'

	export default {
		props:{ 
			imagesList: {
				typeof: Array,
				require: true
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
      changeImageArrows(direction){
        var selectedImage = document.getElementById(this.imagesList[this.selectedIndex].name+'_'+this.selectedIndex)

        selectedImage.classList.remove("mini-image-selected")

        if (direction == 'right' && this.selectedIndex < (this.imagesList.length-1)){
          this.selectedIndex += 1
        }

        if (direction == 'left' && this.selectedIndex > 0){
          this.selectedIndex -= 1
        }

        selectedImage = document.getElementById(this.imagesList[this.selectedIndex].name+'_'+this.selectedIndex)

        selectedImage.classList.add("mini-image-selected")
      },
      changeImageClick(index){
        var selectedImage = document.getElementById(this.imagesList[this.selectedIndex].name+'_'+this.selectedIndex)

        selectedImage.classList.remove("mini-image-selected")

        this.selectedIndex = index

        selectedImage = document.getElementById(this.imagesList[this.selectedIndex].name+'_'+this.selectedIndex)
        
        selectedImage.classList.add("mini-image-selected")
      }
    }
  }
</script>

<template>
  <div class="flex-image">
    <LeftIcon class="svg-arrows" @click="changeImageArrows('left')"/>
    <img class="main-image" 
    v-bind:alt="imagesList[selectedIndex].name"
    v-bind:src="imagesList[selectedIndex].path" />
    <RightIcon class="svg-arrows" @click="changeImageArrows('right')"/>
  </div>
  <div class="flex-bar-miniatures">
    <img class="mini-image"
    v-for="(image,index) in imagesList" 
    v-bind:id="image.name+'_'+index"
    v-bind:alt="image.name"
    v-bind:src="image.path"
    v-bind:class="index == 0 ? 'mini-image-selected': true"
    @click="changeImageClick(index)"/>
  </div>
</template>

<style scoped>
  .flex-image, .flex-bar-miniatures, .flex-bar-buttons, .flex-button{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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
    width: 180px;
    border: 2px solid var(--color-button-background-highlight);
  }

  .mini-image-selected, .mini-image-selected:hover{
    border: 3px solid var(--color-card-border);
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