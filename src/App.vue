<template>
<div id="appContainer">
    <!--公共头部分-->
    <!-- <HeaderTab/> -->
    <router-view></router-view>
    <div v-if="$route.path !== '/login'">
      <FooterGuide :userInfo ="userInfo"/>
    </div>
  </div>
</template>

<script>
// import HeaderTab from './components/header_common/headerTab'
import FooterGuide from './components/footer_guide/footerGuide'
export default {
    components:{
      FooterGuide,
      // HeaderTab
    },
    data(){
      return{
        userInfo:{}
      }
    },
    mounted(){
      // 判断是否登录
      let userInfo = JSON.parse(localStorage.getItem('userInfo'))
      if (userInfo) {
        this.userInfo = userInfo
      }
    }
}
</script>

<style lang="stylus">
// page 
//   width 100%
//   height 100%
</style>