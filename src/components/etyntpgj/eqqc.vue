<template>
	<div id="#app">
		<div class="Ddiv1">
			<div>用户管理 > <span>角色列表</span></div>
		</div>
		<div class="Ddiv2">
			<div class="xdiv1">
				<div class="xdiv2">
					<el-button type="primary">新增角色</el-button>
				</div>
				<div class="Ddiv3">
					<el-table :header-cell-style="{background:'#ededed',color:'#606266',}" :data="tableData" style="width: 100%">
						<el-table-column prop="name" label="角色名称" >
						</el-table-column>
						<el-table-column>
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
				tableData:[{
					name: "超级管理员"
				},{
					name: "普通管理员"
				},{
					name: "普通管理员"
				},
				{
					name: "普通管理员"
				},
				{
					name: "普通管理员"
				}]
			}
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

	.xdiv2 {
		text-align: end;
		margin-right: 30px;
		line-height: 110px;
	}

	.pbsg {
		display: flex;
		justify-content: flex-end;
	}

	.pbsg>div {
		margin-right: 10px;
		color: #3399CC;
		cursor: pointer;
	}
	.Ddiv3{
		width: 96%;
		margin-left: 2%;
	}
</style>
