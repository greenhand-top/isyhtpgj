<template>
	<div id="app">
		<router-link to="/dmdm/udm" tag="div" class="cur">
			<div class="Ddiv1">
				<div class="xdiv1"><i class="el-icon-s-home"></i></div>
				<div>首页</div>
			</div>
		</router-link>
		<div class="Ddiv2" @mouseenter="mous" @mouseleave="leave">
			<div class="xdiv3">
				<div class="xdiv2"><img class="IMs" src="../../assets/imgs/2.jpg"></div>
				<div>用户昵称</div>
				<div><i class="el-icon-caret-bottom"></i></div>
			</div>
			<div class="xdiv4" v-show="trues">
				<div @click="logout">退出</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				trues: false,
			}
		},
		methods: {
			mous() {
				this.trues = true
			},
			leave(){
				this.trues = false
			},
			logout(){
				this.$router.push({
					path:"/wgvi"
				})
			}
			
		}
		
		
	}
</script>

<style scoped>
	#app {
		width: 100%;
		height: 45px;
		background: #F2F2F2;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.el-icon-s-home {
		font-size: 25px;
	}
	.cur{
		cursor: pointer;
	}
	.xdiv1 {
		margin-right: 5px;
	}

	.Ddiv1 {
		display: flex;
		padding-left: 50px;
		height: 45px;
		line-height: 45px;
	}

	.xdiv4 {
		position: absolute;
		right: 50px;
		width: 90px;
		top: 29px;
		background: #F2F2F2;
	}

	.xdiv4>div {
		padding: 15px;
		text-align: center;

	}

	.Ddiv2 {
		position: relative;
		cursor: pointer;
		padding-right: 50px;
	}

	.xdiv3 {
		display: flex;
		align-items: center;

	}

	.xdiv3>div {
		margin-right: 6px;
	}

	.IMs {
		width: 30px;
		height: 30px;
	}

	.xdiv2 {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		overflow: hidden;
	}
</style>
