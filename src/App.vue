<template>
<div id="appContainer">
    <!--公共头部分-->
    <HeaderTab/>
    <router-view></router-view>
    <FooterGuide/>
  </div>
</template>

<script>
import HeaderTab from './components/header_common/headerTab'
import FooterGuide from './components/footer_guide/footerGuide'
export default {
    components:{
    FooterGuide,
    HeaderTab
  }
}
</script>

<style lang="stylus">
// page 
//   width 100%
//   height 100%
</style>