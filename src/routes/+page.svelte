<script>
	import { onMount } from 'svelte';
	import Main from '$lib/components/Main.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MetadatenUndApis from '$lib/components/MetadatenUndAPIs/index.svx';
	import Tools from '$lib/components/Tools/index.svx';
	import OffeneStandards from '$lib/components/OffeneStandards/index.svx';
	import About from '$lib/components/About/index.svx';
	import ArrowUp from '$lib/components/icons/ArrowUp.svelte';

	onMount(() => {
		if (window && window !== 'undefined') {
			window.onscroll = function () {
				scrollFunction();
			};
		}
	});
	// When the user scrolls down 20px from the top of the document, show the button

	function scrollFunction() {
		const mybutton = document.getElementById('myBtn');
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			mybutton.style.display = 'flex';
		} else {
			mybutton.style.display = 'none';
		}
	}

	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}
</script>

<div class="relative flex flex-col">
	<img
		alt="metadaten nrw background"
		class="absolute opacity-20 -left-24 -top-32 sm:scale-50 sm:-top-96"
		src="metadaten-nrw-hoch-w-cropped.png"
	/>

	<button
		class="hidden w-9 h-9 z-10 bg-white fixed bottom-2 right-2 rounded-full border-2 border-fuchsia-700 border-opacity-70 items-center justify-center"
		on:click={() => topFunction()}
		id="myBtn"
		title="Go to top"><ArrowUp /></button
	>
	<div
		class="flex flex-col items-center w-screen bg-gradient-172 from-[#af2896e6] from-[4.5%] via-[#004678cf] via-[5.5%] via-[#0046788e] via-[7.2%] to-[#ffffffe6] to-[8.3%]"
	>
		<div class="max-w-sm md:max-w-md mx-[30px]">
			<Main />
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
	<div />
</div>
