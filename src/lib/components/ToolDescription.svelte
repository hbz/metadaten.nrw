<script lang="ts">
	import ExternalLink from '$lib/components/Links/ExternalLink.svelte';

	export let links: Array<Link>;
	export let description: string;
</script>

<section class="max-w-[330px] mb-[40px]">
	<p class="text-white mb-[15px] text-lg font-bold font-robotoMono">
		{description}
	</p>
	{#each links as link}
		<ExternalLink href={link.href} text={link.text} />
	{/each}
</section>
