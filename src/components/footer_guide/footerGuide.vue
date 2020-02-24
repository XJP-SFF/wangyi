<template>
  <div id="footerContainer">
    <div class="footerItem" :class="{active: $route.path === '/home'}" @click="goUrl('/home')">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
    </div>
    <div class="footerItem" :class="{active: $route.path === `/category/cateId/${$route.params.id}`}" @click="goUrl('/category')">
        <i class="iconfont icon-category"></i>
        <span>分类</span>
    </div>
    <div class="footerItem" :class="{active: $route.path === '/trustBuy'}" @click="goUrl('/trustBuy')">
        <i class="iconfont icon-shoucang"></i>
        <span>值得买</span>
    </div>
    <div class="footerItem" :class="{active: $route.path === '/shop'}" @click="goUrl('/shop')">
        <i class="iconfont icon-add-cart"></i>
        <span>购物车</span>
    </div>
    <div class="footerItem" :class="{active: $route.path === '/polifile'}" @click="!!(userInfo.name)? goUrl('/polifile'):$router.push('/login')">
        <i class="iconfont icon-wode1"></i>
        <span>个人</span>
    </div>
  </div>
</template>


<script>
  export default {
      props:['userInfo'],
      methods:{
          goUrl(path){
              path !== this.$route.path && this.$router.replace(path)
          }
      }

  }
</script>


<style lang='stylus'>
  #footerContainer
    display flex
    border-top 1px solid #eee
    position fixed
    left 0
    bottom 0
    width 100%
    height 98px
    box-sizing border-box
    background-color #fff
    .footerItem
      width 20%
      height 98px
      text-align center
      display flex
      flex-direction column
      &.active
        color red
      .iconfont
        font-size 40px
        line-height 56px
</style>