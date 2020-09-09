<template>
	<div id="#app">
		<div class="Ddiv1">
			<div>会员管理 > <span class="colo">会员列表</span> </div>
		</div>
		<div class="Ddiv2">
			<div class="xdiv1">
				<div class="xdiv2">
					<div>筛选条件:</div>
					<div class="xdiv3">
						<div class="xxdiv1">
							<el-select v-model="value" placeholder="请选择" style="width: 100%;">
								<el-option v-for="item in optionss" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
						<div class="xxdiv2">
							<el-input v-model="input" placeholder="请输入搜索的内容"></el-input>
						</div>
					</div>
					<div><button class="but" @click="sjyq()">查询</button></div>
				</div>
				<div class="el-tddiv1">
					<el-table  ref="multipleTable" :header-cell-style="{background:'#ededed',color:'#606266'}" :data="tableData"
					tooltip-effect="dark" style="width: 100%">
						<el-table-column type="selection" width="100">
						</el-table-column>
						<el-table-column prop="name,oind" label="用户信息">
							<template slot-scope="scope">
								<div class="tddiv1">
									<div>
										<img src="../../assets/imgs/3.png">
									</div>
									<div class="eldiv1">
										<div>{{scope.row.name}}</div>
										<div>{{scope.row.oind}}</div>
									</div>
								</div>
							</template>
						</el-table-column>
						<el-table-column prop="rtsm" label="手机号码" >
						</el-table-column>
						<el-table-column prop="sket" label="可用余额" >
						</el-table-column>
						<el-table-column prop="sktkwwv" label="可用积分">
						</el-table-column>
						
						<el-table-column label="操作">
							<template  slot-scope="scope">
								<div class="eldiv2">
									<div @click="qqwhclic()">详情</div>
									<div @click="whttkwv(scope.$index,scope.row)">修改积分</div>
									<div @click="ycwg()"> 充值</div>
								</div>
							</template>
						</el-table-column>
					</el-table>
				</div>
				<div class="el-pag">
					<div class="block">
						<el-pagination background 
						:page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
						</el-pagination>
					</div>
				</div>
				<div class="Ddiv3" v-show="fas" @click.self="bqvkd()">
					<div class="xdiv5">
						<transition name="fe">
							<div class="xxidv3" v-show="bout">
								<div><img src="../../assets/imgs/6.png"></div>
								<div class="xxdiv4">
									<div class="pbsg1">
										<p @click="butt()">X</p>
									</div>
									<div class="Ddiv4">
										<div class="xxdiv5">
											<div v-for="(titems,index) in ovt" :key="index" @click="buts(index)" :class="{'cur':inde == index}">{{titems}}</div>
										</div>
										<div>
											<div class="xxdiv6" v-show="0 == inde">
												<div class="pbsg3">
													<h4>基本信息</h4>
													<p>姓名: 张三</p>
													<p>电话: 19912349873</p>
													<p>性别: 男</p>
													<p>生日: 1984-09-28</p>
												</div>
											</div>
											<div class="xxdiv6" v-show="1 == inde">
												<p class="pio">交易明细</p>
												<div class="xxdiv7">
													<el-table :data="tddata" style="width: 100%; font-size: 10px" :header-cell-style="{background:'#ededed',color:'#606266'}">
														<el-table-column prop="date" label="交易时间" width="140">
															<template slot-scope="scope"><span style="color: #3399CC;">{{scope.row.date}}</span></template>
														</el-table-column>
														<el-table-column prop="ysuj" label="订单编号" width="120">
															<template slot-scope="scope"><a href="#">{{scope.row.ysuj}}</a></template>
														</el-table-column>
														<el-table-column prop="iixj" label="消费金额" width="70">
														</el-table-column>
														<el-table-column prop="rqe" label="抵扣金额" width="80">
														</el-table-column>
														<el-table-column prop="wdgk" label="优惠金额" width="80">
														</el-table-column>
														<el-table-column prop="punh" label="实收款" width="70">
														</el-table-column>
													</el-table>
													<div class="xxxdiv1">
														<el-pagination background layout="prev, pager, next" :total="50">
														</el-pagination>
													</div>
												</div>
											</div>
											<div class="xxdiv6" v-show="2 == inde">
												<p class="pio">余额明细</p>
												<div class="xxdiv7">
													<el-table :data="tdedata" style="width: 100%; font-size: 10px" :header-cell-style="{background:'#ededed',color:'#606266'}">
														<el-table-column prop="date" label="交易时间" width="140">
															<template slot-scope="scope"><span style="color: #3399CC;">{{scope.row.date}}</span></template>
														</el-table-column>
														<el-table-column prop="iiex" label="消费金额" width="70">
														</el-table-column>
														<el-table-column prop="yofc" label="变动余额" width="70">
														</el-table-column>
														<el-table-column prop="txj" label="剩余余额" width="70">
														</el-table-column>
														<el-table-column prop="tkiy" label="备注">
														</el-table-column>
													</el-table>
													<div class="xxxdiv1">
														<el-pagination background layout="prev, pager, next" :total="50">
														</el-pagination>
													</div>
												</div>
											</div>
											<div class="xxdiv6" v-show="3 == inde">
												<p class="pio">积分明细</p>
												<div class="xxdiv7">
													<el-table :data="tdedata" style="width: 100%; font-size: 10px" :header-cell-style="{background:'#ededed',color:'#606266'}">
														<el-table-column prop="date" label="交易时间" width="140">
															<template slot-scope="scope"><span style="color: #3399CC;">{{scope.row.date}}</span></template>
														</el-table-column>
														<el-table-column prop="iiex" label="消费金额" width="70">
														</el-table-column>
														<el-table-column prop="yofc" label="变动余额" width="70">
														</el-table-column>
														<el-table-column prop="txj" label="剩余余额" width="70">
														</el-table-column>
														<el-table-column prop="tkiy" label="备注">
														</el-table-column>
													</el-table>
													<div class="xxxdiv1">
														<el-pagination background layout="prev, pager, next" :total="50">
														</el-pagination>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</transition>
					</div>
				</div>
				<!-- 用户积分 -->
				<div class="Ddiv3" v-show="bout1" @click.self="ettkbqbe()">
					<div class="xx-div1">
						<transition name="dee">
							<div class="xxdiv8" v-show="bout2">
								<div><img src="../../assets/imgs/7.png"></div>
								<div class="pbsg4">
									<div class="xxxdiv2">
										<div>调整用户积分</div>
										<div @click="ymfet" style=" cursor: pointer;">X</div>
									</div>
									<div class="x-div1">
										<div class="inotdiv">
											<div>积分: </div>
											<div class="pbsg">
												<el-input style="width:100%;" v-model="inputs" placeholder="请输入内容"></el-input>
											</div>
										</div>
										<div class="xxxdiv3">
											<el-radio-group v-model="radio1">
												<el-radio-button label="增加"></el-radio-button>
												<el-radio-button label="减少"></el-radio-button>
											</el-radio-group>
										</div>
										<div class="inotdiv">
											<div>备注: </div>
											<div class="pbsg">
												<el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="textarea">
												</el-input>
											</div>
										</div>

									</div>
									<div class="x-div2">
										<button class="butP" @click="ymfet()">取消</button>

										<button class="butB butP" @click="open1">保存</button>
									</div>

								</div>
							</div>
						</transition>
					</div>

				</div>
				<!-- 充值 -->
				<div class="Ddiv3" v-show="bout3">
					<div class="xx-div2">
						<transition name="dee">
							<div class="xxdiv8" v-show="bout4">
								<div><img src="../../assets/imgs/7.png"></div>
								<div class="xxdiv9">
									<div class="xixdiv">
										<div>充值</div>
										<div style="cursor: pointer;" @click="XXuduf()">X</div>
									</div>
									<div>
										<div><input placeholder="请输入充值金额" type="text" v-model="wow" class="inpt"></div>
										<div class="xx-div5">
											<div>
												根据您设置好的储值赠送计算规则计算出此次充值有如下赠送:
											</div>
											<div>
												赠送余额:500元赠送积分:10积分
											</div>
											<div>
												赠送优惠券:10元优惠券x1，20元优惠券x1，30优惠券×2
											</div>
										</div>
									</div>
									<div class="ovh">
										<div class="xovh">
											<div>支付明细</div>
											<div>请在下方选择支付方式</div>
										</div>
									</div>
									<div class="IMS5">
										<img width="530px" height="240px" src="../../assets/imgs/9.png">
									</div>
									<div class="xx-div6">
										<button class="butP" @click="ycwgbcie()">取消</button>

										<button class="butB butP" @click="open2()">确认充值</button>
									</div>
								</div>
							</div>
						</transition>
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
				wow: "",
				textarea: "",
				radio1: "增加",
				inputs: "",
				value: "",
				optionss: "",
				input: "",
				tableData: [],
				bout: false,
				bout1: false,
				bout2: false,
				bout3: false,
				bout4: false,
				ovt: ["基本信息", "交易明细", "余额明细", "积分明细"],
				inde: 0,
				fas: false,
				indeff:0,
				tddata:[],
				tdedata:[]
			}
		},
		methods: {
			buts(index) {
				this.inde = index
			},
			//详情的X 
			butt() {
				this.bout = !this.bout;
				setTimeout(() => {
					this.fas = !this.fas
				}, 800);
			},
			//详情的透明层
			bqvkd() {
				this.fas = false;
				setTimeout(() => {
					this.bout = !this.bout
				}, 0);
			},
			//详情
			qqwhclic() {
				this.fas = true;
				this.bout = !this.bout;
				


			},
			//关闭修改积分
			ettkbqbe() {
				this.bout1 = false
				this.bout2 = false;
			},
			//打开修改积分界面
			whttkwv(index) {
				this.bout1 = true;
				this.bout2 = true;
				this.indeff = index
			},
			//在修改积分界面中打开详情界面
			ymfet() {
				this.bout1 = false;
				this.bout2 = false
				this.qqwhclic();

			},
			//修改积分中的保存
			open1() {
				this.$message({
					message: "修改成功",
					type: 'success'
				});
				this.bout1 = false;
				this.bout2 = false;
				this.tableData[this.indeff].sktkwwv = this.inputs
				this.inputs = ''
				
			},
			//打开充值界面
			ycwg() {
				this.bout3 = true;
				this.bout4 = true;
			},
			//充值取消
			ycwgbcie() {
				this.bout3 = false;
				this.bout4 = false;
			},
			//充值界面的X
			XXuduf() {
				this.bout3 = false;
				this.bout4 = false
				this.qqwhclic();
			},
			open2() {
				this.$message({
					message: "充值成功",
					type: 'success'
				});
				this.bout3 = false;
				this.bout4 = false
			},
			sjyq(){
				let newprr = this.tableData.filter((table)=>{
					if(table.rtsm === this.input){
						
						return true
					}
				});
				this.tableData = newprr
				
			}
			

		},
		mounted() {
			this.$axios.get('https://www.fastmock.site/mock/ead22d749f047224855f771e51bd8b19/spi/api', {
					params: {},
				}).then((res) => {
					this.optionss = res.data.ooptions;
					this.value = res.data.ooptions[2].label;
					this.tableData = res.data.tableData;
					this.tddata = res.data.tddata
					this.tdedata = res.data.tdedata
				})
				.catch(error => {
					console.log(error);
				})
		}
	}
</script>

<style scoped>
	.ovh {
		width: 525px;
		height: 140px;
		overflow: hidden auto;
		margin-left: 10px;
	}

	.xovh {
		width: 525px;
		height: 220px;
		background: #FFFFFF;
	}

	.xovh>div:nth-child(1) {
		padding-left: 20px;
		padding-top: 10px;
		border-bottom: 1px solid #CCCCCC;
		padding-bottom: 10px;
	}

	.xovh>div:nth-child(2) {
		color: #ccc;
		text-align: center;
		line-height: 100px;
	}

	.xx-div6 {
		text-align: center;
	}

	.IMS5 {
		margin-top: 10px;
		text-align: center;
	}

	.fe-enter {
		transform: translateX(1100px);
	}

	.fe-enter-to {
		transform: translateX(0);
	}

	.fe-enter-active {
		transition: all 1s;
	}

	.fe-leave {
		transform: translateX(0);
	}

	.fe-leave-to {
		transform: translateX(1100px);
	}

	.fe-leave-active {
		transition: all 1s;
	}


	.dee-enter {
		transform: translateX(-1100px);
	}

	.dee-enter-to {
		transform: translateX(0);
	}

	.dee-enter-active {
		transition: all .8s;
	}

	.dee-leave {
		transform: translateX(0);
	}

	.dee-leave-to {
		transform: translateX(-1000px);
	}

	.dee-leave-active {
		transition: all .8s;
	}

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

	.colo {
		color: #000;
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
		display: flex;
		align-items: center;
		padding-top: 20px;
		padding-left: 20px;
	}

	.xdiv2>div {
		margin-right: 20px;
	}

	.xdiv3 {
		display: flex;
	}

	.xxdiv1 {
		width: 100px;
	}

	.xxdiv2 {
		width: 200px;
	}

	.but {
		border: none;
		background-color: rgba(238, 144, 60, 1);
		color: #FFFFFF;
		padding: 10px;
		width: 60px;
		border-radius: 10px;
		cursor: pointer;
		outline: none;
	}

	.but:hover {
		opacity: 0.9;
	}

	.tddiv1 {
		display: flex;
		align-items: center;

	}
	.eldiv1>div{
	
	}
	.eldiv1 {
	
		padding-left: 10px;
	}

	.eldiv1>div:nth-child(2) {
		background: #dedede;
		border-radius: 10px;
		text-align: center;
		font-size: 14px;
	}

	.el-tddiv1 {
		border: 1px solid #CCCCCC;
		width: 100%;
		margin: 0 auto;
		margin-top: 20px;
	}

	.eldiv2 {
		display: flex;

	}

	.eldiv2>div {
		cursor: pointer;
		margin-right: 10px;
		color: #3399CC;
	}

	.el-pag {
		margin-left: 50%;
		transform: translateX(-50%);
		margin-top: 30px;
	}

	.Ddiv3 {
		width: 100%;
		height: 130%;
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(107, 107, 107, 0.6);
		z-index: 999;
	}

	.xdiv5 {
		width: 1020px;
		height: 680px;
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translateX(-50%);
		overflow: hidden;
	}

	.xx-div1 {
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translateX(-50%);
		overflow: hidden;
	}

	.xx-div2 {
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translateX(-50%);
		overflow: hidden;
	}

	.xxidv3 {
		width: 1020px;
		height: 680px;
		display: flex;
		background: #FFFFFF;
	}

	.xxdiv4 {
		width: 100%;
	}

	.pbsg1 {
		width: 100%;
		height: 50px;
		border-bottom: 1px solid #CCCCCC;
		line-height: 50px;
	}

	.pbsg1>p {
		text-align: end;
		margin-right: 10px;
		cursor: pointer;
	}

	.Ddiv4 {
		display: flex;
	}

	.xxdiv5 {
		width: 100px;
		height: 630px;
		background: rgba(242, 242, 242, 1);


	}

	.xxdiv5>div:nth-child(1) {
		margin-top: 100px;
	}

	.xxdiv5>div {
		width: 100%;
		text-align: center;
		height: 60px;
		line-height: 60px;
		cursor: pointer;
	}

	.cur {
		background: #FFFFFF;
		color: #F9D237;
	}

	.pbsg3 {
		margin-top: 30px;
		margin-left: 50px;
	}

	.pbsg3>p {
		margin-top: 30px;
	}

	.xxdiv7 {
		margin-top: 20px;
		margin-left: 20px;
	}

	.pio {
		padding-top: 20px;
		margin-left: 20px;
	}

	.xxxdiv1 {
		margin-top: 200px;
		margin-left: 200px;
	}

	.pbsg4 {
		width: 546px;
		height: 429px;
		background: #FFFFFF;
		margin-left: 30px;
	}

	.xxdiv8 {
		display: flex;
	}

	.xxxdiv2 {
		display: flex;
		width: 100%;
		height: 60px;
		line-height: 60px;
		border-bottom: 1px solid #CCCCCC;
	}

	.xxxdiv2>div:nth-child(1) {
		margin-left: 30px;

	}

	.xxxdiv2>div:nth-child(2) {
		color: #999999;
		margin-left: 70%;
	}

	.xxxdiv3 {
		margin-top: 10px;
		margin-left: 95px;
	}

	.inotdiv {
		display: flex;
		margin-top: 30px;
		margin-left: 50px;
		line-height: 50px;
	}

	.pbsg {
		margin-left: 10px;
		width: 400px;
	}

	.x-div2 {
		text-align: center;

	}

	.butP {
		width: 70px;
		height: 30px;
		background-color: #FFFFFF;
		border: none;
		border: 1px solid #CCCCCC;
		margin-right: 10px;
		margin-top: 30px;
		cursor: pointer;
		outline: none;
		border-radius: 5px;
	}

	.butB {
		background: #EE903c;
		color: #FFFFFF;
	}

	.xxxdiv3 {
		margin-top: 10px;
		margin-left: 95px;
	}

	.x-div1 {
		border-bottom: 1px solid #CCCCCC;
		padding-bottom: 20px;
	}

	.inotdiv {
		display: flex;
		margin-left: 50px;
		line-height: 80px;
	}

	.xxdiv9 {
		width: 546px;
		height: 728px;
		background: #eee;
		margin-left: 30px;
	}


	.xixdiv {
		display: flex;
		height: 60px;
		border-bottom: 1px solid #CCCCCC;
		line-height: 60px;
		background: #FFFFFF;
	}

	.xixdiv>div {
		margin-left: 30px;
	}

	.xixdiv>div:nth-child(2) {
		margin-left: 450px;
		color: #CCCCCC;
		cursor: pointer;
		font-size: 20px;
	}

	.xxdiv9>div:nth-child(2) {
		width: 100%;
		height: 200px;
		background: #eee;
	}

	.inpt {
		width: 95%;
		margin-left: 10px;
		height: 50px;
		border: none;
		border: 1px solid #f00;
		border-radius: 5px;
		background: none;
		margin-top: 20px;
		text-align: center;
		padding: 1px 0px 1px 0px;
		box-sizing: border-box;
		outline-style: none;
	}

	.xx-div5 {
		margin-top: 10px;
		margin-left: 40px;
		font-size: 14px;
	}

	.xx-div5>div {
		margin-bottom: 10px;
	}
</style>
