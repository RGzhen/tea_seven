<template>
	<div>
		<div class="card-container">
			<slot>
				<span>爆款推荐</span>
			</slot>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Card'
	}
</script>

<style scoped>
	.card-container {
		/* background: #000000; */
		text-align: center;
		padding: 0.2rem 0;
		font-size: 0.5rem;
		color: #333333;
		position: relative;
	}

	.card-container span::before {
		content: '';
		position: absolute;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		display: block;
		background: #d4c0a7;
		top: 50%;
		margin-top: -4px;
		left: 3.5rem;
	}

	.card-container span::after {
		content: "";
		position: absolute;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		display: block;
		background: #d4c0a7;
		top: 50%;
		margin-top: -4px;
		right: 3.5rem
	}
</style>
