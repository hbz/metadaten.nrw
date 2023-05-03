<script>
	import InternalLink from '$lib/components/Links/InternalLink.svelte';
</script>

<section
	class="snap-start shrink-0 w-full h-screen bg-blue-800 flex flex-col justify-center items-start"
>
	<div class="ml-20">
		<h1 class="text-[80px] text-hbzorange font-barlowCondensed tracking-[.25em]">METADATEN.NRW</h1>
		<p class="text-white w-3/4 mb-10 font-robotoMono tracking-wide">
			Metadaten.nrw ist ein Hub für Metadatenkompetenz und Wegweiser für offene Metadatenservices
			des Hochschulbibliothekszentrums NRW (hbz).
		</p>
		<div class="flex flex-row">
			<InternalLink href="#services" text="Metadaten, Tools und APIs" />
			<InternalLink href="#activities" text="Unsere Aktivitäten" />
		</div>
	</div>
	<p class="text-white absolute right-20 bottom-20 font-barlowCondensed text-[16px]">
		... im Aufbau ...
	</p>
</section>
