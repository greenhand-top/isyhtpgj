<template>
	<div id="#app">
		<div class="Ddiv1">
			<div>会员管理 > <span>积分设置</span></div>
		</div>
		<div class="Ddiv2">
			<div class="xdiv1">
				<div class="xxdiv1">
					<div>积分赠送规则</div>
					<div>
						<el-checkbox-group class="boxdiv" v-model="form.type">
							<div>
								<div>
									<el-checkbox label="首页注册登录,可获得积分" name="type"></el-checkbox>
								</div>
								<div>
									<el-input placeholder="请输入内容" size="small  " v-model="inputfg" :disabled="true">
									</el-input>

								</div>

							</div>
							<div>
								<div>
									<el-checkbox label="每笔消费1元即可获得积分" name="type"></el-checkbox>
								</div>
								<div>
									<el-input placeholder="请输入内容" size="small  " v-model="inputg" :disabled="true">
									</el-input>
								</div>

							</div>
							<div>
								<div>
									<el-checkbox label="每充值1无即可获得积分" name="type"></el-checkbox>
								</div>

								<div>
									<el-input placeholder="请输入内容" size="small  " v-model="inputg" :disabled="true">
									</el-input>
								</div>
							</div>
						</el-checkbox-group>
					</div>
				</div>
				<div class="xxdiv1">
					<div>积分抵扣规则</div>
					<div class="x-div1">
						<div>
							<el-radio v-model="radio" label="1">不使用积分抵扣</el-radio>
						</div>
						<div class="inpt">
							<div>
								<el-radio v-model="radio" label="2">使用积分抵扣</el-radio>
							</div>
							<div v-show="radio == '2'">
								<el-input placeholder="100" size="small  " v-model="inpyt"></el-input>
							</div>
							<div v-show="radio == '2'">积分=1元</div>
						</div>
						<div class="inpt1" v-show="radio == '2'">
							<div>
								<el-checkbox v-model="checked">单次消费最多使用</el-checkbox>
							</div>
							<div class="inpt2">
								<div><input type="text" /></div>
								<div>积分</div>
							</div>
						</div>

					</div>
				</div>
				<div class="xdiv2">
					<div>积分过期规则</div>
					<div>
						<el-radio v-model="radio1" label="1">一直有效，永不过期</el-radio>
					</div>
					<div>
						<el-radio v-model="radio1" label="2">获得的所有成长值，在</el-radio>
						<el-select v-model="value" placeholder="请选择">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
						<span style="margin-left: 10px;">的12月31日过期</span>
					</div>
				</div>
				<div class="burs">
					<el-button @click="but()" style="width: 200px;" type="primary">保存</el-button>
				</div>

			</div>

		</div>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				form: {
					type: []
				},
				inputfg: 10,
				inputg: 1,
				radio: '1',
				radio1: '1',
				inpyt: "",
				checked: false,
				options: [{
					value: '选项1',
					label: '当年'
				}, {
					value: '选项2',
					label: '第二年'
				}, {
					value: '选项3',
					label: '第三年'
				}, {
					value: '选项4',
					label: '第四年'
				}, {
					value: '选项5',
					label: '第十年'
				}],
				value: '',
				

			}
		},
		methods: {
			but() {
				this.$message({
					message: '成功',
					type: 'success'
				});
			}
		},
	
	}
</script>

<style scoped>
	.Ddiv1 {
		height: 40px;
		border-bottom: 1px solid #ccc;
		line-height: 40px;
	}

	.Ddiv1>div {
		padding-left: 30px;
		font-size: 16px;
		color: #999999;
		color: #CCCCCC;
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

	.xxdiv1 {
		margin-right: 20px;
		margin-left: 40px;
		padding-top: 20px;
		height: 240px;

	}

	.x-div1 {
		margin-top: 20px;
	}

	.x-div1>div {
		margin-top: 10px;
	}

	.boxdiv>div {
		width: 400px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 16px;
		margin-top: 30px;
	}

	.boxdiv {
		border-bottom: 1px solid #eee;
		padding-bottom: 30px;

	}

	.inpt {
		display: flex;
		align-items: center;

		height: 40px;
	}

	.inpt>div {
		margin-right: 10px;
	}

	.inpt1 {
		display: flex;
		align-items: center;
		margin-left: 30px;
	}

	.inpt2 {
		display: flex;
		border: 1px solid #eee;
		border-radius: 5px;
		margin-left: 10px;
	}

	.inpt2>div:nth-child(1)>input {
		height: 25px;
		width: 100px;
		border: none;
		background: none;

	}

	.inpt2>div:nth-child(2) {
		width: 40px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		background: #EEEEEE;

	}

	.xdiv2 {
		margin-left: 40px;
		margin-right: 40px;
		border-bottom: 1px solid #CCCCCC;
		padding-bottom: 100px;
	}

	.burs {
		text-align: center;
		margin-top: 100px;
	}
</style>
