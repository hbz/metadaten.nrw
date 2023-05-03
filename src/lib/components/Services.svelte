<script>
	import ToolDescription from '$lib/components/ToolDescription.svelte';
	const services = {
		openrefine: {
			description: 'Metadaten in Tools wie OpenRefine nutzen',
			links: [{ href: 'https://lobid.org/gnd', text: 'lobid-gnd' }]
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
		}
	};
</script>

<section
	id="services"
	class="relative snap-start shrink-0 w-full h-screen bg-hbzorange flex flex-col justify-center items-start"
>
	<div class="bg-white h-20 w-full absolute top-0">
		<img class="bottom-0 left-8 absolute" alt="metafacture logo" src="logos/metafacture.png" />
	</div>
	<div class="ml-20">
		<h1 class="text-[48px] text-headlineBlue w-full font-barlowCondensed tracking-wide">
			Metadaten, Tools, APIs
		</h1>
		<div class="flex flex-row">
			<div class="flex flex-col basis-1/2 mr-20">
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
			<div class="flex flex-col">
				<ToolDescription description={services.etl.description} links={services.etl.links} />
				<ToolDescription description={services.lookup.description} links={services.lookup.links} />
			</div>
		</div>
	</div>
</section>
