<template>
  <div id="gShopModule">
    <div class="gShopHeader">
      <span class="car">购物车</span>
      <!-- 判断是否登录 -->
      <span class="quan" @click="noUserInfo?$router.push('/login'):$router.push('/coupon')">领券</span>
    </div>
    <div class="gShopContent">
      <div class="top">
        <div class="topItem">
          <i class="iconfont icon-kongxinyuan"></i>
          <span>30天无忧退货</span>
        </div>
        <div class="topItem">
          <i class="iconfont icon-kongxinyuan"></i>
          <span>48小时快速退款</span>
        </div>
        <div class="topItem">
          <i class="iconfont icon-kongxinyuan"></i>
          <span>满88元免邮费</span>
        </div>
      </div>
      <div class="middle">
        <img class="gShopImg" src="../../common/images/car.webp"/>
        <div class="add"><span>去添加点什么吧</span></div>
        <!-- 判断是否登录 -->
        <div v-if="noUserInfo" class="loginBtn" @click="$router.push('/login')">
          <span>登录</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data(){
      return{
        noUserInfo:true
      }
    },
    mounted(){
      // 判断是否登录
      let userInfo = JSON.parse(localStorage.getItem('userInfo'))
      if (userInfo) {
        this.noUserInfo = false
      }
    }
  }
</script>


<style lang="stylus">
#gShopModule
  background-color #eee
  .gShopHeader
    // width 100%
    height 88px
    line-height 88px
    background-color #ffffff
    display flex
    justify-content space-between
    padding 0 30px
    box-sizing border-box
    .car
      font-size 44px
    .quan
      font-size 32px
      color red
  .gShopContent
    height 100%
    .top
      display flex
      justify-content space-between
      font-size 22px
      height 88px
      line-height 88px
      .topItem
        text-align center
        i 
          &.iconfont
            font-size 40px
            vertical-align middle
        span 
          vertical-align baseline
        &:nth-child(3)
          margin-right 20px
    .middle
      height 1300px
      width 100%
      text-align center
      background-color #f4f4f4
      .gShopImg
        width 300px
        height 300px
        margin-top 500px
      .add
        font-size 22px
        margin-top -30px
      .loginBtn
        width 400px
        height 100px
        background-color red
        line-height 100px
        margin 100px auto 

        


</style>