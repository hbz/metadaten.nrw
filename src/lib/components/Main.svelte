<script>
	import InternalLink from '$lib/components/Links/InternalLink.svelte';
	import { marcXML } from '$lib/components/constants.js';
</script>

<section class="relative h-screen w-full bg-blue-800 flex flex-col justify-center text-center rounded-b-[2.5rem] overflow-hidden">
	<img class="absolute w-[106px] sm:w-[157px] top-[26px] sm:top-[86px] right-[12px] sm:right-[102px]" alt="hbz logo" src="logos/hbz.svg" />
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
		<h1 class="sm:block ml-[20px] hidden text-[56px] sm:text-[64px] lg:text-[80px] text-hbzorange font-barlowCondensed tracking-[.25em]">
			METADATEN.NRW
		</h1>

		<h1 class="sm:hidden block mt-[0px] sm:mt-[0] md:text-[80px] mb-[35px] text-[52px] text-hbzorange font-barlowCondensed tracking-[.20em] leading-none">
			<span>METADATEN.</span>
			<br/>
			<span>NRW</span>
		</h1>
		<div class="max-w-[650px] lg:max-w-2xl mx-auto">
			<p class="text-white sm:text-xl mt-2 mb-20 font-robotoMono tracking-[0.035em]">
				Metadaten.nrw ist ein Hub für Metadatenkompetenz und Wegweiser für offene Metadatenservices
				des Hochschulbibliothekszentrums NRW (hbz).
			</p>
			<div class="max-w-xs mx-auto justify-center">
				<InternalLink href="#services" text="Metadaten, Tools, APIs" />
				<InternalLink href="#activities" text="Unsere Aktivitäten" />
			</div>
		</div>
	</div>
	<img class="invisible mx-auto w-[106px]" alt="hbz logo" src="logos/hbz.svg" />
	<p class="text-white sm:text-lg mt-0 mb-0 font-robotoSlab tracking-[.08em]">
		... im Aufbau ...
	</p>
</section>
