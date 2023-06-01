<script>
	import ToolDescription from '$lib/components/ToolDescription.svelte';
	const services = {
		openrefine: {
			description: 'Metadaten in Tools wie OpenRefine nutzen',
			links: [
				{ href: 'https://lobid.org/gnd', text: 'lobid-gnd' },
				{ href: 'https://skohub.io/', text: 'SkoHub Vocabs' }
			]
		},
		databases: {
			description: 'Metadaten für Datenbanken oder Suchindices beziehen',
			links: [
				{ href: 'https://lobid.org/gnd', text: 'lobid-gnd' },
				{ href: 'https://lobid.org/resources', text: 'lobid-resources' },
				{ href: 'https://gokb.org/de/index.html', text: 'GOKb' },
				{ href: 'https://lobid.org/organisations', text: 'lobid-organisations' }
			]
		},
		vocabs: {
			description: 'Kontrollierte Vokabulare publizieren',
			links: [
				{ href: 'https://metafacture.org/', text: 'metafacture' },
				{ href: 'https://metafacture.org/playground/', text: 'metafacture-playground' }
			]
		},
		etl: {
			description: 'Metadaten zusammenführen und transformieren (ETL)',
			links: [
				{ href: 'https://metafacture.org/', text: 'metafacture' },
				{ href: 'https://metafacture.org/playground/', text: 'metafacture-playground' }
			]
		},
		lookup: {
			description: 'Lookups in einem System integrieren',
			links: [
				{ href: 'https://lobid.org/gnd', text: 'lobid-gnd' },
				{ href: 'https://lobid.org/resources', text: 'lobid-resources' },
				{ href: 'https://lobid.org/organisations', text: 'lobid-organisations' }
			]
		},
		packageMetadata: {
			description: 'Paket-Metadaten zu E-Ressourcen nutzen',
			links: [{ href: 'https://gokb.org/', text: 'GOKb' }]
		}
	};
</script>

<section
	id="services"
	class="relative flex flex-col justify-center items-start max-w-2xl mx-auto"
>
	<div class="bg-white h-11 w-full relative">
		<img class="bottom-0 left-8 absolute" alt="metafacture logo" src="logos/metafacture.png" />
	</div>
	<div class="bg-hbzorange w-full p-[23px] pt-16 justify-center text-center rounded-[2.5rem]">
		<h1
			class="text-[48px] text-headlineBlue w-full font-barlowCondensed tracking-wide mb-[50px] leading-none"
		>
			Metadaten, Tools, APIs
		</h1>
		<div class="max-w-sm mx-auto">
			<ToolDescription
				description={services.openrefine.description}
				links={services.openrefine.links}
			/>
			<ToolDescription
				description={services.databases.description}
				links={services.databases.links}
			/>
			<ToolDescription description={services.vocabs.description} links={services.vocabs.links} />
		</div>
		<div class="max-w-sm mx-auto">
			<ToolDescription description={services.etl.description} links={services.etl.links} />
			<ToolDescription description={services.lookup.description} links={services.lookup.links} />
			<ToolDescription
				description={services.packageMetadata.description}
				links={services.packageMetadata.links}
			/>
		</div>
	</div>
	<div class="bg-white h-11 w-full relative">
		<img class="bottom-0 right-8 absolute" alt="metafacture logo" src="logos/metafacture.png" />
	</div>
</section>
