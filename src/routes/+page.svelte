<script>
	import Services from '$lib/components/Services.svelte';
	import Activities from '$lib/components/Activities.svelte';
	import Main from '$lib/components/Main.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MetadatenUndApis from '$lib/components/MetadatenUndAPIs/index.svx';
</script>

<div class="">
	<Main />
	<div class="flex flex-col justify-center mx-[30px]">
		<div class="md" id="metadata">
			<MetadatenUndApis />
		</div>
	</div>

	<Footer />
</div>
