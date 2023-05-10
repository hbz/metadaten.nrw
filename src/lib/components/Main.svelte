<script>
	import InternalLink from '$lib/components/Links/InternalLink.svelte';
	import { marcXML } from '$lib/components/constants.js';
</script>

<section class="relative md:h-screen w-full bg-blue-800 flex flex-col justify-center items-start">
	<img class="md:visible invisible absolute top-20 right-20" alt="hbz logo" src="logos/hbz.svg" />
	<div class="absolute text-2xl opacity-20 whitespace-pre -right-[48rem] leading-10">
		{marcXML}
	</div>
	<img
		alt="linked data in background"
		class="absolute opacity-10 md:h-screen object-cover w-full"
		src="linked-data.png"
	/>
	<div class="absolute h-1/4 w-2/3 bg-white blur-2xl left-1/4 top-20 opacity-5 rounded-[50%]" />
	<div
		class="absolute h-1/3 w-1/2 bg-white blur-2xl right-40 bottom-44 opacity-5 rounded-[50%] -rotate-45"
	/>
	<div
		class="absolute h-1/4 w-1/3 bg-white blur-2xl left-0 bottom-56 opacity-5 rounded-[50%] rotate-[35deg]"
	/>
	<div class="md:ml-20 ml-5 md:my-auto z-10">
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
	<p class="text-white ml-auto mr-20 md:mb-5 md:mt-auto font-barlowCondensed text-[16px]">
		... im Aufbau ...
	</p>
	<img class="md:invisible visible ml-auto mr-8" alt="hbz logo" src="logos/hbz.svg" />
</section>
