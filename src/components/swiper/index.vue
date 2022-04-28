<template>
	<swiper ref="mySwiper" :options="swiperOptions"  id="container">
		<swiper-slide v-for="item in swiperList" :key="item.id">
			<img  v-lazy.container="item.imgUrl" alt="">
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>
<script>
	import {
		swiper,
		swiperSlide,
	} from 'vue-awesome-swiper'
	import 'swiper/dist/css/swiper.css'
	export default {
		name: 'Swiper',
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				swiperList: [{
						id: 1,
						imgUrl: './images/swiper1.jpeg'
					},
					{
						id: 2,
						imgUrl: './images/swiper2.jpeg'
					},
					{
						id: 3,
						imgUrl: './images/swiper3.jpeg'
					}
				],
				swiperOptions: {
					pagination: {
						el: '.swiper-pagination'
					},
					autoplay: {
						delay: 3000, //自动切换的时间间隔，单位ms
						stopOnLastSlide: false,
						disableOnInteraction: false
					},
					loop:true
					// Some Swiper option/callback...
				}
			}
		}
	}
</script>

<style scope>
	.swiper-container {
		height: 4.933333rem;
	}

	.swiper-container img {
		height: 100%;
		width: 100%;
	}

	::v-deep .swiper-pagination-bullet {
		background: #fff;
		opacity: 1;
	}
</style>
