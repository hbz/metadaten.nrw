<script lang="ts">
	import { classNameBg } from './linkStyle';
	import { classNameNoBg } from './linkStyle';

	export let text: string;
	export let href: string;
	export let fillBackground: boolean = true;

	function scrollIntoView(event: MouseEvent) {
		const target = event.target as HTMLAnchorElement;
		const el = document.querySelector(target.getAttribute('href')!);
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<a {href} on:click={scrollIntoView} class={fillBackground ? classNameBg : classNameNoBg}>{text}</a>
