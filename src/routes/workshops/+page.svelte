<script lang="ts">
	import ExampleSelectButton from '$lib/components/ExampleSelectButton.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Workshop from '$lib/components/Workshop.svelte';

	let selectedExamples: string[] = [];

	function handleSelect(id: string) {
		selectedExamples.includes(id)
			? (selectedExamples = selectedExamples.filter((e) => e !== id))
			: (selectedExamples = [...selectedExamples, id]);
	}

	const workshops = [
		{
			logo: 'https://via.placeholder.com/120x40',
			date: '22-12-2023',
			address: 'hbz Köln',
			tags: ['metadaten'],
			description:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Das ist ein toller Workshop',
			headline: 'Creating linked open usable data with Metafacture',
			image: 'https://via.placeholder.com/284x94',
			workshop: '',
			registrationLink: ''
		}
	];
</script>

<div class="flex flex-col items-center">
	<div
		class="w-full flex flex-col items-center h-[142px] bg-gradient-114 from-[#AF2896] from-[48.29%] to-[#004678] to-[109.74%]"
	>
		<div class="flex w-full h-full max-w-sm justify-between">
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
	<div class="max-w-sm flex flex-col items-center">
		<h2 class="w-56 h-14 mt-[30px] text-sky-900 text-4xl uppercase tracking-wide">Workshops</h2>

		<p
			class="w-80 text-cyan-950 mx-[30px] text-sm font-light font-['Open Sans'] leading-normal tracking-wider"
		>
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
		{#each workshops as workshop}
			<Workshop {...workshop} />
		{/each}
		<Footer />
	</div>
</div>
