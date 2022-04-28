<template>
	<div class="container">
		<header v-show ="show">
			<div class="back">
				<i class="iconfont icon-guanbi"></i>
			</div>
			<div class="search">
				<i class="iconfont icon-sousuo_o"></i>
				<span>搜您喜欢的...</span>
			</div>
			<div class="home">
				<i class="iconfont icon-home"></i>
			</div>
		</header>
		<section>
			<div class="list-l" ref="left">
				<ul class="menu">
					<li v-for="(item,index) in menuList" :class="{active: currentIndex === index}" :key="index" @click="handleTab(index)">{{item}}</li>
				</ul>
			</div>
			<div class="menu_right" ref="right">
				<div>
					<div class="menu_item" v-for="(item) in arrList" :key="item.id">
						<div class="title">
							<span>{{item.name}}</span>
						</div>
						<ul class="menu_shop" v-for="(it,index) in item.data" :key="index">
							<li v-for="(i) in it.list" :key="i.id">
								<img :src="i.imgUrl" alt="">
								<div>{{i.name}}</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		<Tabbar />
	</div>
</template>

<script>
	import Tabbar from '../../components/common/tabbar.vue';
	import BetterScroll from 'better-scroll'
	export default {
		name: 'list',
		components: {
			Tabbar
		},
		data(){
			return {
				menuList:[],
				arrList:[],
				rightScroll:'',
				allHeight:[],
				show:true,
				scrollY:0
			}
		},
		computed:{
			currentIndex(){
				return this.allHeight.findIndex((item,index)=>{
						return item <= this.scrollY && this.scrollY < this.allHeight[index +1]
				})
			}
		},
	async	created(){
			let res = await this.$http.$axios({method:'get',url:'/api/goods/list'})
			this.menuList = res.map(item => item.name);
			this.arrList = res
			this.$nextTick(()=>{
				new BetterScroll(this.$refs.left, {
					bounce: false,
					click:true
				})
				this.rightScroll = new BetterScroll(this.$refs.right, {
					movable: true,
					zoom: true,
					bounce:false,
					probeType:3
				})
				let menuList = document.getElementsByClassName('menu_item');
				let currentHeight = 0;
				this.allHeight.push(currentHeight)
				Array.from(menuList).forEach(v=>{
					this.allHeight.push( currentHeight += v.clientHeight)
				})
				console.log(this.allHeight)
				this.rightScroll.on('scroll',(pos)=>{
					this.scrollY = Math.abs(pos.y)
					if(Math.abs(pos.y) >= 50){
						this.show = false;
					}else{
						this.show = true;
					}
				})
			})
		},
		methods:{
			handleTab(index){
				// this.currentIndex = index;
				this.rightScroll.scrollTo(0,-this.allHeight[index],500)
			}
		}
	}
</script>

<style scoped>
	.container {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	header {
		height: 1.173333rem;
		background: #00B7FF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: center;
	}

	.back {
		height: 1.173333rem;
		width: 1.173333rem;
		line-height: 1.173333rem;
	}

	.back i {
		font-size: 0.693333rem;
		color: #fff;
		font-weight: 700;
	}

	.search {
		flex: 1;
		height: 0.8rem;
		background-color: #FFFFFF;
		border-radius: 0.8rem;
		text-align: left;
		line-height: 0.8rem;
		align-items: center;
		display: flex;
		padding-left: 0.266666rem;
	}

	.search .icon-sousuo_o {
		font-size: 0.613333rem;
	}

	.search span {
		font-size: 16px;
	}

	.home {
		height: 1.173333rem;
		width: 1.173333rem;
		line-height: 1.173333rem;
	}

	.home i {
		font-size: 0.693333rem;
		color: #fff;
		font-weight: 700;
	}
	section {
		flex: 1;
		display: flex;
		overflow: hidden;
	}
	.list-l{
		overflow: hidden;
		width: 2.48rem;
		text-align: center;
		font-size: 0.373333rem;
		border-right: 0.026666rem solid #efefef
	}
	.menu{
		
	}
	.menu li {
		margin: 0.6rem 0;
	}
	.menu_right{
		flex: 1;
		padding: 0.266666rem;
		overflow: hidden;
	}
	.menu_item{
		margin-top: 0.533333rem;
	}
	.menu_item .title{
		text-align: center;
		font-size: 0.533333rem;
		margin-bottom: 0.266666rem;
	}
	.menu_shop{
		display: flex;
		flex-wrap: wrap;
	}
	.menu_shop li {
		height: 2.053333rem;
		width: 1.76rem;
		padding: 0.266666rem;
		text-align: center;
		display: flex;
		flex-direction: column;
	}
	.menu_shop li div{
		font-size: 14px;
	}
	.active{
		border-left: 0.08rem solid #b54f4a;
	}
</style>
