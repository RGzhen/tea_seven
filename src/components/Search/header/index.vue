<template>
	<header class="headers">
		<div class="back" @click="changePage">
			<i class="iconfont icon-guanbi"></i>
		</div>
		<div class="header-tab">
			<form action="" onsubmit="return false" @keyup.enter="goSearchList">
				<i class="iconfont icon-sousuo_o"></i>
				<input type="search" v-model="keyWord" placeholder="搜索您喜欢的产品...">
			</form>
		</div> 
		<div class="header-search" @click="goSearchList">
			<span>搜索</span>
		</div>
	</header>
</template>

<script>
	export default {
		data() {
			return {
				keyWord: this.$route.query.key || "",
				historyList:[]
			}
		},
		methods: {
			changePage() {
				this.$router.back()
			},
			goSearchList() {
				if (!this.keyWord) return;
				if(!localStorage.getItem('arrList')){
						localStorage.setItem('arrList','[]')
				}else{
					this.historyList = JSON.parse(localStorage.getItem('arrList'))
				}
					this.historyList.unshift(this.keyWord)
					let arr = new Set(this.historyList)
					localStorage.setItem('arrList',JSON.stringify(Array.from(arr)))
					if(this.keyWord === this.$route.query.key) return ;
					this.$router.push({
						path:'/searchList',
						query:{
							key:this.keyWord
						}
					})
			}
		}
	}
</script>

<style scoped>
	.headers {
		display: flex;
		/* 	justify-content: space-around; */
		height: 1.173333rem;
		align-items: center;
		background: #00b7ff;
		line-height: 1.173333rem;
	}

	.headers .back {
		height: 1.173333rem;
		width: 1.173333rem;
		line-height: 1.173333rem;
		text-align: center;
	}

	.back i {
		font-size: 0.693333rem;
		color: #fff;
		font-weight: 700;
	}

	.header-tab {
		width: 7.653333rem;
		/* background: #fff; */
	}

	.header-tab form {
		height: 0.8rem;
		width: 7.653333rem;
		background: #fff;
		display: flex;
		align-items: center;
		border-radius: 0.8rem;
	}

	input {
		width: 6.72rem;
		height: 0.533333rem;
		padding: 0.133333rem;
		padding-left: 0;
	}

	.header-tab form i {
		font-size: 0.64rem;
	}

	.header-search {
		width: 1.173333rem;
		text-align: center;
	}

	.header-search span {
		font-size: 0.426666rem;
		color: #fff;
		font-weight: 700;
	}
</style>
