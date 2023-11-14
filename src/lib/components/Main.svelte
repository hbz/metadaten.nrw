<script>
	import InternalLink from '$lib/components/Links/InternalLink.svelte';
</script>

<section class="flex flex-col justify-center text-center overflow-hidden">
	<div class="relative flex flex-col">
		<!-- <img alt="metadaten nrw background" class="absolute" src="metadaten-nrw-hoch-2.png" /> -->
		<img alt="metadaten nrw" class="mx-auto opacity-100" src="metadaten-nrw-quer-w-2.png" />
		<img class="w-[106px] ml-[32px] z-10" alt="hbz logo" src="logos/hbz.png" />
	</div>
	<p
		class="mr-[30px] ml-auto w-3/4 uppercase hyphens-manual text-white text-right tracking-[0.035em]"
	>
		Metadaten.nrw ist ein W egweiser für offene Metadatendienste des
		Hochschulbibliotheks&shy; zentrums NRW (hbz).
	</p>
	<div class="flex flex-col w-full mt-[44px] mx-auto justify-center mb-[70px]">
		<InternalLink href="#metadaten" text="Metadaten und APIs" />
		<InternalLink href="#tools" text="Tools" />
		<InternalLink href="#offeneStandards" text="Offene Standards" />
		<InternalLink href="/workshops" text="Workshops" />
		<InternalLink href="#about" text="Über uns" />
	</div>
</section>
