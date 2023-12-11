<script>
	import Main from '$lib/components/Main.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MetadatenUndApis from '$lib/components/MetadatenUndAPIs/index.svx';
	import Tools from '$lib/components/Tools/index.svx';
	import OffeneStandards from '$lib/components/OffeneStandards/index.svx';
	import About from '$lib/components/About/index.svx';
</script>

<div class="relative flex flex-col w-screen items-center">
	<div class="flex flex-col items-center w-screen bg-grad">
		<img
			alt="metadaten nrw background"
			class="absolute opacity-20 -left-24 -top-32 sm:scale-50 sm:-top-96"
			src="metadaten-nrw-hoch-w-cropped.png"
		/>
		<div class="max-w-sm md:max-w-md mx-[30px]">
			<Main />
		</div>
	</div>
	<div class="max-w-sm md:max-w-lg">
		<div id="metadata">
			<div class="md mx-[30px]" id="metadaten">
				<MetadatenUndApis />
			</div>
			<div class="md mt-[40px] mx-[30px]" id="tools">
				<Tools />
			</div>
			<div class="md mt-[40px] mx-[30px]" id="offeneStandards">
				<OffeneStandards id="offeneStandards" />
			</div>
			<div class="md mx-[30px]" id="about">
				<About id="about" />
			</div>
		</div>
		<Footer />
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
