<script>
	import InternalLink from '$lib/components/Links/InternalLink.svelte';
</script>

<section class="md:h-screen w-full bg-blue-800 flex flex-col justify-center items-start">
	<img class="md:visible invisible absolute top-20 right-20" alt="hbz logo" src="/logos/hbz.svg" />
	<div class="md:ml-20 ml-5">
		<h1
			class="md:block hidden md:text-[80px] text-[56px] text-hbzorange font-barlowCondensed tracking-[.25em]"
		>
			METADATEN.NRW
		</h1>

		<h1
			class="md:hidden block md:text-[80px] text-[56px] text-hbzorange font-barlowCondensed tracking-[.25em]"
		>
			METADATEN.
		</h1>
		<h1
			class="md:hidden block md:text-[80px] text-[56px] text-hbzorange font-barlowCondensed tracking-[.25em]"
		>
			NRW
		</h1>
		<p class="text-white w-3/4 mb-10 font-robotoMono tracking-wide">
			Metadaten.nrw ist ein Hub für Metadatenkompetenz und Wegweiser für offene Metadatenservices
			des Hochschulbibliothekszentrums NRW (hbz).
		</p>
		<div class="md:flex md:flex-row">
			<InternalLink href="#services" text="Metadaten, Tools und APIs" />
			<InternalLink href="#activities" text="Unsere Aktivitäten" />
		</div>
	</div>
	<p class="text-white ml-auto mr-20 font-barlowCondensed text-[16px]">... im Aufbau ...</p>
	<img class="md:invisible visible ml-auto mr-8" alt="hbz logo" src="/logos/hbz.svg" />
</section>
