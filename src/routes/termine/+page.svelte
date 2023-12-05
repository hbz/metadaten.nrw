<script lang="ts">
	import ExampleSelectButton from '$lib/components/ExampleSelectButton.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Termin from '$lib/components/Termin.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let selectedExamples: string[] = [];

	function handleSelect(id: string) {
		selectedExamples.includes(id)
			? (selectedExamples = selectedExamples.filter((e) => e !== id))
			: (selectedExamples = [...selectedExamples, id]);
	}

	const termine = data.events;
</script>

<div class="flex flex-col md:max-w-xl w-full mx-auto">
	<div
		class="w-full flex flex-col items-center h-[142px] bg-gradient-114 from-[#AF2896] from-[48.29%] to-[#004678] to-[109.74%]"
	>
		<div class="flex w-full h-full justify-between">
			<a href="/">
				<img
					alt="metadaten nrw"
					class="object-contain h-full pl-[30px] pt-[23px] pb-[30px]"
					src="metadaten-nrw-hoch-w-cropped.png"
				/>
			</a>
			<img
				alt="metadaten nrw"
				class="object-contain h-full ml-auto mr-[30px] pt-[23px] pb-[30px]"
				src="metadaten-nrw.png"
			/>
		</div>
	</div>
	<div class="flex flex-col items-center">
		<h2 class="h-14 mt-[30px] text-sky-900 text-4xl uppercase tracking-wide">Termine</h2>

		<p class="text-cyan-950 mx-[30px] text-sm font-light leading-normal tracking-wider">
			Wir bieten Workshops auf Konferenzen an oder auch im Rahmen der Weiter-bildungsangebote des
			ZBIW. Die Kurse am ZBIW sind für Angehörige von NRW Verbundbibliotheken und Hochschulen
			kostenlos. Sollten Sie Interesse an einem Workshop haben, der nicht in der Liste ist, können
			Sie gerne Kontakt aufnehmen unter metadaten-nrw[at]hbz-nrw.de.
		</p>

		<div class="flex flex-wrap mx-[30px] mt-[70px] mb-[70px]">
			<ExampleSelectButton on:select={() => handleSelect('lobid-gnd')} text="lobid-gnd" />
			<ExampleSelectButton
				on:select={() => handleSelect('lobid-resources')}
				text="lobid-resources"
			/>
			<ExampleSelectButton
				on:select={() => handleSelect('lobid-organisations')}
				text="lobid-organisations"
			/>
			<ExampleSelectButton on:select={() => handleSelect('OERSI')} text="OERSI" />
			<ExampleSelectButton on:select={() => handleSelect('OERSI')} text="OERSI" />
			<ExampleSelectButton on:select={() => handleSelect('SkoHub')} text="SkoHub" />
			<ExampleSelectButton on:select={() => handleSelect('metafacture')} text="metafacture" />
		</div>
		<div class="grid grid-cols-1 gap-2">
			{#each termine as termin}
				<Termin {...termin} />
			{/each}
		</div>
	</div>
	<Footer />
</div>
