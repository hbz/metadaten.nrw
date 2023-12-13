<script>
	import InternalLink from '$lib/components/Links/InternalLink.svelte';
</script>

<div
	class="hidden md:flex flex-row w-screen mb-[100px] h-[398px] bg-gradient-114 from-[#AF2896] from-[48.29%] to-[#004678] to-[109.74%]"
>
	<div class="flex flex-col w-1/2">
		<img
			alt="metadaten nrw background"
			class="absolute opacity-10 -left-56 -top-96 scale-50"
			src="metadaten-nrw-hoch-w-cropped.png"
		/>
		<img
			alt="metadaten nrw"
			class="ml-[36px] mr-auto mt-[38px] w-72 h-36"
			src="metadaten-nrw-quer-w.png"
		/>
		<p
			class="ml-[45px] mb-[24px] mt-auto w-56 uppercase leading-7 text-sm font-semibold text-white tracking-wide"
		>
			Metadaten.nrw ist ein Wegweiser für offene Metadatendienste des Hochschulbibliothekszentrums
			NRW (hbz).
		</p>
	</div>
	<div class="flex flex-col w-1/2">
		<img class="w-[106px] mt-[38px] mr-[38px] ml-auto z-10" alt="hbz logo" src="logos/hbz.png" />
		<div class="flex flex-col w-80 mt-[44px] ml-auto mr-[40px] justify-center">
			<InternalLink href="#metadaten" text="Metadaten und APIs" />
			<InternalLink href="#tools" text="Tools" />
			<InternalLink href="#offeneStandards" text="Offene Standards" />
			<InternalLink href="/termine" text="Termine" />
			<InternalLink href="#about" text="Über uns" />
		</div>
	</div>
</div>
