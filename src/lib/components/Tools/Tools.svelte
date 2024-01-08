<script>
	import ServiceDescription from '$lib/components/ServiceDescription.svelte';
	import { services } from '$lib/components/services';
</script>

<div
	class="mb-[20px] text-fuchsia-700 text-4xl font-normal font-['Open Sans'] uppercase tracking-wide"
>
	Tools
</div>
<p>
	Wir legen Wert auf Free and Open Source-Software (FOSS). Nicht nur können die von uns betreuten
	Tools frei verändert werden, auch ihre Nutzung ist kostenlos. Die Entwicklung erfolgt gemeinsam
	mit der Community transparent und offen im Web. So können wir gezielt auf die Bedürfnisse und das
	Feedback der Nutzenden eingehen.
</p>

{#each services.filter((s) => s.category === 'tools') as service}
	<ServiceDescription data={service} />
{/each}
