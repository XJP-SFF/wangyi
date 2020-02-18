<template>
	<div id='categoryContainer'>
		<div class="header">
			<div class='headerBg'></div>
			<span>搜索商品</span>
		</div>
		
		<div class="content">
			<div class="left">
				左边
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
		.header 
			width 100%
			height 56rpx
			position relative
			padding 20rpx 0
			.headerBg 
				width 90%
				height 56rpx
				background #EDEDED
				margin auto
				border-radius 10rpx 
			span 
				position absolute
				text-align center 
				height 56rpx 
				line-height 56rpx
				left 0
				top 20rpx
				width 100%
				font-size 24rpx
		.content 
			border-top 1rpx solid #eee 
			display flex 
			width 100%
			.left 
				width 20%
				border-right 1rpx solid #eee
				font-size 28upx
				box-sizing border-box
				.scrollContainer 
					height calc(100vh - 96rpx) /* 1vh = 屏幕高度的百分之一 */
					::-webkit-scrollbar  /* 去除默认滚动条样式的 */
						width 0
					.navList 
						li 
							height 80rpx
							line-height 80rpx
							text-align center
							margin 10rpx 0
							&.active
								color #B4282D
								position relative
								&:after
									content ''
									height 70%
									width 2rpx 
									background #B4282D
									position absolute
									top 15%
									left 6upx
									
			.right 
				width 80%
				.scrollContainer
					height calc(100vh - 96rpx)
				.proList
					width 100%
					display flex
					flex-wrap wrap
					.cateImg
						width 520upx
						height 190upx
						margin 20upx auto
					.proItem 
						width 33%
						padding 10upx
						box-sizing border-box
						display flex 
						align-items center
						flex-direction column
						image 
							width 90% 
							height 144upx
						p
							font-size 24upx
							text-align center
				
</style>
		