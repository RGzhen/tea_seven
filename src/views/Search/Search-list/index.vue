<template>
	<div class="container">
		<div class="headers">
			<Header />
			<ul>
				<li v-for='(item,index) in searchList.data' :key='index' @click='changeTab(index)'>
					<div :class=' searchList.currentIndex == index ?"active":"" '>{{item.name}}</div>
					<div class='search-filter' v-if='index !=0 '>
						<i class='iconfont icon-xiangshang1' :class=' item.status == 1 ? "active" : ""'></i>
						<i class='iconfont icon-xiangxia1' :class=' item.status == 2 ? "active" : ""'></i>
					</div>
				</li>
			</ul>
		</div>
		<section ref="wrapper">
			<ul v-if='goodsList.length'>
				<li v-for='(item,index) in goodsList' :key='index'>
					<img v-lazy="item.imgUrl" alt="">
					<h3>{{item.name}}</h3>
					<div class='price'>
						<div>
							<span>¥</span>
							<b>{{item.price}}</b>
						</div>
						<div>立即购买</div>
					</div>
				</li>
			</ul>
			<h1 v-else>暂无数据...</h1>
		</section>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
	import Header from '@/components/Search/header/index.vue'
	import Tabbar from '@/components/common/tabbar.vue'
	import BetterScroll from 'better-scroll';
	export default {
		components: {
			Header,
			Tabbar
		},
		created() {
			this.getData()
		},
		data() {
			return {
				key: '',
				goodsList: [],
				searchList: {
					currentIndex: 0,
					data: [{
							name: '综合',
							key: 'zh'
						},
						{
							name: '价格',
							status: 0,
							key: 'price'
						},
						{
							name: '销量',
							status: 0,
							key: 'num'
						}
					]
				}
			}
		},
		methods: {
			getData() {
				this.$http.$axios({
					url: 'api/index_list/data/goods_list',
					data: {
						name: this.$route.query.key,
						...this.orderBy
					},
					method: 'post'
				}).then((res) => {
					this.goodsList = res || [];
					this.$nextTick(() => {
						new BetterScroll(this.$refs.wrapper, {
							movable: true,
							zoom: true
						})
					});
				})
			},
			changeTab(index) {
				console.log(index)
				this.searchList.currentIndex = index
				let item = this.searchList.data[index];
				this.searchList.data.forEach((item, i) => {
					if (i != index) {
						item.status = 0
					}
				})
				item.status = item.status === 1 ? 2 : 1;
				this.getData();
			}
		},
		computed: {
			orderBy() {
				let obj = this.searchList.data[this.searchList.currentIndex]
				let a = obj.status === 1 ? 'asc' : 'desc'
				return {
					[obj.key]: a
				}
			}
		},
		watch: {
			$route() {
				this.getData();
				console.log(11)
			}
		}
	}
</script>

<style scoped lang='scss'>
	.container {
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.headers ul {
		display: flex;
		justify-content: space-around;
		padding: 0.533333rem 0;
		font-size: 0.426666rem;
	}

	.headers ul li {
		display: flex;
		align-items: center;
	}

	.headers ul li>div {
		padding: 0 0.08rem;
	}

	.headers ul li .search-filter {
		display: flex;
		flex-direction: column;
	}

	section {
		flex: 1;
		overflow: hidden;

		ul {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			li {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				box-sizing: border-box;
				width: 50%;
				padding: 0.266666rem;
			}
		}
	}

	section ul li img {
		width: 4.533333rem;
		height: 4.533333rem;
	}

	section ul li img[lazy=loading] {
		background-color: #f7f7f7;
	}

	section ul li h3 {
		width: 100%;
		font-size: 0.373333rem;
		color: #222;
		font-weight: 400;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	section ul li .price {
		display: flex;
		justify-content: space-between;
		padding: 0.266666rem 0;
		width: 100%;
		font-size: 14px;
	}

	section ul li .price div:first-child span {
		font-size: 0.32rem;
		color: #b0352f;
	}

	section ul li .price div:first-child b {
		color: #b0352f;
		font-size: 0.426666rem;
	}

	section ul li .price div:last-child {
		padding: 0.08rem 0.16rem;
		color: #fff;
		background-color: #b0352f;
		border-radius: 0.16rem;
	}

	.active {
		color: red;
	}
</style>
