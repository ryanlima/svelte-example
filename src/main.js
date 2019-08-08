//import App from './App.svelte';
import Counter from './Counter.svelte';


const app = new Counter({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;