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
    </div>
</template>


<script>
  export default {


  }
</script>


<style lang="stylus">

.header-search-login 
    display flex
    width 100%
    height 90px
    padding 20px
    box-sizing border-box
    background-color #fff

    .logo 
      width 140px
      height 40px
      margin 10px 0 0 15px

    .searchInput 
      width 440px
      height 60px
      background #ededed
      position relative
      margin 0 30px
      border-radius 10px

      .iconfont 
        font-size 30px
        position absolute
        left 10px
        top 25%

      input 
        border-radius 10px
        height 60px
        width 390px
        background #ededed
        margin-left 50px
		
	
</style>