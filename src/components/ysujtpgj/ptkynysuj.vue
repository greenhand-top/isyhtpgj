<template>
	<div id="#app">
		<div class="Ddiv1">
			<div>订单管理 > <span>商品订单</span></div>
		</div>
		<div class="Ddiv2">
			<div class="xdiv1">
				<div class="Ddiv3">
					<div>
						<el-button type="success">全部订单(1000)</el-button>
					</div>
					<div>
						<el-button>待付款(1000)</el-button>
					</div>
					<div>
						<el-button>待发货(1000)</el-button>
					</div>
					<div>
						<el-button>已发货(1000)</el-button>
					</div>
					<div>
						<el-button>已完成(1000)</el-button>
					</div>
					<div>
						<el-button>已关闭(1000)</el-button>
					</div>
				</div>
				<div class="Ddiv3">
					<div class="block">
						<el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
						</el-date-picker>
					</div>
					<div class="xdiv2">
						<div>
							<el-select style="width: 100px;" v-model="value" placeholder="请选择">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
						<div>
							<el-input v-model="input" placeholder="请输入搜索内容"></el-input>
						</div>
					</div>
					<div>
						<el-button type="warning">查询</el-button>
					</div>
				</div>
				<div class="Ddiv4">
					<el-table :cell-style="{'text-align':'center'}" :data="tableDatalh" :header-cell-style="{background:'#ededed',color:'#606266','text-align':'center'}"
					border style="width: 100%">
						<el-table-column prop="name" label="订单编号">
						</el-table-column>
						<el-table-column prop="oind" label="入离时间">
						</el-table-column>
						<el-table-column prop="rtsm" label="房型/房号">
						</el-table-column>
						<el-table-column prop="sket" label="顾客信息">
						</el-table-column>
						<el-table-column prop="sktkwwv" label="实付金额">
						</el-table-column>
						<el-table-column prop="wte" label="订单状态">
						</el-table-column>
						<el-table-column label="操作">
							<div class="xdiv4">
								<span>确认入住</span>
								<span>拒单</span>
								<span>查看订单</span>
							</div>
						</el-table-column>
					</el-table>
				</div>
				<div class="Ddiv5">
					<div class="block">
						<el-pagination background 
						:page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
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
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value3: '',
				value1: '',
				value2: '',
				tableDatalh:[],
				value:"",
				input:"",
				handleCurrentChange:"",
			

			}
		},
		mounted() {
			this.$axios.get('https://www.fastmock.site/mock/ead22d749f047224855f771e51bd8b19/spi/api', {
					params: {},
				}).then((res) => {
					this.tableDatalh = res.data.tableDatalh
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

	.Ddiv3 {
		display: flex;
		margin-left: 30px;
		padding-top: 20px;
	}

	.Ddiv3>div {
		margin-right: 30px;
	}

	.xdiv2 {
		display: flex;
	}

	.Ddiv4 {
		margin: 30px;
	}

	.xdiv4 {
		color: #42B983;


	}

	.xdiv4>span {
		margin-right: 20px;
		cursor: pointer;
	}
	.Ddiv5{
		text-align: center;
	}
</style>
