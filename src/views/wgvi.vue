<template>
	<div id="app">
		<img class="IMg" src="../assets/imgs/1.jpg">
		<img class="Img" src="../assets/imgs/1.png" />
		<div class="Ddiv1">

			<div class="xdiv1">
				<el-input autofocus focus prefix-icon="el-icon-user-solid" @focus="aa"  @keyup.enter.native="wgvi" placeholder="请输入帐号" v-model="emr"></el-input>
			</div>
			<div class="xdiv1">
				<el-input prefix-icon="el-icon-lock" @focus="aa"  @keyup.enter.native="wgvi" placeholder="请输入密码" v-model="par" show-password></el-input>
			</div>
			<div class="xdiv2" v-show="booutm">
				<i class="el-icon-warning"></i>
				{{text}}
			</div>
			<div class="xdiv1">
				<el-button class="but" type="success" @click="but()" >登录</el-button>
			</div>

		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				emr: "",
				par: "",
				booutm: false,
				text: "",
			}

		},

		methods: {
			but() {
				this.$axios({
						url: 'http://139.9.169.87:8081/examsystem/login',
						method: "post",
						headers: {
							'Content-Type': 'application/json;charset=UTF-8'
						},
						params: {
							username: this.emr,
							password: this.par
						}
					})
					.then((response) => {
						if (this.emr == "" || this.par == "") {
							this.text = "用户名或密码不能为空"
							this.booutm = true;
							
						} else if (response.data.success == 'true') {
							// localStorage
							this.$router.push({
								path: '/dmdm'
							});
							window.sessionStorage.setItem("key", "uge");
						} else {
							this.text = "用户名或密码错误"
							this.booutm = true;
						}

						console.log(response.data.success);
					})
					.catch((error) => {
						console.log(error);
					});


			},
			aa() {
				this.booutm = false;
			},
			wgvi(){
				this.but() 
			}
		},



	}
</script>
<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	.IMg {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		flex: 0;
		z-index: -1;
	}

	.Img {
		width: 215px;
		height: 44px;
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translateX(-50%);
	}

	.xdiv1 {
		width: 300px;
		height: 60px;
	}


	.Ddiv1 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: 325px;
	}

	.el-input__icon {
		font-size: 30px;
		margin-top: 5px;
	}

	.el-input__inner {
		height: 50px !important;
		padding-left: 40px !important;
	}

	.but {
		width: 300px;
		height: 50px;
		border: none;
	}

	.xdiv2 {
		width: 300px;
		height: 40px;
		border-radius: 5px;
		color: #ffffff;
		background: #79797B;
		margin-bottom: 10px;
		line-height: 40px;
		font-size: 12px;
	}

	.xdiv2>i {
		padding-left: 20px;
		font-size: 16px;
	}
</style>
