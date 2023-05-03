<script>
	import Services from '$lib/components/Services.svelte';
	import Activities from '$lib/components/Activities.svelte';
	import Main from '$lib/components/Main.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="snap-mandatory snap-y h-screen w-full overflow-y-auto relative">
	<img class="absolute top-20 right-20" alt="hbz logo" src="/logos/hbz.svg" />
	<Main />
	<Services />
	<Activities />
	<Footer />
</div>
