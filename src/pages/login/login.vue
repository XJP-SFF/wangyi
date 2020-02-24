<template>
	<div id="loginContainer">
		<!-- 头部 -->
		<div id="login-header">
			<i class="iconfont icon-shouye" @click="$router.push('/home')"></i>
			<img class="logoImg" src="../../common/images/logo.png"/>
			<i class="iconfont icon-search" @click="$router.push('/search')"></i>
			<i class="iconfont icon-cart-Empty" @click="$router.push('/shop')"></i>
		</div>
		<img class="logo" v-show="isShowloginMode === false" src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"/>
		<div class="loginMethods" v-show="isShowloginMode === false">
			<div class="login">
				<div class="phone" @click="handleLogin(1)">
					<i class="iconfont icon-shouji1"></i>
					<span>手机号快捷登录</span>
				</div>
				<div class="email" @click="handleLogin(2)">
					<i class="iconfont icon-youxiang2"></i>
					<span>邮箱账号登录</span>
				</div>
			</div>
		</div>
		<!-- 登录方式 -->
		<div class="loginWays" v-show="isShowloginMode === false">
			<i class="iconfont icon-weixinhover"></i>
			<span class="word">微信</span>
			<span class="interval">|</span>
			<i class="iconfont icon-qq"></i>
			<span class="word">QQ</span>
			<span class="interval">|</span>
			<i class="iconfont icon-sinaweibo"></i>
			<span class="word">微博</span>
		</div>
		<!-- loginModule -->
		<LoginModule @func="getMsgFormSon" :modeFlag="modeFlag" v-show="isShowloginMode !== false"/>
	</div>
</template>

<script>
import LoginModule from '../../components/loginModule/loginModule'
	export default {
		components:{LoginModule},
		data() {
			return {
				modeFlag:0,
				isShowloginMode:false,
			}
		},
		methods:{
			login(){

			},
			handleLogin(flag){
				this.isShowloginMode = true;
				this.modeFlag =(flag === 1) ? flag : flag;
			},
			//获取子组件传递给父组件的数据
			getMsgFormSon(data){
				this.isShowloginMode = data;
			}
		}
	}
</script>

<style lang="stylus">
	#loginContainer
		width 100%
		height 100%
		background #F8F8F8
		display flex
		align-items center
		flex-direction column
		//头部
		#login-header
			width 100%
			height 88px
			background-color #fff
			text-align center
			// line-height 88px
			.logoImg
				width 138px
				height 56px
				padding-left 280px
			.iconfont
				font-size 60px
				&:nth-child(1)
					float left
					line-height 88px
					padding-left 10px
				&:nth-child(2),&:nth-child(3)
					padding-left 200px
					font-size 70px
					line-height 88px
				&:nth-child(3)	
					padding-right 10px
		.logo
			width 300px
			height 100px
			margin-top 200px
		.loginMethods
			width 100%
			.login
				margin 280px auto 400px
				.phone
					width 80%
					margin 0 10%
					height 100px
					line-height 100px
					text-align center
					background-color red
				.email
					width 80%
					margin 50px 10%
					height 100px
					line-height 100px
					text-align center
					box-sizing border-box
					border 1px solid red
		.loginWays
			height 245px
			line-height 300px
			.interval
				font-size 40px
				margin 0 20px	
			.iconfont
				font-size 50px


</style>
