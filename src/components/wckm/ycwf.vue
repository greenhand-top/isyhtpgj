<template>
	<div id="#app">
		<div class="Ddiv1">
			<div>公员管理 > <span>充值设置</span></div>
		</div>
		<div class="Ddiv2">
			<div class="xdiv1">
				<div class="pbsg1">套餐配置</div>
				<div class="xidv2">
					<div class="xxdiv1">
						<div class="dis">
							<div>自定义金额</div>
							<div>
								<el-switch v-model="boou" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
							</div>
						</div>
						<div class="x-div1">
							<div id="uge">

							</div>
							<div class="x-div2" @click="but2()">
								添加套餐
							</div>
						</div>
					</div>
					<div class="xxdiv2" v-show="ture">
						<div>添加充值套餐</div>
						<div class="D-div1">
							<div class="x-div3">
								<div>套餐名称:</div>
								<div>
									<el-input size="mini" style="width: 100%;" v-model="input" placeholder="请输入套餐名称"></el-input>
								</div>
							</div>
							<div class="x-div4">
								<div class="x-div5">
									<div>金额:</div>
									<div>
										<el-input size="mini" style="width: 100%;" v-model="input" placeholder="请输入金额"></el-input>
									</div>
								</div>
								<div class="x-div6">
									<div>
										<el-input size="mini" style="width: 100%;" placeholder=""></el-input>
									</div>
									<div>余额</div>
								</div>
								<div class="x-div6">
									<div>
										<el-input size="mini" style="width: 100%;" placeholder=""></el-input>
									</div>
									<div>积分</div>
								</div>
								<div class="x-div5">
									<div>备注:</div>
									<div>
										<el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
										</el-input>
									</div>
								</div>
								<div class="but">
									<div>
										<el-button>取消</el-button>
									</div>
									<div @click="but1()">
										<el-button type="warning">保存</el-button>
									</div>

								</div>
							</div>

						</div>

					</div>

				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				boou: true,
				textarea: "",
				input: "",
				ture:false
			}
		},
		methods: {
			but1() {
				this.$message({
					message: '恭喜你，这是一条成功消息',
					type: 'success'
				});
			},
			but2(){
				this.ture = !this.ture
			}
			
		}
	}
</script>

<style scoped>
	.Ddiv5 {
		width: 400px;
		height: 400px;
		background: #FFFFFF;
	}

	.Ddiv1 {
		height: 40px;
		border-bottom: 1px solid #ccc;
		line-height: 40px;
	}

	.Ddiv1>div {
		padding-left: 30px;
		font-size: 16px;
		color: #999999;
	}

	.Ddiv1>div>span {
		color: #000000;
	}

	.Ddiv2 {
		height: 910px;
		background-color: rgba(242, 242, 242, 1);
		padding: 20px;
	}

	.xdiv1 {
		width: 100%;
		height: 100%;
		background: #FFFFFF;
	}

	.xidv2 {
		display: flex;
	}

	.dis {
		display: flex;
		margin-top: 20px;
		margin-left: 40px;
	}

	.dis>div {
		margin-right: 10px;
	}

	.pbsg1 {
		margin-left: 40px;
		padding-top: 20px;
		font-size: 20px;
		color: #999;
		font-weight: bold;
	}

	.x-div1 {
		width: 470px;
		height: 729px;
		background: #eee;
		margin-left: 40px;
		margin-top: 30px;
		border-radius: 10px;
		position: relative;
	}

	.x-div2 {
		width: 100%;
		height: 60px;
		border: 1px solid #CCCCCC;
		background: #FFFFFF;
		position: absolute;
		left: 0;
		bottom: 0px;
		cursor: pointer;
		text-align: center;
		line-height: 60px;
	}

	.xxdiv2 {
		width: 548px;
		height: 562px;
		border: 1px solid #CCCCCC;
		border-radius: 10px;
		margin-left: 80px;
		margin-top: 30px;
	}

	.xxdiv2>div:nth-child(1) {
		text-align: center;
		padding-top: 30px;
		font-weight: bold;
	}

	.x-div3 {
		display: flex;
		align-items: center;
		margin-left: 10px;
		margin-top: 30px;
		justify-content: end;
		position: absolute;
		right: 20px;
	}

	.x-div4 {
		position: absolute;
		right: 20px;
		top: 60px;
	}

	.x-div3>div {
		padding-left: 10px;
	}

	.x-div3>div:nth-child(2) {
		width: 400px;

	}

	.x-div5 {
		display: flex;
		padding-top: 20px;
	}

	.x-div5>div {
		padding-left: 10px;


	}

	.x-div5>div:nth-child(2) {
		width: 400px;
	}

	.x-div6 {
		display: flex;
		margin-left: 55px;
		padding-top: 10px;

	}

	.x-div6>div {
		margin-top: 10px;
	}

	.x-div6>div:nth-child(1) {
		width: 350px;
	}

	.x-div6>div:nth-child(2) {
		background: #ccc;
		padding: 0 10px;
		line-height: 25px;
	}

	.D-div1 {
		position: relative;
	}

	.but {
		display: flex;
		margin-top: 30px;
		margin-left: 100px;
	}

	.but>div {
		margin-right: 10px;
	}
</style>
