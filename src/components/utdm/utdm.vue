<template>
	<div class="app">
		<div v-for="(titmes,index) in indexs" :key="index">
			<div class="xdiv1">{{titmes.name}}</div>
			<div class="xdiv2">
				<div v-for="(xtitmses) in titmes.children" :key="xtitmses.id" @click="but(xtitmses.id)">
					<router-link  :to="xtitmses.path" tag="div" class="pbsg" ><i class="el-icon-picture-outline"></i>{{xtitmses.name}}
					</router-link>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				indexs: "",
				curid: 0
			}
		},
		methods: {
			but(indexss) {
				this.curid = indexss;
			}
		},
		mounted() {
			this.$axios.get("https://www.fastmock.site/mock/ead22d749f047224855f771e51bd8b19/spi/api", {
					params: {}
				})
				.then((res) => {
					this.indexs = res.data.cate;

				})
				.catch((error) => {
					console.log(error);
				})
		}

	}
</script>
<style scoped>
	.app {
		border-width: 0px;
		position: absolute;
		left: 0px;
		top: 50px;
		width: 160px;
		height: 910px;
		background: inherit;
		background-color: rgba(255, 255, 255, 1);
		box-sizing: border-box;
		border-width: 1px;
		border-style: solid;
		border-color: rgba(242, 242, 242, 1);
		border-left: 0px;
		border-top: 0px;
		border-bottom: 0px;
		border-radius: 0px;
		border-top-left-radius: 0px;
		border-top-right-radius: 0px;
		border-bottom-right-radius: 0px;
		border-bottom-left-radius: 0px;
		box-shadow: none;
	}

	.xdiv1 {
		color: #999;
		margin-left: 30px;
	}

	.xdiv2 {
		margin-top: 15px;
		margin-bottom: 15px;
	}

	.pbsg {
		width: 116px;
		height: 35px;
		border-radius: 20px;
		line-height: 35px;
		color: #363636;
		margin-left: 35px;
		cursor: pointer;
	}

	.pbsg>i {
		padding: 5px;
	}

	.router-link-active{
		background-color: rgba(255, 248, 232, 1);
		color: rgb(238, 144, 60);

	}
</style>
