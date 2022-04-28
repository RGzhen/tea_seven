<template>
	<div class="notice-container">
		<div class="notice-title">资讯头条</div>
		<vue-seamless-scroll :data="noticeList" :class-option="classOption" class="warp">
			<ul class="item">
				<li v-for="(item, index) in noticeList" :key="index">
					<span class="title" v-text="item.title"></span>
				</li>
			</ul>
		</vue-seamless-scroll>
	</div>

</template>
<script>
	export default {
		props:{
			noticeList: Array
		},
		data() {
			return {
				classOption: {
					singleHeight: 30,
					waitTime: 2000,
					step: 0.5,
					hoverStop: false,
					limitMoveNum: 1
				}
			}
		}
	}
</script>
<style>
	.notice-container {
		display: flex;
		height: 0.8rem;
		margin-block: 0.2rem;
	}

	.notice-container .notice-title {
		width: 2.133333rem;
		padding-inline: 0.4rem;
		text-align: center;
		font-size: 0.533333rem;
		font-weight: 700;
	}

	.warp {
		height: 100%;
		flex: 1;
		margin: 0 auto;
		overflow: hidden;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0 auto;
	}

	.warp .title {
		display: block;
		height: 0.8rem;
		line-height: 0.8rem;
		font-size: 0.4rem;
	}

	/* .warp li a {
		display: block;
		height: 0.8rem;
		line-height: 0.8rem;
		display: flex;
		justify-content: space-between;
		font-size: 0.4rem;
	} */
</style>
