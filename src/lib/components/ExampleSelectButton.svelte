<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let text: string;

	let selected: boolean = false;
	const dispatch = createEventDispatcher();
</script>

<button
	on:click={() => (selected = !selected)}
	on:click={() => dispatch('select')}
	class="px-[20px] py-[9px] rounded-[50px] shadow m-2 text-center font-semibold"
	class:bg-white={!selected}
	class:bg-[#004678]={selected}
	class:text-fuchsia-700={!selected}
	class:text-white={selected}
>
	{text}
</button>
