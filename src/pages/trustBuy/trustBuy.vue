<template>
  <div id="trustBuyModule">
    <!-- 头部 -->
    <div class="trustBuy-header">
      <i class="iconfont icon-shouye"></i>
      <span class="trustBuyWord">值得买</span>
			<i class="iconfont icon-search"></i>
			<i class="iconfont icon-cart-Empty"></i>
    </div>
    <!-- 轮播图 -->
    <div class="middle-trustBuy">
      <img class="bgtrust" src="../../common/images/bgtrust.png" alt="">
      <img class="trustBuy" src="../../common/images/trustBuy.png" alt="">
      <span class="goodWord">严选好物 用心生活</span>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="swiper-item">
              <a href="#3">
                <div class="image">
                  <img src="../../common/images/nav/1.jpg" />
                </div>
                <div class="maintext">9.9超值</div>
                <div class="desctext">定价直降</div>
              </a>
              <a href="#3">
                <div class="image">
                  <img src="../../common/images/nav/2.jpg" />
                </div>
                <div class="maintext">9.9超值</div>
                <div class="desctext">定价直降</div>
              </a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-item">
              <a href="#3">
                <div class="image">
                  <img src="../../common/images/nav/1.jpg" />
                </div>
                <div class="maintext">9.9超值</div>
                <div class="desctext">定价直降</div>
              </a>
              <a href="#3">
                <div class="image">
                  <img src="../../common/images/nav/2.jpg" />
                </div>
                <div class="maintext">9.9超值</div>
                <div class="desctext">定价直降</div>
              </a>
            </div>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>


<script>
import Swiper from "swiper"
import "swiper/css/swiper.min.css"
  export default {
    mounted(){
      this.$nextTick(() => {
        //创建Swiper实例对象
        new Swiper(".swiper-container", {
          loop: true,
          //分页器
          pagination: {
            el: ".swiper-pagination"
          }
        })
      })
    }

  }
</script>


<style lang="stylus">
#trustBuyModule
  height 100%
  background-color #FAFAFA
  .trustBuy-header
    width 100%
    height 88px
    text-align center
    line-height 88px
    .trustBuyWord
      margin 0 250px 0 270px
      font-size 48px
    .iconfont
      font-size 70px
      vertical-align middle
  .middle-trustBuy
    height 1000px
    position relative
    .bgtrust
      width 100%
      height 800px
    .trustBuy
      position absolute
      left 20px
      top 80px
      width 180px
      height 100px
    .goodWord
      position absolute
      left 220px
      top 120px
      color white
    .swiper-container 
      position absolute
      left 20px
      top 200px
      width 840px
      height 700px
      border-radius 20px
      background-color white
      .swiper-wrapper
        width 100%
        height 100%
        display flex
        .swiper-slide
          width 210px
          height 100%
          .swiper-item
            width 210px
            height 100%
            text-align center
            padding 40px 20px
            box-sizing border-box
            >a
              color #000
              .image
                margin-top 15px
                img 
                  width 180px
                  height 180px
              .desctext
                font-size 22px
                color #888
                line-height 50px  
      /* 深度选择器的使用 */
      /deep/.swiper-pagination 
        >span.swiper-pagination-bullet-active 
          background-color red
</style>