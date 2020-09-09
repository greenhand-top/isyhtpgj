<template>
	<div id="#app">
		<div class="Ddiv1">
			<div>客房管理 > <span>房态管理</span></div>
		</div>
		<div class="Ddiv2">
			<div class="xdiv1">
				<div class="Ddiv3">
					<div>
						<el-select v-model="value" placeholder="请选择房型">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
					<div>
						<div class="block">
							<el-date-picker v-model="value2" type="month" placeholder="选择月">
							</el-date-picker>
						</div>
					</div>
				</div>
				<div>
					<el-calendar v-model="value3">

					</el-calendar>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				value: '',
				value2: '',
				value3: "",
				options: [],
			


			}
		},
		mounted() {
			this.$axios.get('https://www.fastmock.site/mock/ead22d749f047224855f771e51bd8b19/spi/api', {
					params: {},
				}).then((res) => {
					this.options = res.data.options
				})
				.catch(error => {
					console.log(error);
				});

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
		margin-left: 40px;
	}

	.Ddiv3>div {
		margin-right: 20px;
	}
</style>
