<script>
	import InternalLink from '$lib/components/Links/InternalLink.svelte';
</script>

<div class="md:hidden relative flex flex-col items-center w-screen bg-grad">
	<div class="">
		<img
			alt="metadaten nrw background"
			class="absolute opacity-10 w-96 h-96 -ml-96"
			src="metadaten-nrw-hoch-w-cropped.png"
		/>
	</div>
	<div class="max-w-sm mx-[30px]">
		<section class="flex flex-col justify-center text-center overflow-hidden">
			<div class="relative flex flex-col">
				<img alt="metadaten nrw" class="mx-auto mt-[30px]" src="metadaten-nrw-quer-w.png" />
				<img class="w-[106px] mt-[21px] z-10" alt="hbz logo" src="logos/hbz.png" />
			</div>
			<p
				class="ml-auto w-3/4 uppercase leading-normal text-sm hyphens-manual font-semibold text-white text-right tracking-wide"
			>
				Metadaten.nrw ist ein Wegweiser für offene Metadatendienste des
				Hochschulbibliotheks-zentrums NRW (hbz).
			</p>
			<div class="flex flex-col w-full mt-[44px] mx-auto justify-center mb-[70px] z-10">
				<InternalLink href="#metadaten" text="Metadaten und APIs" />
				<InternalLink href="#tools" text="Tools" />
				<InternalLink href="#offeneStandards" text="Offene Standards" />
				<InternalLink href="/termine" text="Termine" />
				<InternalLink href="#about" text="Über uns" />
			</div>
		</section>
	</div>
</div>

<style>
	.bg-grad {
		background: linear-gradient(
			175deg,
			rgba(175, 40, 150, 0.9) 47.44%,
			rgba(0, 70, 120, 0.81) 58.46%,
			rgba(0, 70, 120, 0.56) 74.89%,
			rgba(255, 255, 255, 0.9) 86.12%
		);
	}
</style>
