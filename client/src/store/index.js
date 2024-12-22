import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import {Matter, Humans} from "../classes";

export const useStore = defineStore("cerebro", () => {
	const app = ref({
		isInitialized: false,
	});

	const matter = new Matter("Main");
	function init() {
		requestAnimationFrame(animate);
	}

	function animate() {
		play();
		requestAnimationFrame(animate);
	}

	function play() {
		matter.echo(Humans);
	}
	return { app, init, Humans, };
});
