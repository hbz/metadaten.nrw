<script>
	import InternalLink from '$lib/components/Links/InternalLink.svelte';
	import ExternalLink from '$lib/components/Links/ExternalLink.svelte';
	import ToolDescription from '$lib/components/ToolDescription.svelte';
</script>

<div class="snap-mandatory snap-y h-screen w-full overflow-y-auto relative">
	<img class="absolute top-20 right-20" alt="hbz logo" src="/logos/hbz.svg" />
	<section
		class="snap-start shrink-0 w-full h-screen bg-blue-800 flex flex-col justify-center items-start"
	>
		<div class="ml-20">
			<h1 class="text-[80px] text-hbzorange font-barlowCondensed tracking-[.25em]">
				METADATEN.NRW
			</h1>
			<p class="text-white w-3/4 mb-10 font-robotoMono tracking-wide">
				Metadaten.nrw ist ein Hub für Metadatenkompetenz und Wegweiser für offene Metadatenservices
				des Hochschulbibliothekszentrums NRW (hbz).
			</p>
			<div class="flex flex-row">
				<InternalLink href="#services" text="Metadaten, Tools und APIs" />
				<InternalLink href="#activities" text="Unsere Aktivitäten" />
			</div>
		</div>
		<p class="text-white absolute right-20 bottom-20">... im Aufbau ...</p>
	</section>

	<section
		id="activities"
		class="snap-start w-full shrink-0 h-screen bg-activitesBg flex flex-col justify-center items-start"
	>
		<div class="ml-20 mr-20 w-3/4">
			<h1 class="text-[48px] text-hbzorange font-barlowCondensed tracking-wide">
				Unsere Aktivitäten
			</h1>
			<div class="flex flex-row">
				<div class="flex flex-col basis-1/3 p-4">
					<p>
						Das World Wide Web Consortium (W3C) ist eine im Jahr 1989 von Tim Berners-Lee gegründete
						internationale Gemeinschaft, die gemeinsam mit der Öffentlichkeit offene Webstandards
						entwickelt, um nachhaltig ein Web for All zu schaffen. Wir sind mit der von uns
						mitbegründeteten Arbeitsgruppe Reconciliation Service API im W3C mit dabei. Mit dem
						Webprotokoll möchten wir Daten wie die Gemeinsame Normdatei und kontrollierte Vokabulare
						ausgehend vom Linked Open Data Datenmodell Simple Knowledge Organization System (SKOS)
						offen zugänglich machen.
					</p>
				</div>
				<div class="flex flex-col basis-1/3 p-4">
					<p>
						Die Deutsche Initiative für Netzwerkinformationen e.V. (DINI) unterstützt die
						Entwicklung gemeinsamer Standards für Informationsinfrastrukturen an Hochschulen. Wir
						haben hier das Kompetenzzentrum Interoperable Metadaten (KIM) gegründet mit dem Ziel,
						eine anwendungsübergreifende Integration von Metadaten zu erreichen, ihre nationale und
						internationale Standardisierung, wie auch den Anschluss der deutschsprachigen Community
						an die internationale Metadaten-Community zu gewährleisten. Teil davon ist die
						OER-Metadatengruppe, in der wir gemeinsam mit der Community ein Learning Object Metadata
						(LOM)-basiertes Metadatenprofil für Open Educational Resources im Hochschulbereich
						entwickeln.
					</p>
				</div>
				<div class="flex flex-col basis-1/3 p-4">
					<p>
						Frisch dabei sind wir bei der Dublin Core Metadata Initiative (DCMI) in der
						Arbeitsgruppe DCMI Usage Board, das als Editorial Board für die Spezifikationen des
						semantischen Vokabulars von Dublin Core seit mehr als 20 Jahren verantwortlich ist.
					</p>
				</div>
			</div>
		</div>
	</section>
</div>
