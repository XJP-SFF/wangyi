<template>
	<div id='indexContainer'>
		<!-- 头部 -->
		<IndexHeader/>
		<!-- 导航 -->
		<div class="navContainer">
			<ul class="nav">
				<li v-for="(navItem, index) in indexCateModule" :key="index">{{navItem.text}}</li>
			</ul>
			<span class="jiantou">X</span>
		</div>

	</div>
</template>

<script>
import IndexHeader from '../../components/header/header.vue'
	export default {
		components: {
			IndexHeader
		},
		data(){
			return{
				focusList:[],
				policyDescList:[],
				indexCateModule:[]
			}
		},
		async mounted() {
			//发送ajax请求，获取首页对应的数据
			let indexDatas = await this.$API.getIndexData()
			const {focusList, policyDescList, kingKongModule} = indexDatas
			this.focusList = focusList
			this.policyDescList = policyDescList
			this.indexCateModule = kingKongModule.kingKongList
		}
	}
</script>

<style lang="stylus">
	#indexContainer
		width 100%
		.navContainer
			width 100%
			height 60px
			line-height 60px
			position relative
			font-size 28px
			.nav
				height 60px
				// line-height 60px
				display flex
				
				overflow hidden
				// align-items center
				li
					margin-left 60px
					white-space nowrap
					border-bottom 2px solid red
			.jiantou
				display block
				height 60px
				width 100px
				line-height 60px
				position absolute
				right 0
				top 0
				background-color #fff
</style>
