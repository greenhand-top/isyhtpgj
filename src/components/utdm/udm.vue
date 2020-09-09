<template>
	<div id="#app">
		<div class="Ddiv1">
			<div>首页</div>
		</div>
		<div class="Ddiv2">
			<div class="xdiv1">
				<div style="display: flex;">
					<div>
						名称<el-input style="width: 100%;" v-model="input2" placeholder="名称"></el-input>
					</div>
					<div>
						降序<el-input style="width: 100%;" v-model="input3" placeholder="降序"></el-input>
					</div>
					<div style="margin-top: 20px;">
						<el-button type="success" @click="whtss()">修改</el-button>
					</div>
				</div>
				<el-table :data="tableData">
					<el-table-column prop="id" label="序号">
					</el-table-column>
					<el-table-column prop="courseName" label="名称">
					</el-table-column>
					<el-table-column prop="courseDesc" label="">
					</el-table-column>
					<el-table-column prop="professional.id" label="">
					</el-table-column>
					<el-table-column prop="professional.professionalName" label="">
					</el-table-column>
					<el-table-column prop="professional.professionalDesc" label="">
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button @click="mmbw(scope.row.id,scope.$index)">删除</el-button>
							<el-button type="success" @click="whnt(scope.row,scope.row.id)">查看</el-button>
						</template>
					</el-table-column>
				</el-table>
				<div>
					<div class="xidv5">
						<el-input style="width: 100%;" v-model="input" placeholder="请输入内容"></el-input>
					</div>
				</div>
				<div class="rkwt">
					<el-button type="primary" @click="add">增加</el-button>
					<el-button type="success" @click="sjyq">查询</el-button>

				</div>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				input: "",
				input1: "",
				input2: "",
				input3: "",
				tableData: [],
				ids: 0,
				aa: ""


			}
		},
		methods: {
			//查询
			sjyq() {
				let sjyqs = this.tableData.filter((data) => {
					if (data.courseName == this.input) {

						return true
					}
				})
				this.tableData = sjyqs
			},
			//增加
			add() {
				this.$axios.post('http://139.9.169.87:8081/examsystem/addCourse?courseName=' + this.input + '&courseDesc=777' +
						'&professionalId=161', {},
						// {
						// 		params: {
						// 			"courseName": this.input,
						// 			"courseDesc": "777",
						// 			"professionalId":160
						// 		},
						// 	}, 
						{
							headers: {
								"Accept": "application/json",
								"Content-Type": "application/x-www-form-urlencoded"
							}
						})
					.then((res) => {
						if (res.data.success == "true") {
							this.$axios.get('http://139.9.169.87:8081/examsystem/getAllCourse')
								.then((ress) => {
									this.tableData = ress.data.data;
									this.tableData = this.tableData.slice(0, 7)


								})
								.catch((error) => {
									console.log(error);
								})
						}
						console.log(res.data.msg);

					})
					.catch((error) => {
						console.log(error);
					})
				this.input = "";

			},
			//删除
			mmbw(ids, index) {
				this.$axios.get('http://139.9.169.87:8081/examsystem/deleteCourse', {
						params: {
							//只要传个唯一的ID就会删除 
							id: ids
						}
					})
					.then((res) => {

						console.log(res.data.success);


					})
					.catch((error) => {
						console.log(error);
					})
				this.tableData.splice(index, 1)


			},
			//修改
			whnt(data, indexid) {
				this.ids = indexid
				this.input2 = data.courseName;
				this.input3 = data.courseDesc;
			},
			whtss() {
				this.$axios.post('http://139.9.169.87:8081/examsystem/updateCourse?courseName=' + this.input2 + '&courseDesc=' +
						this.input3 + '&professionalId=161' + '&id=' + this.ids , {}
						// {
						// 		params: {
						// 			"id":ids,
						// 			"courseName": this.input2,
						// 			"courseDesc": this.input2,
						// 			"professional": {
						// 				"professionalName": ".NET方向",
						// 				"professionalDesc": null
						// 			},
						// 			"professionalId":160
						// 		},
						// 	}
						, {
							headers: {
								"Accept": "application/json",
								"Content-Type": "application/x-www-form-urlencoded",
							}
						})
					.then((res) => {
						if (res.data.success == "true") {
							this.$axios.get('http://139.9.169.87:8081/examsystem/getAllCourse')
								.then((ress) => {
									this.tableData = ress.data.data;
									this.tableData = this.tableData.slice(0, 7)


								})
								.catch((error) => {
									console.log(error);
								})
						}
						console.log(res.data.msg);

					})
					.catch((error) => {
						console.log(error);
					})
			},





		},
		//显示到表格
		mounted() {
			this.$axios.get('http://139.9.169.87:8081/examsystem/getAllCourse')
				.then((res) => {
					this.tableData = res.data.data;
					this.tableData = this.tableData.slice(0, 7)


				})
				.catch((error) => {
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

	.rkwt {
		text-align: center;
		line-height: 100px;
	}

	.xidv5 {
		width: 300px;
		margin-left: 50%;
		transform: translateX(-50%);
		margin-top: 40px;
	}
</style>
