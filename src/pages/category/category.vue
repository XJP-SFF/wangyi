<template>
	<div id='categoryContainer'>
		<div class="header">
			<div class='headerBg'>
				<i class="iconfont icon-sousuo"></i>
				<span>搜索商品</span>
			</div>
		</div>
		<div class="content">
			<div class="left">
				<ul>
					<li>推荐专区</li>
					<li>推荐专区</li>
					<li>推荐专区</li>
					<li>推荐专区</li>
					<li>推荐专区</li>
					<li>推荐专区</li>
					<li>gghfjdhg</li>
					<li>gghfjdhg</li>
					<li>gghfjdhg</li>
					<li>gghfjdhg</li>
					<li>gghfjdhg</li>
				</ul>
			</div>
			<div class="right" >
				右边
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="stylus">	
	#categoryContainer
		width 100%
		.header
			width 100%
			height 88px
			box-sizing border-box
			padding 0 30px
			border-bottom 1px solid #eee
			background-color #fff
			.headerBg
				margin-left 60px
				margin-top 16px
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
			height 1250px
			display flex
			.left
				width 160px
				box-sizing border-box
				height 100%
				border-right 1px solid #eee
				text-align center
				>ul
					>li
						width 160px
						height 50px
						padding-top 50px
						font-size 22px
			.right
				width 600px
				margin 30px 0 0 40px
				background-color #eee

			
</style>
		