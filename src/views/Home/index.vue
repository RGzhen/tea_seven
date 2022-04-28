<template>
	<div class="home">
		<div class="headers-container">
			<div class="headers-main">
				<Header />
				<ly-tab v-model="selectedId" :items="items" :options="options" @change="switchItem">
				</ly-tab>
			</div>
		</div>
		<section ref="wrapper" :key="key">
			<div class="content">
				<div v-for="item in newData" :key="item.id">
					<Swiper v-if="item.type === 'swiperList'" :swiperList="item.data"></Swiper>
					<Icons v-if="item.type === 'iconsList'" :iconsList="item.data"></Icons>
					<Notice v-if="item.type === 'noticeList'" :noticeList="item.data"></Notice>
					<Recommend v-if="item.type === 'recommendList'" :recommendList="item.data"></Recommend>
					<Ad v-if="item.type === 'adList'" :adList="item.data"></Ad>
					<Like v-if="item.type === 'likeList'" :likeList="item.data"></Like>
				</div>
			</div>
		</section>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Header from '../../components/header/index.vue'
	import Tabbar from '../../components/common/tabbar.vue'
	import Swiper from '@/components/swiper/index.vue'
	import Icons from '@/components/icons/index.vue'
	import Notice from '@/components/notice/index.vue'
	import Recommend from '@/components/recommend/index.vue'
	import Like from '@/components/like/index.vue'
	import Ad from '@/components/ad/index.vue'
	import BetterScroll from 'better-scroll'
	export default {
		name: 'home',
		components: {
			Header,
			Tabbar,
			Swiper,
			Icons,
			Notice,
			Recommend,
			Like,
			Ad
		},
		mounted() {
			this.getInitData()
		},
		data() {
			return {
				selectedId: 0,
				newData: [],
				items: [],
				key: 0,
				scrollBetter:'',
				oBetterScroll:'',
				options: {
					activeColor: '#00B7FF'
					// 可在这里指定labelKey为你数据里文字对应的字段名
				},
			}
		},
		methods: {
			switchItem(item, index) {
				this.$http.$axios({url:`api/index_list/${index}/data/1`}).then((res) => {
					console.log(res)
					if (index) {
						this.newData = Object.freeze(res);
						// this.key++
					} else {
						this.newData = Object.freeze(res.data);
						// this.key++
					}
					
					this.$nextTick(() => {
						console.dir(this.$refs.wrapper)
						this.oBetterScroll = new BetterScroll(this.$refs.wrapper, {
							movable: true,
							zoom: true,
							click:true,
							bounce:false
						})
					});
				})
			},
			getInitData() {
				this.$http.$axios({url:'api/index_list/0/data/1'}).then((res) => {
					let {
							topBar,
							data
					} = res;
					this.items = Object.freeze(topBar);
					this.newData = Object.freeze(data);
					this.$nextTick(() => {
						this.scrollBetter = new BetterScroll(this.$refs.wrapper, {
							movable: true,
							zoom: true,
							click:true,
							bounce:false
						})
					console.log(this.scrollBetter)
					})
				})
			}
		}
	}
</script>
<style scoped>
	.home {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}

	.headers-container {
		height: 2.426666rem;
		width: 100%;
	}

	.headers-main {
		position: fixed;
		top: 0;
		left: 0;
	}

	::v-deep .ly-tabbar {
		box-shadow: none;
		border-bottom: none;
	}

	section {
		flex: 1;
		overflow: hidden;
	}
</style>
