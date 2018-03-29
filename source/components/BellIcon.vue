<template>
	<div class="vue-yodify__icon" :class="`vue-yodify__icon--${type}`">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="#ffffff"
		>
			<path
				fill-rule="evenodd"
				d="M10.0270123,4.32949237 L10.0270123,4.32949237 C10.009244,4.22230056 10,4.11222981 10,4 C10,2.8954305 10.8954305,2 12,2 C13.1045695,2 14,2.8954305 14,4 C14,4.11222981 13.990756,4.22230056 13.9729877,4.32949237 C16.8783478,5.32517945 19,8.46389844 19,12.1818182 L19,18 C19,18.5522847 18.5522847,19 18,19 L6,19 C5.44771525,19 5,18.5522847 5,18 L5,12.1818182 C5,8.46389844 7.12165223,5.32517945 10.0270123,4.32949237 Z M17,17 L17,12 C17,8.6862915 14.7614237,6 12,6 C9.23857625,6 7,8.6862915 7,12 L7,17 L17,17 Z M10,20 L14,20 C14,21.1045695 13.1045695,22 12,22 C10.8954305,22 10,21.1045695 10,20 Z"
			/>
		</svg>
	</div>
</template>

<script>
export default {
	name: 'BellIcon',
	props: {
		type: { required: true, type: String },
	},
}
</script>

<style lang="scss" scoped>
$color-error: #d91919;
$color-info: #2c66c4;
$color-success: #64ad13;
$color-warn: #ffe60d;

.vue-yodify__icon {
	$size: 24px;
	width: #{$size * 2};
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		width: $size;
		height: $size;
	}
}

.vue-yodify__icon--error {
	background-color: $color-error;
}

.vue-yodify__icon--info {
	background-color: $color-info;
}

.vue-yodify__icon--success {
	background-color: $color-success;
}

.vue-yodify__icon--warn {
	background-color: $color-warn;
}
</style>
