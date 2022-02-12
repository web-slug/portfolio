<template>
     <div class="loading">
            <div class="gooey">
                <div class="glitch">
                    <div class="glitch__img" :style="{backgroundImage: `url('${image}')`}"></div>
                    <div class="glitch__img" :style="{backgroundImage: `url('${image}')`}"></div>
                    <div class="glitch__img" :style="{backgroundImage: `url('${image}')`}"></div>
                    <div class="glitch__img" :style="{backgroundImage: `url('${image}')`}"></div>
                    <div class="glitch__img" :style="{backgroundImage: `url('${image}')`}"></div>
                 <!-- <div v-if="image" style="width:600px; height:200px" :style="{ 'background-image': 'url(' + image + ')'}"></div> -->
                </div>
                <!-- <img src="img/desktop.gif"> -->
            </div>
    </div> 
</template>

<script>
export default {
    data(){
        return{
            image:require('../assets/desktop.gif')
        }
    }
}
</script>
<style scoped>

</style>