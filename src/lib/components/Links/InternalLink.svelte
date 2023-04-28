<script lang="ts">
	import { className } from './linkStyle';

	export let text: string;
	export let href: string;

	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<a {href} on:click|preventDefault={scrollIntoView} class={className}>{text}</a>
