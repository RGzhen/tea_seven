<template>
	<div class="detail">
		<section>
			<div class='swiper-main'>
				<swiper :options="swiperOption">
					<swiper-slide v-for='(item,index) in swiperList' :key='index'>
						<img :src="item.imgUrl" alt="">
					</swiper-slide>
				</swiper>
				<div class="swiper-pagination"></div>
			</div>
		</section>
		<footer>
			<div class="left">加入购物车</div>
			<div class="right">立即购买</div>
		</footer>
	</div>
</template>

<script>
	import {
		swiper,
		swiperSlide,
	} from 'vue-awesome-swiper'
	import 'swiper/dist/css/swiper.css'
	export default {
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				swiperOption: {
					autoplay: 3000,
					speed: 1000,
					pagination: {
						el: '.swiper-pagination',
						type: 'fraction'
					}
				},
				swiperList: [{
						imgUrl: './images/goods1.jpg'
					},
					{
						imgUrl: './images/goods2.jpg'
					},
					{
						imgUrl: './images/goods3.jpg'
					}
				]

			}

		}
	}
</script>
<style scoped lang="scss">
	.detail {
		display: flex;
		height: 100vh;
		width: 100vw;
		flex-direction: column;

		section {
			flex: 1;

			#container {
				height: 10rem;
			}

			.swiperList {
				height: 10rem;
			}
		}

		footer {
			height: 1.306666rem;
			display: flex;
			text-align: center;

			.right {
				width: 50%;
				height: 100%;
				line-height: 1.306666rem;
				background: orange;
				font-weight: 700;
				color: #fff;
			}

			.left {
				width: 50%;
				height: 100%;
				line-height: 1.306666rem;
				background: red;
				font-weight: 700;
				color: #fff;
			}
		}
	}

	.swiper-main {
		position: relative;
		width: 100%;
		height: 10rem;
		overflow: hidden;
	}

	.swiper-container {
		width: 100%;
		height: 10rem;
	}

	.swiper-container img {
		width: 100%;
		height: 10rem;
	}

	.swiper-pagination {
		bottom: 0.266666rem;
		width: 100%;
		text-align: right;
		color: #FFFFFF;
		font-size: 0.426666rem;
		color: black;
	}

	.swiper-pagination-fraction,
	.swiper-pagination-custom,
	.swiper-container-horizontal>.swiper-pagination-bullets {
		left: -0.533333rem;
	}
</style>
