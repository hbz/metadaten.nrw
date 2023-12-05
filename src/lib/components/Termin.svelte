<script lang="ts">
	export let date: string;
	export let address: string;
	export let tags: string[] = [];
	export let description: string;
	export let headline: string;
	export let image: string;
	export let logo: string;
	export let website: string;
	export let registrationLink: string;
</script>

<div class="flex flex-col w-80 bg-white rounded shadow border border-zinc-300">
	<img class="mr-[15px] ml-auto mt-[15px] w-28 h-10" src={logo} alt="Logo" />
	<p class="mt-[22px] mx-[15px] text-sky-900 text-base font-light">{headline}</p>
	<p class="text-sky-900 mx-[15px] mt-[13px] text-sm font-semibold">{date}</p>
	<p class="text-sky-900 text-sm mx-[15px] font-semibold">{address}</p>
	{#if tags.length}
		<p
			class="text-fuchsia-700 mx-[15px] mt-[13px] text-sm font-normal font-['Open Sans'] tracking-wide"
		>
			{#each tags as tag}
				<span>#{tag}</span>
			{/each}
		</p>
	{/if}
	<p class=" text-sky-900 text-sm mt-[28px] mx-[15px] font-light">{description}</p>
	<img class="mt-[30px] w-72 h-24 mx-auto" src={image} alt="Banner" />
	<div class="flex mx-[10px] mb-2 justify-between mt-[41px]">
		<a
			class="no-underline inline-block px-[15px] py-[9px] bg-white rounded-3xl shadow border text-fuchsia-700 font-semibold"
			>Webseite</a
		>
		<a
			class="no-underline inline-block px-[15px] bg-sky-900 text-white py-[9px] bg-sky-900 rounded-3xl shadow border font-semibold"
			>Zur Registrierung</a
		>
	</div>
</div>
