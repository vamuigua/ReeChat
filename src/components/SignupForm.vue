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
		<div class="error">{{ error }}</div>
		<button>Sign Up</button>
	</form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "../composables/useSignup";
export default {
	setup() {
		const { error, signup } = useSignup();

		// refs
		const displayName = ref("");
		const email = ref("");
		const password = ref("");

		const handleSubmit = async () => {
			await signup(email.value, password.value, displayName.value);
			console.log("User Signed up!");
		};

		return { displayName, email, password, handleSubmit, error };
	},
};
</script>

<style></style>
