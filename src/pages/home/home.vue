<template>
  <div id="indexContainer">
    <div class="fixedContainer">
      <!-- 头部 -->
      <IndexHeader/>
      <!-- 导航 -->
      <div class="navContainer" ref="wrapper">
        <ul class="nav">
          <li @click="navIndex = index" :class="{active: navIndex === index}" v-for="(navItem, index) in indexCateModule" :key="index"><span>{{navItem.name}}</span></li>
        </ul>
      </div>
    </div>
    <!-- 箭头 -->
    <div class="jiantou" @click="handleDownMask">
      <i class="iconfont" :class="isDown? 'icon-RectangleCopy1':'icon-RectangleCopy2'"></i>
    </div>
    <!-- 遮罩层 -->
    <div class="mask-wrap" v-show="isShowMask">
      <div class="mask-top" @click="isShowMask=true">
        <div class="nav-title">
          全部频道
        </div>
        <div class="more-cate">
          <ul class="cate-list">
            <li  @click="navIndex = index" :class="{active: navIndex === index}" v-for="(navItem, index) in indexCateModule" :key="index"><span>{{navItem.name}}</span></li>
          </ul>
        </div>
      </div>
      <!-- toggleIsShowMask -->
      <div class="mask-bottom" @click="isShowMask=false, isDown=false"></div>
    </div>
    <!-- 轮播 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(focusItem, index) in focusList" :key="index">
            <img :src="focusItem.picUrl" />
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    <!-- 服务政策 -->
    <ul class="service-policy">
      <li v-for="(policyItem, index) in policyDescList" :key="index">
        <img class="icon" :src="policyItem.icon" alt="">
        <span>{{policyItem.desc}}</span>
      </li>
    </ul>
    <!-- 商品列表 -->
    <div class="shopList-nav">
      <ul>
        <li v-for="(cateItem, index) in kingKongModule" :key="index">
          <img :src="cateItem.picUrl" alt="">
          <span>{{cateItem.text}}</span>
        </li>
      </ul>
    </div>
    <!-- 促销模块 -->
    <div class="promotion-module">
      <div class="floor-top">
        <img src="https://yanxuan.nosdn.127.net/5db28c137605ea7576c986e9c285e1c6.png?quality=75&type=webp&imageView&thumbnail=750x0" alt="">
      </div>
      <div class="floor-first">
        <img src="https://yanxuan.nosdn.127.net/a4187bffa2a0431ec5d6e2dd1070d6c5.gif?imageView&quality=75" alt="">
      </div>
      <div class="floor-list">
        <ul>
          <li><img src="https://yanxuan.nosdn.127.net/28244c6ae7ef78424ea5317a0d72dd6a.png?quality=75&type=webp&imageView&thumbnail=375x0" alt=""></li>
          <li><img src="https://yanxuan.nosdn.127.net/15b56691109bba3adf6156fd44f14073.png?quality=75&type=webp&imageView&thumbnail=375x0" alt=""></li>
          <li><img src="https://yanxuan.nosdn.127.net/83b35324b02e31aa202a12971fa7f8c3.png?quality=75&type=webp&imageView&thumbnail=375x0" alt=""></li>
          <li><img src="https://yanxuan.nosdn.127.net/2c98b2002572ec4cd0824bc810d7d31f.png?quality=75&type=webp&imageView&thumbnail=375x0" alt=""></li>
        </ul>
      </div>
    </div>
    <!-- 新人专享 -->
    <div class="freshman-module">
      <div class="module-title">
        <span>新人专享礼</span>
      </div>
      <div class="module-content">
        <div class="content-left">
          <div class="font-wrap"><span>新人专享礼包</span></div>
          <div class="img-wrap">
            <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
          </div>
        </div>
        <div class="content-right">
          <div class="module1">
            <div class="small-title">
              <span class="big-title">福利社</span><br>
              <span class="sub-title">今日特价</span>
            </div>
            <div class="small-img">
              <img src="https://yanxuan-item.nosdn.127.net/858cc027d5dae682799a633cd331a29a.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
          </div>
          <div class="module2">
            <div class="small-title">
              <span class="big-title">新人拼团</span><br>
              <span class="sub-title">1元起包邮</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 类目热搜榜 -->
    <div class="category-hotSell-module">
      <div class="hotSell-module-title"><span>类目热搜榜</span></div>
      <div class="hotSell-module-content">
        <div class="content-top">
          <div class="content-top-left">
            <div class="text">
              <span>热销榜</span>
            </div>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/db4a9cbd2bdfed303e2536db8b40fe33.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
          </div>
          <div class="content-top-right">
             <div class="text">
              <span>好评榜</span>
            </div>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/bb9025c24057dfb89403055ac5b9f85c.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
          </div>
        </div>
        <div class="content-bottom">
          <ul>
            <li v-for="(categoryHotSellItem,index) in categoryHotSellModule" :key="index" v-show="index>1">
              <div class="title"><span>{{categoryHotSellItem.categoryName}}</span></div>
              <div class="img-wrap">
               <img :src="categoryHotSellItem.picUrl" alt="">
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 限时购 -->
    <div class="flashSale-module">
      <div class="flashSale-module-title">
        <div class="flashSale"><span>限时购</span></div>
        <div class="count-time">
          <span class="hour">00</span>
          <span class="dot">:</span>
          <span class="minute">00</span>
          <span class="dot">:</span>
          <span class="second">00</span>
        </div>
        <div class="more">更多 ></div>
      </div>
      <div class="flashSale-content">
        <ul>
          <li v-for="(flashSaleItem,index) in flashSaleModule" :key="index">
            <div class="img-wrap"><img :src="flashSaleItem.picUrl" alt=""></div>
            <div class="price">
              <span>￥{{flashSaleItem.activityPrice}}</span>
              <span><del>￥{{flashSaleItem.originPrice}}</del></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 新品首发 -->
    <div class="newItem-module">
      <div class="newItem-title">
        <div class="newItem"><span>新品首发</span></div>
        <div class="more">更多 ></div>
      </div>
      <div class="newItem-content">
        <ul>
          <li v-for="(newItem,index) in newItemList" :key="index" v-show="index<=5">
            <div class="img-wrap"><img :src="newItem.showPicUrl" alt=""></div>
            <div class="good">
              <div class="newItemDesc"><span>{{newItem.name}}</span></div>
              <div class="price"><span>￥{{newItem.retailPrice}}</span></div>
              <div class="tag-wrap"><span>特价</span></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 其他 -->
    <div class="sceneLight-shoppingGuide-module">
      <ul>
        <li v-for="(shoppingGuideItem,index) in shoppingGuideModule" :key="index">
          <div class="title">
            <span>{{shoppingGuideItem.styleItem.title}}</span><br>
            <span>{{shoppingGuideItem.styleItem.desc}}</span>
          </div>
          <div class="pic">
            <img :src="shoppingGuideItem.styleItem.picUrlList[0]" alt="">
            <img :src="shoppingGuideItem.styleItem.picUrlList[1]" alt="">
          </div>
        </li>
      </ul>
    </div>
    <!-- 底部版权所有 -->
    <div class="bottom-copyright-module">
      <div class="load">
        <a class="app" href="#1">下载App</a>
        <a class="computer" href="#2">电脑版</a>
      </div>
      <div class="copyright">
        <span class="copy1">网易公司版权所有 @1997-2020</span>
        <span class="copy2">食品经营许可证：JY13301080111719</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
//引入BetterScroll
import BScroll from 'better-scroll'
import Swiper from "swiper"
import "swiper/css/swiper.min.css"
import IndexHeader from '../../components/header/header'
export default {
  components:{
    IndexHeader
  },
  data(){
    return {
      focusList: [],
      policyDescList: [],
      indexCateModule: [],
      kingKongModule:[],
      categoryHotSellModule:[],
      flashSaleModule:[],
      newItemList:[],
      shoppingGuideModule:[],
      isDown:true,
      navIndex:0,
      isShowMask:false
    }
  },
  async mounted() {
    //发送ajax请求，获取首页对应的数据
    let indexDatas = await this.$API.getIndexData()
    let indexCateModule = await this.$API.getIndexCateModule()
		const {newItemList,focusList, sceneLightShoppingGuideModule,policyDescList, kingKongModule,categoryHotSellModule,flashSaleModule} = indexDatas
		this.focusList = focusList
		this.policyDescList = policyDescList
    this.kingKongModule = kingKongModule.kingKongList
    this.indexCateModule = indexCateModule
    this.categoryHotSellModule = categoryHotSellModule.categoryList
    this.flashSaleModule = flashSaleModule.itemList
    this.newItemList = newItemList
    this.shoppingGuideModule = sceneLightShoppingGuideModule
    this.$nextTick(() => {
      //创建Swiper实例对象
      new Swiper(".swiper-container", {
        loop: true,
        //分页器
        pagination: {
          el: ".swiper-pagination"
        }
      })
      //创建BScroll实例对象
      this.navListScroll = new BScroll(this.$refs.wrapper, {
        scrollX: true,//横向滚动
        probeType: 2,
        click: true
      })
    })
  },
  methods:{
    handleDownMask(){
      this.isDown = !this.isDown
      this.isShowMask = !this.isShowMask
    }
  }
}
</script>

<style lang="stylus">
@import '../../common/stylus/mixins.styl'
#indexContainer 
  // width 100%
  height 5900px
  background-color #eee
  // 头部固定
  .fixedContainer
    position fixed
    left 0
    top 0
    z-index 99
    width 100%
    background-color white
    // 导航栏
    .navContainer
      height 80px
      line-height 80px
      font-size 28px
      background-color #fff
      overflow hidden
      position relative
      .nav
        width 1550px
        height 100%
        display flex     
        li
          // position relative
          padding 0 30px
          white-space nowrap
          &.active
            color red
            border-bottom 1px solid red
  // 箭头
  .jiantou
    position fixed
    right 0
    top 102px
    height 78px
    line-height 70px
    background-color #ffffff
    width 160px
    text-align center
    z-index 120
    .iconfont
      font-size 100px
  //遮罩层
  .mask-wrap
    width 100%
    height calc(100vh - 105px)
    position fixed 
    bottom 0
    left 0
    z-index 100
    background-color rgba(0, 0, 0, 0.4) 
    .mask-top
      width 100%
      .nav-title
        width 100%
        height 60px
        line-height 66px
        font-size 32px
        padding-left 30px
        box-sizing border-box
        background-color #fff
      .more-cate
        padding-top 40px
        width 100%
        background-color #fff
        padding-bottom 50px
        .cate-list
          width 100%
          overflow hidden
          li
            float left 
            width 180px
            height 70px
            line-height 70px
            margin-left 30px
            margin-bottom 50px
            border 1px solid #ccc
            background-color #eee
            &.active
              color red
              border 1px solid red
            span
              display block
              width 100%
              height 100%
              text-align center
              font-size 24px
    .mask-bottom
      width 100%
      height 100%  
  
  //轮播图
  .swiper-container 
    width 100%
    height 450px
    margin-top 183px
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        width 100%
        height 100%
        >img 
          display inline-block
          width 100%
          height 100%

    /* 深度选择器的使用 */
    /deep/.swiper-pagination 
      >span.swiper-pagination-bullet-active 
        background-color red

  //服务政策
  .service-policy
    width 100%
    height 72px
    padding 0 30px
    background-color #fff
    box-sizing border-box
    display flex
    li
      display flex
      width 33.3333%
      height 100%
      text-align center
      line-height 72px
      font-size 24px
      .icon
        width 32px
        height 32px
        vertical-align center 
        margin 20px 5px 0
  //商品列表
  .shopList-nav
    width 100%
    height 350px
    background-color #fff
    padding 20px 0
    margin-bottom 2px
    ul
      width 100%
      height 100%
      li
        margin 10px 0
        display flex
        flex-direction column
        align-items center
        width 20%
        height 156px
        float left
        box-sizing border-box
        img 
          border-radius 30px
          width 100px
          height 100px
        span 
          margin-top 10px
          font-size 20px
  //促销模块
  .promotion-module
    width 100%
    background-color #fff
    padding-top 20px
    .floor-top, .floor-first
      img 
        width 100% 
    .floor-first, .floor-list
      padding 0 20px
      background-color #1674e3
      box-sizing border-box
    .floor-list
      width 100%
      overflow hidden
      padding-bottom 20px
      ul
        width 100%
        li
          width 400px
          height 186px
          margin-top 10px
          float left
          img 
            width 100%  
            height 100%  
          &:nth-child(2n+1)
            margin-right 20px     
  //新人专享
  .freshman-module
    width 100%
    padding 20px 30px 40px 20px
    box-sizing border-box
    background-color #fff
    margin 20px 0 30px 0
    //标题
    .module-title
      width 100%
      height 90px
      color #333
      font-size 32px
      text-align center
      line-height 90px
      span
        position relative
        &::before,&::after
          content ''
          display block
          position absolute
          left -48px
          top 50%
          width 30px
          height 4px
          background-color #333
        &::after
          left auto
          right -48px
    //内容
    .module-content
      display flex
      width 100%
      >div
        width 50%
        height 434px
      //左边内容
      .content-left
        background-color #F9E9CF
        margin-right 5px
        border-radius 5px
        .font-wrap
          width 100%
          font-size 32px
          padding 40px 0 0 40px
          box-sizing border-box
        .img-wrap
          width 100%
          height 258px
          margin-top 45px
          position relative
          img 
            width 258px
            height 258px
            position absolute
            left 50%
            transform translate(-50%)
            top 0
            
      //右边内容
      .content-right
        >div
          width 100%
          height 215px
          border-radius 5px
          box-sizing border-box
          overflow hidden
        .module1,.module2
          position relative
          padding 20px 0 0 30px
          margin-bottom 5px
          background-color #fbe2d3
          .small-title
            span 
              line-height 40px
            .big-title
              font-size 32px
            .sub-title
              font-size 20px
          .small-img
            position absolute
            right 0
            top 0
            width 200px
            height 200px
            padding-top 20px
            .discount
              width 80px
              height 80px
              background-color #f6a447
              border-radius 50%
              position absolute
              right 30px
              top 15px
              z-index 99
              >span 
                position absolute
                left 20px
                color #fff
              .price1
                top 20px
              .price2
                top 40px
            img 
              width 200px
              height 200px
        .module2
          background-color #ffecc2
          .sub-title
            background-color rgba(0,0,0,0.2)
            border-radius 5px
            color #fff
            padding 0 8px


  //类目热搜榜
  .category-hotSell-module
    width 100%
    padding 0 30px 40px 30px 
    box-sizing border-box
    background-color #fff
    margin 0 0 30px
    .hotSell-module-title
      width 100%
      height 100px
      line-height 100px
      font-size 32px
    .hotSell-module-content
      width 100%
      //上半部分
      .content-top
        display flex
        width 100%
        height 200px
        >div
          width 50%
          height 100%
          border-radius 5px
        .content-top-left, .content-top-right
          display flex
          width 400px
          background-color #f9f3e4
          padding-left 30px
          line-height 150px
          margin 0 10px 10px 0
          box-sizing border-box
          >div
            width 50%
            height 100%
          .text
            position relative
            font-size 28px
            &::after
              content ''
              display block
              position absolute
              left 0
              top 50%
              margin-top 10px
              width 48px
              height 4px
              background-color #666
          .img-wrap
            width 100%
            height 100%
            img 
              width 200px
              height 200px
        .content-top-right
          background-color #ebeff6
          margin-right 0
      //下半部分
      .content-bottom
        margin-top 10px
        width 100%
        ul
          width 100%
          overflow hidden
          box-sizing border-box
          li
            position relative
            width 195px
            height 180px
            float left
            border-radius 5px
            background-color #f5f5f5
            margin 0 10px 10px 0
            &:nth-child(6), &:nth-child(10)
              margin-right 0
            .title
              width 100%
              height 36px
              font-size 24px
              text-align center
              line-height 36px
              padding-top 10px
            .img-wrap 
              position absolute
              left 50%
              transform translateX(-50%)
              top 50px
              width 120px
              height 120px
              text-align center
              img 
                width 100%
                height 100%
  //限时购
  .flashSale-module
    width 100%
    padding 0 30px
    background-color #fff
    box-sizing border-box
    margin-bottom 30px
    .flashSale-module-title
      display flex
      width 100%
      height 100px
      line-height 100px
      font-size 32px
      .flashSale
        flex-grow 1
      .count-time
        flex-grow 7
        .hour, .minute, .second
          width 36px
          height 36px
          background-color #333
          text-align center
          line-height 36px
          color #fff
          font-size 24px
          padding 0 5px
          border-radius 5px
        .dot
          margin 0 10px
      .more
        flex-grow 2
        text-align right
        margin-right 10px
    .flashSale-content
      width 100%
      box-sizing border-box
      ul
        width 100%
        overflow hidden
        li
          width 250px
          float left
          padding-bottom 30px
          margin-right 30px
          border-radius 5px
          &:nth-child(3), &:nth-child(6)
            margin-right 0
          >.img-wrap
            width 250px
            height 240px
            background-color #f5f5f5
            img
              width 100%
              height 100%
          .price
            width 100%
            margin-top 10px
            padding-left 20px
            span 
              &:nth-child(1)
                color $mainColor
                font-size 28px
                margin-right 10px
              &:nth-child(2)
                font-size 24px
  //新品首发
  .newItem-module
    width 100%
    padding 0 30px
    background-color #fff
    box-sizing border-box
    margin-bottom 30px
    padding-bottom 40px
    .newItem-title
      display flex
      width 100%
      height 100px
      line-height 100px
      font-size 32px
      .newItem
        flex-grow 1
      .more
        flex-grow 2
        text-align right
        margin-right 10px
    .newItem-content
      width 100%
      box-sizing border-box
      ul
        width 100%
        overflow hidden
        li
          width 250px
          float left
          padding-bottom 40px
          margin-right 30px
          border-radius 5px
          &:nth-child(3), &:nth-child(6)
            margin-right 0
          >.img-wrap
            width 250px
            height 216px
            background-color #f5f5f5
            img
              width 100%
              height 100%
          .good
            width 100%
            font-size 22px
            overflow hidden
            .newItemDesc
              width 100%
              font-size 31px
              line-height 50px
              margin-top 10px
              white-space nowrap
            .price
              color $mainColor
              font-size 24px
              padding 10px 0
            .tag-wrap
              width 100px
              height 30px
              text-align center
              line-height 30px
              border 1px solid red
              span
                color red
                font-size 18px
  // 其他   
  .sceneLight-shoppingGuide-module
    width 100%
    padding 30px
    background-color #fff
    box-sizing border-box
    margin-bottom 30px
    ul
      width 100%
      overflow hidden
      li
        float left
        width 49%
        margin 0 5px 5px 0
        padding 20px 0 0 20px
        box-sizing border-box
        background-color #f5f5f5
        .title
          >span
            font-size 24px
            line-height 42px
            color #7f7f7f
            &:nth-child(1)
              font-size 38px
              color #000
        .pic
          display flex
          img
           width 150px
           height 150px
        &:nth-child(2), &:nth-child(4)
          margin-right 0
        &:nth-child(3), &:nth-child(4)
          margin-bottom 0
  //底部版权所有
  .bottom-copyright-module
    width 100%
    height 244px
    background-color #000
    margin-bottom 88px
    font-size 22px
    color rgb(153,153,153)
    .load
      display flex
      justify-content center
      align-items center
      width 100%
      height 122px
      line-height 122px
      a
        border 1px solid #fff
        display block
        text-align center
        width 172px
        height 62px
        line-height 62px
        color rgb(153,153,153)
        &.app
          margin-right 100px
    .copyright
      display flex
      flex-direction column
      text-align center
      line-height 50px


</style>
