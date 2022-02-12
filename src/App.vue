<template>

  <div class="imgloaded"  > 
    <transition name="fade">
      <loader v-show="showloader"/>
    </transition>
  </div>
  <hdr/>
  <mainsection/>
  <ftr/>
</template>

<script>
import mainsection from './pages/main.vue'
export default {
  components:{mainsection},
  name: 'App',
  data(){
    return{
      showloader:true,
      showlogo:false
    }
  },
  beforeMount(){
    
   this.showloader = true
   this.showlogo = false
   console.log('hi')
  },
  mounted(){
    setTimeout(()=>{
      this.showloader = false
      
      this.showlogo = true

    },3000)
    
   console.log('bye')

  }
  
}
</script>

<style >
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


</style>
