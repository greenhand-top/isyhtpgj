<template>
	<div id="#app">
		<div class="Ddiv1">
			<div>优惠券 > <span>优惠券管理</span></div>
		</div>
		<div class="Ddiv2">
			<div class="xdiv1">
				<div class="Ddiv3">
					<div>
						<el-select v-model="value" placeholder="全部类型">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
					<div>
						<el-select v-model="value" placeholder="全部状态">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
					<div>
						<el-input v-model="input" placeholder="优惠券名称"></el-input>
					</div>
					<div>
						<el-button type="primary">查询</el-button>
						<el-button>重置</el-button>
					</div>
				</div>
				<div class="Ddiv4">
					<div>
						<el-button type="primary"> + 新建</el-button>
					</div>
					<div>
						<el-button>批量投放</el-button>
					</div>
					<div>
						<el-button>批量删除</el-button>
					</div>
				</div>
				<div class="Ddiv5">
					<el-table ref="multipleTable" :data="tableDatafg" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
						<el-table-column type="selection">
						</el-table-column>
						<el-table-column prop="name" label="优惠券名称">
						</el-table-column>
						<el-table-column prop="oind" label="状态">
						</el-table-column>
						<el-table-column prop="rtsm" label="使用门槛">
						</el-table-column>
						<el-table-column prop="sket" label="发放总量">
						</el-table-column>
						<el-table-column prop="sktkwwv" label="已发放数">
						</el-table-column>
						<el-table-column prop="wte" label="已使用数">
						</el-table-column>
						<el-table-column prop="switch1" label="启用">
							<template slot-scope="scope">
								<div>
									<el-switch :active-value="1" :inactive-value="0" v-model="scope.row.switch1" active-color="#13ce66"
									inactive-color="#ff4949">
									</el-switch>
								</div>
							</template>
						</el-table-column>
						<el-table-column label="启用">

							<template>
								<div class="dis">
									<div>
										<el-button size="mini">编辑</el-button>
									</div>
									<div>
										<el-button size="mini">发放</el-button>
									</div>
								</div>

								<div class="dis">
									<div>
										<el-button size="mini" style="width: 56px; height: 28px; padding: 0;">领取列表</el-button>
									</div>
									<div>
										<el-button size="mini">删除</el-button>
									</div>
								</div>
							</template>


						</el-table-column>
					</el-table>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				input: '',
				options: [{
					value: '选项1',
					label: '代金券'
				}, {
					value: '选项2',
					label: '折扣券'
				}],
				optionss: [{
					value: '选项1',
					label: '未过期'
				}, {
					value: '选项2',
					label: '已过期'
				}],
				value: '',
				tableDatafg: [],
				handleSelectionChange:""
			}
		},
		mounted() {
			this.$axios.get('https://www.fastmock.site/mock/ead22d749f047224855f771e51bd8b19/spi/api', {
					params: {},
				}).then((res) => {
					this.tableDatafg = res.data.tableDatafg
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
	.Ddiv1>div>span{
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
		margin-left: 30px;
		position: relative;

	}

	.Ddiv3>div {
		margin-right: 20px;
		margin-top: 20px;
	}

	.Ddiv3>div:nth-child(4) {
		position: absolute;
		right: 10px;
	}

	.Ddiv4 {
		display: flex;
		margin-left: 30px;
		margin-top: 20px;
	}

	.Ddiv4>div {
		margin-right: 10px;
	}
	.dis{
		display: flex;
		font-size: 12px;
		margin-bottom: 10px;
	}
	.dis>div{
		margin-right: 20px;
	}
</style>
