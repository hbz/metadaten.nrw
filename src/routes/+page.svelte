<script>
	import Main from '$lib/components/Main.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MetadatenUndApis from '$lib/components/MetadatenUndAPIs/index.svx';
	import Tools from '$lib/components/Tools/index.svx';
	import OffeneStandards from '$lib/components/OffeneStandards/index.svx';
	import About from '$lib/components/About/index.svx';
</script>

<div class="flex flex-col">
	<div
		class="items-center w-screen bg-gradient-172 from-[#af2896e6] from-[4.5%] via-[#004678cf] via-[5.5%] via-[#0046788e] via-[7.2%] to-[#ffffffe6] to-[8.3%]"
	>
		<div class="max-w-sm mx-[30px]">
			<Main />
		</div>
		<div class="max-w-sm mx-[30px]">
			<div id="metadata">
				<div class="md" id="metadaten">
					<MetadatenUndApis />
				</div>
				<div class="md mt-[40px]" id="tools">
					<Tools />
				</div>
				<div class="md mt-[40px]" id="offeneStandards">
					<OffeneStandards id="offeneStandards" />
				</div>
				<div class="md" id="about">
					<About id="about" />
				</div>
			</div>
			<Footer />
		</div>
	</div>
</div>
