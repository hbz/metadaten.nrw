<script>
	import ServiceDescription from '$lib/components/ServiceDescription.svelte';
	import { services } from '$lib/components/MetadatenUndAPIs/metadataServices';
</script>

<p>
	Metadaten spielen seit jeher eine zentrale Rolle für die Verwaltung von Ressourcen in
	Bibliotheken, Archiven und Museen und die wissenschaftliche Recherche. Ihre Bedeutung in
	Wissenschaft und Bildung nimmt stetig zu.
</p>
<br />
<p>
	Das hbz beteiligt sich aktiv am Aufbau offener Infrastrukturen für Metadaten – durch
	Bereitstellung offener Metadaten im Web, durch Entwicklung und Pflege von offenen Tools für das
	Management von Metadaten und durch Beteiligung an der community-basierten Entwicklung offener
	Standards.
</p>
<br />
<p>
	Mit dieser Webseite laden wir dazu ein, die Angebote des hbz für eine offene Metadatenpraxis näher
	kennenzulernen!
</p>
<br />

<div
	class="mb-[20px] text-fuchsia-700 text-4xl font-normal font-['Open Sans'] uppercase tracking-wide"
>
	Metadaten und APIs
</div>
<p>
	Unsere Metadatendienste zeichnen sich durch vielfältige Nutzungsmöglichkeiten, Interoperabilität,
	Qualität und Stabilität aus. Davon profitieren Zehntausende von Nutzenden in Bibliotheken,
	Forschung, Museen, Archiven und Lehre seit mehr als 10 Jahren.
</p>

<ServiceDescription data={services[0]} />
<ServiceDescription data={services[1]} />
<ServiceDescription data={services[2]} />
