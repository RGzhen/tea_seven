<template>
	<div class="headers">
		<h1>
			<span>新干线</span>
		</h1>
		<div class="search" @click="goSearchPage">
			<span class="iconfont icon-sousuo_o"></span>
			<span>搜您喜欢的...</span>
		</div>
		<div class="right">
			<a href="#javascript;;"><span class=" iconfont icon-erji"> </span></a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		methods:{
			goSearchPage(){
				this.$router.push('/search')
			}
		}
	};
</script>

<style scoped>
	.headers {
		height: 1.173333rem;
		display: flex;
		background: #00b7ff;
		align-items: center;
	}

	.headers h1 {
		height: 1.6rem;
		width: 2.266666rem;
	}

	.headers h1 span {
		display: block;
		height: 1.6rem;
		line-height: 1.6rem;
		text-align: center;
		color: #fff;
		font-size: 0.613333rem;
		font-weight: 700;
		font-family: "bodoni mt";
	}

	.search {
		width: 6.56rem;
		height: 0.8rem;
		line-height: 0.8rem;
		background-color: #ffffff;
		border-radius: 12px;
		font-size: 0.4rem;
		display: flex;
	}
	.iconfont {
		font-size: 0.72rem;
	}
	.icon-erji{
		color: #FFFFFF;
	}
	.right {
		width: 44px;
		text-align: center;
		font-weight: 700;
	}
</style>
