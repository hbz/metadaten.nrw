<script>
	import InternalLink from '$lib/components/Links/InternalLink.svelte';
	import { marcXML } from '$lib/components/constants.js';
</script>

<section class="relative lg:h-[1514px]] w-full bg-blue-800 flex flex-col justify-center text-center rounded-b-[2.5rem] overflow-hidden">
	<img
		class="invisible absolute top-[86px] right-[102px]"
		alt="hbz logo"
		src="logos/hbz.svg"
	/>
	<div class="w-[50%] overflow-hidden absolute text-xl text-left opacity-20 whitespace-pre top-[10rem] sm:-right-[10rem] lg:lef-[0rem] leading-[4rem]">
		{marcXML}
	</div>
	<img
		alt="linked data in background"
		class="absolute opacity-10 h-screen object-cover w-full ml-10 -mt-40"
		src="linked-data.png"
	/>
	<div class="absolute h-1/4 w-2/3 bg-white blur-2xl left-1/4 top-20 opacity-5 rounded-[50%]" />
	<div
		class="absolute h-1/3 w-1/2 bg-white blur-2xl right-40 bottom-44 opacity-5 rounded-[50%] -rotate-45"
	/>
	<div
		class="absolute h-1/4 w-1/3 bg-white blur-2xl left-0 bottom-56 opacity-5 rounded-[50%] rotate-[35deg]"
	/>
	<div class="p-8 pt-16 z-10">
		<h1
			class="sm:block hidden text-[56px] sm:text-[64px] lg:text-[80px] text-hbzorange font-barlowCondensed tracking-[.25em]"
		>
			METADATEN.NRW
		</h1>

		<h1
			class="sm:hidden block md:text-[80px] text-[52px] text-hbzorange font-barlowCondensed tracking-[.20em] leading-none"
		>
			<span>METADATEN.</span>
			<br/>
			<span>NRW</span>
		</h1>
		<div class="max-w-xl mx-auto">
			<p class="text-white mt-2 mb-20 font-robotoMono tracking-[0.035em]">
				Metadaten.nrw ist ein Hub für Metadatenkompetenz und Wegweiser für offene Metadatenservices
				des Hochschulbibliothekszentrums NRW (hbz).
			</p>
			<div class="max-w-xs mx-auto justify-center">
				<InternalLink href="#services" text="Metadaten, Tools, APIs" />
				<InternalLink href="#activities" text="Unsere Aktivitäten" />
			</div>
		</div>
	</div>
	<img class="mx-auto w-[106px]" alt="hbz logo" src="logos/hbz.svg" />
	<p
		class="text-white my-12 font-barlowCondensed text-[20px]"
	>
		... im Aufbau ...
	</p>
</section>
