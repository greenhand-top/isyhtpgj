<template>
	<div id="#app">
		<div class="Ddiv1">
			<div>客房管理 > <span>房号管理</span></div>
		</div>
		<div class="Ddiv2">
			<div class="xdiv1">
				<div class="Ddiv3">
					<div>
						<el-input v-model="input" placeholder="请输入内容"></el-input>
					</div>
					<div>
						<el-button type="warning">查询</el-button>
					</div>
					<div>
						<div>
							<el-button>批量上架</el-button>
						</div>
						<div>
							<el-button>批量下架</el-button>
						</div>
						<div>
							<el-button>批量删除</el-button>
						</div>
						<div>
							<div>
								<el-button type="primary">新增房型</el-button>
							</div>
						</div>
					</div>
				</div>
				<div class="Ddiv4">
					<el-table ref="multipleTable" :header-cell-style="{background:'#ededed',color:'#606266',}" :data="atableData"
					tooltip-effect="dark" style="width: 100%">
						<el-table-column type="selection">
						</el-table-column>
						<el-table-column prop="date" label="房型名称">
						</el-table-column>
						<el-table-column prop="name" label="售价">
						</el-table-column>
						<el-table-column prop="address" label="房间数量">
						</el-table-column>
						<el-table-column label="操作">
							<div class="pbsg">
								<div>编辑</div>
								<div>删除</div>
							</div>
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
				atableData: [],



			}
		},
		mounted() {
			this.$axios.get('https://www.fastmock.site/mock/ead22d749f047224855f771e51bd8b19/spi/api', {
					params: {},
				}).then((res) => {
					this.atableData = res.data.atableData
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
		padding-top: 30px;
		margin-left: 35px;
		position: relative;

	}

	.Ddiv3>div {
		margin-right: 10px;
	}

	.Ddiv3>div:nth-child(3) {
		display: flex;
		position: absolute;
		right: 10px;

	}

	.Ddiv3>div:nth-child(3)>div {
		margin-right: 10px;
	}

	.pbsg {
		display: flex;
		justify-content: center;

	}

	.pbsg>div {
		margin-right: 10px;
		color: #3399CC;
		cursor: pointer;
	}

	.Ddiv4 {
		width: 96%;
		margin-left: 2%;
		padding-top: 40px;
	}
</style>
