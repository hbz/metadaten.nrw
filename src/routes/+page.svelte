<script>
	import Main from '$lib/components/Main.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MetadatenUndApis from '$lib/components/MetadatenUndAPIs/index.svx';
	import Tools from '$lib/components/Tools/index.svx';
	import OffeneStandards from '$lib/components/OffeneStandards/index.svx';
	import About from '$lib/components/About/index.svx';
</script>

<div class="">
	<Main />
	<div class="flex flex-col justify-center mx-[30px]">
		<div class="md" id="metadata">
			<div id="metadaten">
				<MetadatenUndApis />
			</div>
			<div id="tools">
				<Tools />
			</div>
			<div id="offeneStandards">
				<OffeneStandards id="offeneStandards" />
			</div>
			<div id="about">
				<About id="about" />
			</div>
		</div>
	</div>

	<Footer />
</div>
