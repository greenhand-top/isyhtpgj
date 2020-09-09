<template>
	<div id="#app">
		<div class="Ddiv1">
			<div>商品管理 > <span>商品列表</span></div>
		</div>
		<div class="Ddiv2">
			<div class="xdiv1">
				<div class="Ddiv3">
					<div class="xdiv2">
						<div>
							<div>输入搜索：</div>
							<div>
								<el-input v-model="input" placeholder="商品名称/商品货号"></el-input>
							</div>
						</div>
						<div>
							<div>商品分类：</div>
							<div>
								<el-select v-model="value" placeholder="请选择商品分类">
									<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</div>
						</div>
						<div>
							<div>上下架：</div>
							<div>
								<el-select v-model="value" placeholder="全部">
									<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</div>
						</div>
						<div class="xxdiv1">
							<div>
								<el-button>查询</el-button>
							</div>
							<div>
								<div>
									<el-button type="primary"> + 添加商品</el-button>
								</div>
								<div>
									<el-button>批量操作 <i class="el-icon-arrow-down"></i></el-button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="Ddiv4">
					<el-table :cell-style="{'text-align':'center'}" :header-cell-style="{background:'#ededed',color:'#606266','text-align':'center'}"
					border ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
						<el-table-column type="selection">
						</el-table-column>
						<el-table-column label="商品图片">
							<template><img src="../../assets/imgs/10.png"></template>
						</el-table-column>
						<el-table-column label="商品信息">
							<template>银色星芒刺绣网纱底裤一级分类=》二级分类</template>
						</el-table-column>
						<el-table-column label="价格/货号">
							<template>
								<div class="pbsg">价格：¥100.00</div>

								<div class="pbsg">货号：No86577</div>
							</template>
						</el-table-column>
						<el-table-column prop="a" label="标签">
							<template slot-scope="scope">
								上架：<el-switch v-model="scope.row.a" active-color="#13ce66" inactive-color="#ff4949">
								</el-switch>
							</template>
						</el-table-column>
						<el-table-column label="排序">
							<el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
						</el-table-column>
						<el-table-column label="销量">
							100
						</el-table-column>
						<el-table-column label="操作">
							<span class="pbsg1">编辑</span>
							<span class="pbsg1">删除</span>
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
				options: "",
				value: "",
				tableData: [{
					a: true
				}, {
					a: false
				}, {
					a: true
				}, {
					a: true
				}],
				num:1,
				handleSelectionChange:"",
				handleChange:""
			}
		},
		mounted() {
			this.$axios.get('https://www.fastmock.site/mock/ead22d749f047224855f771e51bd8b19/spi/api', {
					params: {},
				}).then((res) => {
					this.options = res.data.optionss
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

	.Ddiv1>div>span {
		color: #000000;
	}

	.Ddiv3 {
		height: 120px;
		margin-left: 20px;
		margin-right: 20px;
		padding-top: 20px;
	}

	.xdiv2 {
		background: #eee;
		height: 100%;
		display: flex;
		justify-content: space-around;

	}

	.xdiv2>div {
		display: flex;
		height: 60px;
		line-height: 60px;

	}

	.xxdiv1>div {
		margin-left: 20px;
	}

	.Ddiv4 {
		margin-left: 20px;
		margin-right: 20px;
		padding-top: 20px;
	}

	.pbsg {

		margin-top: 20px;
	}
	.pbsg1{
		margin-right: 10px;
		color: #42B983;
		cursor: pointer;
	}
</style>
