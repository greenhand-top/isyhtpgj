<template>
	<div>
		<el-container>
			<el-header>
				<heads></heads>
			</el-header>
			<el-container>
				<el-aside width="160px">
					<utdm></utdm>
				</el-aside>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import heads from '../components/head/head.vue';
	import utdm from '../components/utdm/utdm.vue';
	export default {
		
		components: {
			heads,
			utdm
		}
	}
</script>

<style scoped>
	.el-header {
		padding: 0px;
		height: 47px;
		
	}
	.el-aside {
	
	}
	.el-main {
		margin-top: -13px;
		padding: 0;
	}
</style>
