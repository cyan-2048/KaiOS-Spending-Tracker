import { onCleanup, onMount } from "solid-js";
import Softkeys from "./views/components/Softkeys";
import Home from "./views/Home";
import signals from "./signals";

export default function App() {
	onMount(() => {
		signals.setMounted(true);
	});

	onCleanup(() => {
		signals.setMounted(false);
	});

	return (
		<>
			<Home></Home>
			<Softkeys></Softkeys>
		</>
	);
}
