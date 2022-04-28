<template>
		<div class='recommend'>
			<p></p>
			<Card></Card>
			<ul>
				<li v-for='(item,index) in recommendList' :key='index'>
					<h2>
						<img  v-lazy="item.imgUrl" alt="">
					</h2>
					<div>
						<h3>{{item.name}}</h3>
						<p>{{item.content}}</p>
						<div class='price'>
							<span>¥</span>
							<b>{{item.price}}</b>
						</div>
					</div>
				</li>
			</ul>
		</div>
</template>

<script>
	import Card from '@/components/card/index.vue'
	export default {
		name: 'recommend',
		components: {
			Card
		},
		props:{
				recommendList:Array
		},
		mounted(){
				console.log(this.recommendList)
		}
	}
</script>

<style scoped>
	.recommend {
		background: #fff;
		padding-bottom: 0.2rem;
	}
	.recommend p {
		height: 0.4rem;
		background: #f5f5f5;
	}
	.recommend ul li {
		position: relative;
	}

	.recommend ul li h2 {
		text-align: center;
	}

	.recommend ul li img {
		width: 9.6rem;
		height: 3.84rem;
		border-radius: 12px;
	}

	.recommend ul li>div {
		position: absolute;
		right: 0;
		top: 0;
	}

	.recommend ul li>div {
		position: absolute;
		right: 0;
		top: 0;
		display: flex;
		flex-direction: column;
		padding: 0.533333rem;
	}

	.recommend ul li>div h3 {
		font-size: 12px;
	}

	.recommend ul li>div p {
		font-size: 0.426666rem;
	}

	.price {
		margin-top: 0.666666rem;
		text-align: right;
		color: red;
	}

	.price span {
		font-size: 0.373333rem;
	}
</style>
