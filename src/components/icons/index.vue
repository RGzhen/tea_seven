<template>
	<ul class="icons-container">
		<li v-for="item in iconsList" :key="item.id">
			<img :src="item.imgUrl" alt="">
			<span>{{item.title}}</span>
		</li>
	</ul>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				iconsList: [{
						id: 1,
						title: '自饮茶',
						imgUrl: './images/icons1.png'
					},
					{
						id: 2,
						title: '茶具',
						imgUrl: './images/icons2.png'
					},
					{
						id: 3,
						title: '茶礼盒',
						imgUrl: './images/icons3.png'
					},
					{
						id: 4,
						title: '领福利',
						imgUrl: './images/icons4.png'
					},
					{
						id: 5,
						title: '官方验证',
						imgUrl: './images/icons5.png'
					}

				]
			}
		}
	}
</script>

<style scope>
	.icons-container{
		height: 1.866666rem;
		padding-block:0.2rem;
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #999;
	}
	.icons-container li {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
	.icons-container li img {
		width: 1rem;
		height: 1rem;
	}
	.icons-container li span{
		font-size: 0.4rem;
	}
</style>
