<template>
	<div class="header-search-login">
      <img
        class="logo"
        src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
      />
      <div class="searchInput">
        <i class="iconfont icon-sousuo"></i>
        <input class="placeholder" type="text" placeholder="搜索商品" />
      </div>
      <div class="btn" @click="toLogin">
        <span>登录</span>
      </div>
    </div>
</template>


<script>
  export default {
    methods: {
      toLogin(){
        this.$router.replace('/login')
      }
    },

  }
</script>


<style lang="stylus">

.header-search-login 
    display flex
    // width 100%
    height 100px
    padding 20px
    box-sizing border-box
    background-color #fff

    .logo 
      width 150px
      height 50px
      margin 10px 0 0 15px

    .searchInput 
      width 500px
      height 60px
      background #ededed
      position relative
      margin 0 30px
      border-radius 10px
      padding-left 20px
      .iconfont 
        font-size 30px
        position absolute
        left 10px
        top 25%
        padding-left 20px
      input 
        border-radius 10px
        height 60px
        width 390px
        background #ededed
        margin-left 50px
    .btn
      width 100px
      height 50px
      box-sizing border-box
      border 1px solid red
      text-align center
      line-height 50px
      margin-top 8px
      color red
		
	
</style>