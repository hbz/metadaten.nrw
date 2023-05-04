<script>
	import Services from '$lib/components/Services.svelte';
	import Activities from '$lib/components/Activities.svelte';
	import Main from '$lib/components/Main.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="md:snap-mandatory md:snap-y h-screen w-full overflow-y-auto relative">
	<Main />
	<Services />
	<Activities />
	<Footer />
</div>
