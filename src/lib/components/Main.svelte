<script>
	import InternalLink from '$lib/components/Links/InternalLink.svelte';
</script>

<section
	class="w-full flex flex-col justify-center text-center overflow-hidden bg-gradient-172 from-[#af2896e6] from-[44%] via-[#004678cf] via-[58%] via-[#0046788e] via-[74%] to-[#ffffffe6] to-[86%]"
>
	<div class="relative flex flex-col">
		<img
			alt="metadaten nrw background"
			class="absolute opacity-75"
			src="metadaten-nrw-hoch-2.png"
		/>
		<img
			alt="metadaten nrw"
			class="object-fit mx-auto opacity-100"
			src="metadaten-nrw-quer-w-2.png"
		/>
		<img class="w-[106px] ml-[32px] opacity-100" alt="hbz logo" src="logos/hbz.svg" />
	</div>
	<p
		class="mr-[30px] ml-auto w-3/4 uppercase hyphens-manual text-white text-right tracking-[0.035em]"
	>
		Metadaten.nrw ist ein W egweiser für offene Metadatendienste des
		Hochschulbibliotheks&shy; zentrums NRW (hbz).
	</p>
	<div class="flex flex-col w-full mt-[44px] max-w-sm mx-auto justify-center">
		<InternalLink href="#metadata" text="Metadaten und APIs" />
		<InternalLink href="#activities" text="Tools" />
		<InternalLink href="#activities" text="Offene Standards" />
		<InternalLink href="#activities" text="Workshops" />
		<InternalLink href="#activities" text="Über uns" />
	</div>
</section>
