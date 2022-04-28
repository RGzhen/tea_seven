<template>
	<div class="container">
		<Headers />
		<section>
			<div v-if="searchArr.length">
				<h2>
					<div class="iconfont icon-huo">
						<span> 历史记录</span>
					</div>
					<div class="clear" @click="clearHistory">清除历史记录</div>
				</h2>
				<ul class="history">
					<li v-for="(item,index) in searchArr" :key="index" @click="selectHistory(index)">{{item}}</li>
				</ul>
			</div>
			<div class="no_history" v-else>暂无搜索记录...</div>
		</section>
		<Tabbar></Tabbar>
	</div>
</template>
<script>
	import { MessageBox } from 'mint-ui';
	import Headers from '@/components/Search/header/index.vue'
	import Tabbar from '@/components/common/tabbar.vue'
	export default {
		name: '',
		components: {
			Headers,
			Tabbar
		},
		created() {
			this.searchArr = JSON.parse(localStorage.getItem('arrList')) || []
		},
		data() {
			return {
				searchArr: [],
				historyList:[]
			}
		},
		methods: {
			selectHistory(index){
				this.historyList = JSON.parse(localStorage.getItem('arrList')) || []
				console.log(this.historyList[index])
				this.$router.push({
					path:'/searchList',
					query:{
						key:this.historyList[index]
					}
				})
			},
			clearHistory() {
				MessageBox.confirm('确定执行此操作?').then(action => {
					if(action === 'confirm'){
						localStorage.removeItem('arrList')
						this.searchArr = [];
					}
				});
			}
		}
	}
</script>
<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		height: 100vh;
		overflow: hidden;
	}

	section {
		flex: 1;
		width: 8.933333rem;
		margin: 0 auto;
	}

	section h2 {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	section h2 .clear {
		font-size: 0.506666rem;
		color: #999999;
	}

	.icon-huo {
		color: red;
		font-size: 0.56rem;
		margin-block: 0.4rem;
	}

	.iconfont span {
		color: #333;
	}

	.history {
		display: flex;
		flex-wrap: wrap;
	}

	.history li {
		height: 0.8rem;
		line-height: 0.8rem;
		font-size: 0.426666rem;
		border: 0.026666rem solid #999;
		margin-bottom: 0.4rem;
		margin-right: 0.4rem;
		padding: 0 5px;
	}
	.no_history{
		font-size: 0.506666rem;
		text-align: center;
		color: #999;
	}
</style>
