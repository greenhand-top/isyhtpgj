<template>
	<div id="#app">
		<div class="Ddiv1">
			<div>商品管理 > <span>商品分类</span></div>
		</div>
		<div class="Ddiv2">
			<div class="xdiv1">
				<el-table :data="tableData" style="width: 100%;margin-bottom: 20px;" row-key="id" >
					<el-table-column type="selection" width="55">
					</el-table-column>
					<el-table-column prop="date" label="分类名称">
					</el-table-column>
					<el-table-column prop="name" label="商品数量">
					</el-table-column>
					<el-table-column  label="操作">
						<div class="xdiv2">
							<div>编辑</div>
							<div>删除</div>
						</div>
					</el-table-column>
				</el-table>
			</div>

		</div>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				tableData: [{
					id: 1,
					date: '服装',
					name: '150',
					children: [{
						id: 31,
						date: '毛衣',
						name: '50',

					}, {
						id: 32,
						date: 'T恤',
						name: '20',

					}, {
						id: 33,
						date: '西装',
						name: '30',

					}, {
						id: 34,
						date: '配饰',
						name: '50',

					}]

				}, {
					id: 2,
					date: '配饰',
					name: '44',

				}],
			}
		},
		methods: {

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
	.xdiv2{
		display: flex;
	}
	.xdiv2>div{
		margin-right: 10px;
		cursor: pointer;
	}
	
</style>
