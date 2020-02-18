<template>
 <div id="header" v-if="isShow">
      <div class="xIcon" @click="isShow = false">
          <span></span>
      </div>
      <div class="logo">
          <img src="../../common/images/logo.webp" alt="">
      </div>
    </div>
</template>


<script>
  export default {
      data(){
          return{
              isShow:true
          }
      }

  }
</script>


<style lang='stylus'>
#header
  width 100%
  box-sizing border-box
  .xIcon
    // width 50px
    // height 50px
    background-color rgba(0,0,0,0.5)
    position absolute
    left 0
    top 0
    span 
      width 76px
      height 76px
      display block
      font-size 38px
  .logo
    width 100%
    height 100%
    img 
      width 100%
      height 100%
</style>