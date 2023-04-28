<script>
	import ToolDescription from '$lib/ToolDescription.svelte';
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
				<section>
					<p class="ml-4 mt-10 mb-2 text-white text-xl font-bold">
						Kontrollierte Vokabulare publizieren
					</p>
					<ExternalLink href="https://skohub.io" text="SkoHub Vocabs" />
					<ExternalLink text="Eigener SkoHub" />
				</section>
			</div>
			<div class="flex flex-col">
				<section>
					<p class="ml-4 mt-10 mb-2 text-white text-xl font-bold">
						Metadaten zusammenführen und transformieren (ETL)
					</p>
					<ExternalLink href="https://metafacture.org/" text="metafacture" />
					<ExternalLink href="https://metafacture.org/playground/" text="metafacture-playground" />
				</section>
				<section>
					<p class="ml-4 mt-10 mb-2 text-white text-xl font-bold">
						Lookups in einem System integrieren
					</p>
					<ExternalLink href="https://lobid.org/gnd" text="lobid-gnd" />
					<ExternalLink href="https://lobid.org/resources" text="lobid-resources" />
					<ExternalLink href="https://lobid.org/organisations" text="lobid-organisations" />
				</section>
			</div>
		</div>
	</div>
</section>
