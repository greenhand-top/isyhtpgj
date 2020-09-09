<template>
	<div id="#app">
		<div class="Ddiv1">
			<div>投诉建议管理 > <span>投诉建议</span></div>
		</div>
		<div class="Ddiv2">
			<div class="xdiv1">
				<div class="Ddiv3">
					<div class="xdiv2">
						<div class="xxdiv1">
							<div>
								<div>
									<el-select v-model="value" placeholder="请选择分类">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</div>
								<div>
									<el-input v-model="input" placeholder="投诉建议内容"></el-input>
								</div>
								<div>
									<el-input v-model="input1" placeholder="输入用户昵称"></el-input>
								</div>
							</div>
							<div>
								<div>
									<el-button type="primary">查询</el-button>
								</div>
								<div>
									<el-select style="width: 100px" v-model="value" placeholder="批量操作">
										<el-option v-for="item in optionss" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</div>
							</div>
						</div>
						<div class="xxdiv2">
							<el-table ref="multipleTable" :cell-style="{'text-align':'center','height':'100px'}" :header-cell-style="{background:'#ededed',color:'#606266','text-align':'center'}"
							border :data="dataymyr" tooltip-effect="dark" style="width: 100%">
								<el-table-column type="selection" width="55">
								</el-table-column>
								<el-table-column prop="date" label="提交时间">
								</el-table-column>
								<el-table-column prop="ysuj" label="内容" width="500px">
								</el-table-column>
								<el-table-column prop="iixj" label="提交">
								</el-table-column>
								<el-table-column prop="rqe" label="类型">
								</el-table-column>
								<el-table-column label="是否显示">
									<template slot-scope="scope">
										<el-switch v-model="scope.row.vuei" active-color="#13ce66" inactive-color="#ff4949">
										</el-switch>
									</template>
								</el-table-column>
								<el-table-column label="操作">
									<div class="xxdiv4">
										<div>回复</div>
										<div>删除</div>
									</div>
								</el-table-column>
							</el-table>
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
				value: "",
				options: [{
						value: "建议"
					},
					{
						value: "设诉"
					}
				],
				optionss: [{
						value: "删除"
					},
					{
						value: "建议"
					}
				],
				input: "",
				input1: "",
				dataymyr: []

			}
		},
		mounted() {
			this.$axios.get('https://www.fastmock.site/mock/ead22d749f047224855f771e51bd8b19/spi/api', {
					params: {},
				}).then((res) => {
					this.dataymyr = res.data.dataymyr
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

	.xxdiv2{
		width: 96%;
		margin-left: 2%;
	}
	.xxdiv1 {
		display: flex;
		height: 100px;
		line-height: 100px;
		position: relative;

	}

	.xxdiv1>div {
		display: flex;
		margin-left: 30px;
	}

	.xxdiv1>div:nth-child(2) {
		position: absolute;
		right: 30px;

	}

	.xxdiv1>div:nth-child(2)>div {
		margin-right: 20px;
	}
	.xxdiv4{
		display: flex;
		color: #42B983;
		justify-content: center;
	}
	.xxdiv4>div{
		margin-right: 10px;
		cursor: pointer;
	}
</style>
