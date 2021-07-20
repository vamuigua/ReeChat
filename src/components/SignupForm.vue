<template>
	<form @submit.prevent="handleSubmit">
		<input
			type="text"
			required
			placeholder="Display name"
			autocomplete
			v-model="displayName"
		/>
		<input
			type="email"
			required
			placeholder="Email"
			autocomplete
			v-model="email"
		/>
		<input
			type="password"
			required
			placeholder="Password"
			autocomplete
			v-model="password"
		/>
		<button>Sign Up</button>
	</form>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
	setup() {
		const displayName = ref("");
		const email = ref("");
		const password = ref("");

		const handleSubmit = () => {
			console.log(displayName.value, email.value, password.value);
		};

		return { displayName, email, password, handleSubmit };
	},
};
</script>

<style></style>
