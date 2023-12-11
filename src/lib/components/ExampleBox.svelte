<script lang="ts">
	export let title: string;
	export let selected: boolean = true;
	let expanded: boolean = false;
</script>

<div
	on:click={() => (expanded = !expanded)}
	class:bg-gray-200={!selected}
	class="w-80 min-h-[96px] mt-[10px] mx-auto rounded-lg shadow border border-zinc-300 justify-center items-center cursor-pointer flex flex-col"
>
	<p class="text-center text-fuchsia-700 text-base font-semibold leading-normal mx-2">
		{title}
	</p>
	{#if expanded}
		<div
			class="example-links mx-[20px] flex flex-col text-sky-900 text-base font-normal underline leading-normal block"
		>
			<slot />
		</div>
	{/if}
</div>
