<script>
	import InternalLink from '$lib/components/Links/InternalLink.svelte';
	import ExternalLink from '$lib/components/Links/ExternalLink.svelte';
	import ExampleSelectButton from '$lib/components/ExampleSelectButton.svelte';
	import ExampleBox from '$lib/components/ExampleBox.svelte';
	import ForumHint from '$lib/components/ForumHint.svelte';
	import Logo from '$lib/components/Logo.svelte';

	let selectedExamples = [];

	function handleSelect(id) {
		selectedExamples.includes(id)
			? (selectedExamples = selectedExamples.filter((e) => e !== id))
			: (selectedExamples = [...selectedExamples, id]);
	}
	export let data;

	// Function to split the items into two columns
	const splitIntoColumns = (items) => {
		const columns = [[], []];
		items.forEach((item, index) => {
			columns[index % 2].push(item);
		});
		return columns;
	};
	const columns = splitIntoColumns(data.exampleBoxes);
</script>

<Logo path={data.logoPath} />

<div class="text-cyan-950 text-base font-normal font-['Open Sans'] leading-7 tracking-wider">
	{data.quote}
</div>
<div class="text-cyan-950 text-base leading-7 tracking-wider font-normal mb-10">
	{data.quoteAuthor}
</div>

<div class="">
	<div class="float-right md:w-1/2">
		<div class="mt-[50px] md:mt-0 md:mb-0">
			{#if data.links[0]}
				<InternalLink fillBackground={false} href={data.links[0]} text="Praxisbeispiele" />
			{/if}
			{#if data.links[1]}
				<ExternalLink fillBackground={false} href={data.links[1]} text="Zur Webseite" />
			{/if}
			{#if data.links[2]}
				<ExternalLink fillBackground={false} href={data.links[2]} text="Zum Blog" />
			{/if}
			<InternalLink fillBackground={false} href="/termine" text="Termine" />
			{#if data.links[4]}
				<ExternalLink fillBackground={true} href={data.links[4]} text="Zum Forum" />
			{/if}
			<ForumHint />
		</div>
	</div>
	<div
		class="text-cyan-950 text-base font-light font-['Open Sans'] leading-7 tracking-wider whitespace-break-spaces"
	>
		{data.description}
	</div>
</div>

{#if data.exampleBoxes.length}
	<div
		class="mt-[20px] md:mt-[100px] h-11 text-fuchsia-700 text-3xl font-normal font-['Open Sans'] uppercase tracking-wide"
	>
		Praxisbeispiele
	</div>

	<div class="flex flex-wrap mx-auto">
		{#each data.exampleButtons as exButton}
			<ExampleSelectButton on:select={() => handleSelect(exButton.id)} text={exButton.text} />
		{/each}
	</div>

	<div class="flex flex-col md:flex-row md:flex-wrap">
		{#each columns as column}
			<div class="w-full md:w-1/2">
				{#each column as item}
					<ExampleBox
						title={item.title}
						selected={!selectedExamples.length ||
							[...item.ids].some((e) => selectedExamples.includes(e))}
					>
						{#each item.examples as exampleLink}
							<a class="py-4" rel="external" href={exampleLink.href}>{exampleLink.text}</a>
						{/each}
					</ExampleBox>
				{/each}
			</div>
		{/each}
	</div>
{/if}
