import { createRouter, createWebHistory } from "vue-router";
import { useStore } from "../store";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [],
	scrollBehavior: () => ({ left: 0, top: 0 }),
});

router.beforeEach(async (to, from, next) => {
	const store = useStore();

	if (!store.app.isInitialized) {
		store.init();
		next();
	} else next();
});

export default router;
