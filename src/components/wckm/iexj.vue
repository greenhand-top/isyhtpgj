<template>
	<div id="#app">
		<div class="Ddiv1">
			<div>账务明细 > <span>消费记录</span></div>
		</div>
		<div class="Ddiv2">
			<div class="xdiv1">
				<div class="Ddiv3">
					<div>
						<div class="block">
							<el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
							</el-date-picker>
						</div>
					</div>
					<div>
						<el-select v-model="value3" placeholder="全部类型">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
					<div class="xdiv2">
						<div>
							<el-select style="width:100px;" v-model="value4" placeholder="手机号">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
						<div>
							<el-input v-model="input" placeholder="请输入内容"></el-input>
						</div>
					</div>
					<div class="xdiv3">
						<div>
							<el-button>默认按钮</el-button>
						</div>
						<div>
							<el-button type="primary">主要按钮</el-button>
						</div>
					</div>
				</div>
				<div class="Ddiv4">
					<el-table :data="tableDatatop" border style="width: 100%" :cell-style="{'text-align':'center'}" :header-cell-style="{background:'#ededed',color:'#606266','text-align':'center'}">
						<el-table-column prop="name,oind" label="用户信息">
							<template slot-scope="scope">
								<div class="tddiv1">
									<div>
										<img src="../../assets/imgs/3.png">
									</div>
									<div class="eldiv1">
										<div>{{scope.row.name}}</div>
										<div>{{scope.row.oind}}</div>
									</div>
								</div>
							</template>
						</el-table-column>
						<el-table-column prop="rtsm" label="充值金额" width="180">

						</el-table-column>
						<el-table-column prop="sket" label="充值类型">

						</el-table-column>
						<el-table-column prop="sktkwwv" label="操作员">

						</el-table-column>
						<el-table-column label="操作">
							<div style="text-align: center;">
								<el-button>默认按钮</el-button>
							</div>
						</el-table-column>
					</el-table>
				</div>
				<div>
					<div class="block">
						<el-pagination background :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
:total="400">
						</el-pagination>
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
				value1: '',
				value2: '',
				options: [{
					value: '选项1',
					label: '会员充值'
				}, {
					value: '选项2',
					label: '商家充值'
				}],
				value3: '',
				input: '',
				tableDatatop: [],
				value4:""

			}
		},
		mounted() {
			this.$axios.get('https://www.fastmock.site/mock/ead22d749f047224855f771e51bd8b19/spi/api', {
					params: {},
				}).then((res) => {
					this.tableDatatop = res.data.tableDatatop
				})
				.catch(error => {
					console.log(error);
				})
		}

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
	}

	.Ddiv1>div span {
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

	.Ddiv3 {
		display: flex;
		padding-top: 20px;
		margin-left: 30px;
		position: relative;
	}

	.Ddiv3>div {
		margin-right: 30px;
	}

	.Ddiv4 {
		margin-left: 30px;
		margin-right: 40px;
		margin-top: 30px;
		padding-bottom: 20px;
	}


	.xdiv2 {
		display: flex;
	}

	.xdiv3 {
		display: flex;
		position: absolute;
		right: 0px;

	}

	.xdiv3>div {
		margin-right: 10px;
	}

	.tddiv1 {
		display: flex;
		align-items: center;
		justify-content: center;

	}

	.eldiv1 {
		padding-left: 10px;
	}

	.eldiv1>div:nth-child(2) {
		background: #dedede;
		border-radius: 10px;
		text-align: center;
		font-size: 14px;
	}

	.block {
		text-align: center;
	}
</style>
