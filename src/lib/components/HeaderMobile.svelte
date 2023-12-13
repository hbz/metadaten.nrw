<script>
	import Main from './Main.svelte';
</script>

<div class="md:hidden flex flex-col items-center w-screen bg-grad">
	<img
		alt="metadaten nrw background"
		class="absolute opacity-20 -left-24 -top-32"
		src="metadaten-nrw-hoch-w-cropped.png"
	/>
	<div class="max-w-sm mx-[30px]">
		<Main />
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
