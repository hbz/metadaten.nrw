<script lang="ts">
	import ExternalLink from '$lib/components/Links/ExternalLink.svelte';

	export let links: Array<Link>;
	export let description: string;
</script>

<section>
	<p class="ml-4 mt-10 mb-2 text-white text-xl font-bold font-robotoMono">
		{description}
	</p>
	{#each links as link}
		<ExternalLink href={link.href} text={link.text} />
	{/each}
</section>
