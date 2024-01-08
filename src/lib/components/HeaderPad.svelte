<script>
	import InternalLink from '$lib/components/Links/InternalLink.svelte';
</script>

<div
	class="hidden md:flex flex-row w-screen mb-[100px] h-[398px] bg-gradient-114 from-[#AF2896] from-[48.29%] to-[#004678] to-[109.74%]"
>
	<div class="flex w-screen max-w-2xl mx-auto justify-between">
		<div class="realtive flex flex-col justify-between mb-[20px] mx-[30px]">
			<img
				alt="metadaten nrw background"
				class="absolute opacity-10 w-96 h-96 -ml-32 -mt-32"
				src="metadaten-nrw-hoch-w-cropped.png"
			/>
			<img alt="metadaten nrw" class="mr-auto mt-[38px] w-72 h-36" src="metadaten-nrw-quer-w.png" />
			<p class="w-56 uppercase leading-7 text-sm font-semibold text-white tracking-wide">
				Metadaten.nrw ist ein Wegweiser für offene Metadatendienste des Hochschulbibliothekszentrums
				NRW (hbz).
			</p>
		</div>
		<div class="flex flex-col w-1/2 justify-between mt-[34px] mb-[20px]">
			<img class="w-[106px] mb-[10px] ml-auto z-10" alt="hbz logo" src="logos/hbz.png" />
			<div class="flex flex-col w-80 mt-[44px] ml-auto justify-center">
				<InternalLink href="#metadaten" text="Metadaten und APIs" />
				<InternalLink href="#tools" text="Tools" />
				<InternalLink href="#offeneStandards" text="Offene Standards" />
				<InternalLink href="/termine" text="Termine" />
				<InternalLink href="#about" text="Über uns" />
			</div>
		</div>
	</div>
</div>
