<template>
	<div>
		<h1>Cerebro</h1>

		<pre>	{{ store.Humans }}</pre>
	</div>
</template>

<script setup>
import { useStore } from "./store";
const store = useStore();
</script>
