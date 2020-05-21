<template>
  <div id="app"> 
    <router-view/>
    <WindowsTaskBar></WindowsTaskBar>
  </div>
</template>
 
<script>
 import "@/util/css/index.less"
 import WindowsTaskBar from "@/components/windowsTaskBar/WindowsTaskBar.vue"

 export default{
   components:{
     WindowsTaskBar
   }
 }

</script>

<style lang="less" scoped>

#app{
  height: 100%;
  background: url("./assets/mainBg.jpg") no-repeat;
  background-size: cover;
  overflow: hidden;
}


</style>