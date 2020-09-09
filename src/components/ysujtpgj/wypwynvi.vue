<template>
	<div id="#app">
		<div class="Ddiv1">
			<div>客户管理 > <span>住宿记录</span></div>
		</div>
		<div class="Ddiv2">
			<div class="xdiv1">
				<div class="Ddiv3">
					<div>
						<div class="block">
							<span class="demonstration">入离日期 : </span>
							<el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
							</el-date-picker>
						</div>
					</div>
					<div>
						<div>
							<el-input v-model="input" placeholder="请输入姓名/手机号/房号"></el-input>
						</div>
						<div>
							<el-button>搜索</el-button>
						</div>
					</div>
					<div>
						<el-select v-model="value" placeholder="请选择">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
				</div>
				<div class="Ddiv4">
					<el-table ref="multipleTable" :header-cell-style="{background:'#ededed',color:'#606266',}" :data="tableDatadg" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
						<el-table-column type="selection" width="55">
						</el-table-column>
						<el-table-column prop="name" label="房型名称">
						</el-table-column>
						<el-table-column prop="oind" label="房型名称">
						</el-table-column>
						<el-table-column prop="rtsm" label="房型名称">
						</el-table-column>
						<el-table-column prop="sket" label="房型名称">
						</el-table-column>
						<el-table-column prop="sktkwwv" label="房型名称">
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
				value:"",
				value1: '',
				value2: '',
				input: '',
				options: [{
					value: '选项1',
					label: '导出选中'
				}, {
					value: '选项2',
					label: '导出所有'
				}],
				tableDatadg:[],
				handleSelectionChange:""
			}
		},
		mounted() {
			this.$axios.get('https://www.fastmock.site/mock/ead22d749f047224855f771e51bd8b19/spi/api', {
					params: {
						id: 123456,
						name: "fe"
					},
				}).then((res) => {
					this.tableDatadg = res.data.tableDatadg
				})
				.catch(error => {
					console.log(error);
				});
				console.log(this.$route.params);

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
		padding-top: 20px;
		margin-left: 30px;
		position: relative;

	}

	.Ddiv3>div {
		display: flex;
		margin-right: 20px;
	}

	.Ddiv3>div:nth-child(3) {
		position: absolute;
		right: 20px;
	}
	.Ddiv4{
		width: 96%;
		margin-left: 2%;
		padding-top: 40px;
	}
</style>
