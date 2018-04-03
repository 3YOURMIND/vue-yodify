<template>
	<div>
		<vue-yodify/>
		<div id="example">
			<button @click="$yodify({text: 'Wow', type: 'success'})">Yodify</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'app',
};
</script>

<style lang="scss">
body {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

#example {
	text-align: center;
	margin-top: 32px;
}
</style>
