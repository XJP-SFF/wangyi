<template>
	<div id='categoryContainer'>
		<div class="header">
			<div class='headerBg'>
				<i class="iconfont icon-sousuo"></i>
				<span>搜索商品</span>
			</div>
		</div>
		<div class="content">
			<div class="left" ref="categoryNav">
				<ul>
					<li @click="navIndex = index" :class="{active: navIndex === index}" v-for="(categoryNavItem, index) in categoryNavDatas" :key="index">{{categoryNavItem.name}}</li>
				</ul>
			</div>
			<div class="right" v-show="id===item.id" v-for="(item, index) in cateList" :key="index">
				<div class="right-header">
					<img src="../../common/images/order/person.png" alt="">
				</div>
				<div class="right-content">
					<div class="hasTitle" v-if="item.subCateList">
						<ul v-for="(subCateItem, index) in item.subCateList" :key="index">
							<li>
								<div class="title">{{subCateItem.name}}</div>
								<div class="line"></div>
								<ul>
									<li></li>
								</ul>
							</li>
						</ul>
					</div>
					<ul v-if="item.categoryList">
						<li v-for="(categoryItem, index) in item.categoryList" :key="index">
							<img src="categoryItem.bannerUrl" alt="">
							<div class="desc">{{categoryItem.name}}</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
	export default {
		data(){
			return{
				categoryNavDatas:[],
				navIndex:0,
				cateList:[]
			}
		},
		async mounted() {
			let categoryNavDatas = await this.$API.getCategoryDatas()
			let cateList = await this.$API.getCateList()
			this.categoryNavDatas = categoryNavDatas.categoryL1List
			this.cateList = cateList
			this.categoryNavDatas.filter(item => this.id =item.id)
			//创建BScroll实例对象
			this.navScroll = new BScroll(this.$refs.categoryNav, {
				probeType: 2,
				click: true
			})
		},
	}
</script>

<style lang="stylus">	
	#categoryContainer
		width 100%
		.header
			width 100%
			height 88px
			box-sizing border-box
			padding 16px 30px
			border-bottom 1px solid #eee
			background-color #fff
			.headerBg
				margin-left 60px
				background-color #eeeeee
				width 690px
				height 56px
				line-height 56px
				text-align center
				border-radius 10px
				i
					margin-right 20px
		.content
			width 100%
			display flex
			overflow hidden
			height 100%
			.left
				width 170px
				box-sizing border-box
				border-right 1px solid #eee
				text-align center
				height 1400px
				>ul
					height 1500px
					>li
						width 160px
						height 50px
						margin 60px 0
						font-size 32px
						line-height 50px
						&.active
							color red
							border-left 1px solid red
			.right
				width 600px
				margin 30px 0 0 40px
				background-color #eee

			
</style>
		