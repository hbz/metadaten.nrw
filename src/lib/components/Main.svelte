<script>
	import InternalLink from '$lib/components/Links/InternalLink.svelte';
</script>

<section class="flex flex-col justify-center text-center overflow-hidden">
	<div class="relative flex flex-col">
		<img alt="metadaten nrw" class="mx-auto mt-[30px]" src="metadaten-nrw-quer-w.png" />
		<img class="w-[106px] mt-[21px] z-10" alt="hbz logo" src="logos/hbz.png" />
	</div>
	<p
		class="ml-auto w-3/4 uppercase hyphens-manual font-semibold text-white text-right tracking-wide"
	>
		Metadaten.nrw ist ein W egweiser für offene Metadatendienste des
		Hochschulbibliotheks&shy; zentrums NRW (hbz).
	</p>
	<div class="flex flex-col w-full mt-[44px] mx-auto justify-center mb-[70px]">
		<InternalLink href="#metadaten" text="Metadaten und APIs" />
		<InternalLink href="#tools" text="Tools" />
		<InternalLink href="#offeneStandards" text="Offene Standards" />
		<InternalLink href="/termine" text="Termine" />
		<InternalLink href="#about" text="Über uns" />
	</div>
</section>
