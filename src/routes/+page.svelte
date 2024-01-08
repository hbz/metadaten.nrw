<script>
	import Footer from '$lib/components/Footer.svelte';
	import MetadatenUndApis from '$lib/components/MetadatenUndAPIs/MetadataAndAPIs.svelte';
	import Tools from '$lib/components/Tools/Tools.svelte';
	import OffeneStandards from '$lib/components/OffeneStandards/OffeneStandards.svelte';
	import About from '$lib/components/About/index.svx';
	import HeaderPad from '$lib/components/HeaderPad.svelte';
	import HeaderMobile from '$lib/components/HeaderMobile.svelte';
</script>

<div class="relative flex flex-col w-screen items-center">
	<!-- mobile view -->
	<HeaderMobile />
	<!-- pad view -->
	<HeaderPad />
	<div class="max-w-sm md:max-w-2xl">
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
