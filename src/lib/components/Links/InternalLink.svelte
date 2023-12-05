<script lang="ts">
	import { classNameBg } from './linkStyle';
	import { classNameNoBg } from './linkStyle';

	export let text: string;
	export let href: string;
	export let fillBackground: boolean = true;
</script>

<a {href} class={fillBackground ? classNameBg : classNameNoBg}>{text}</a>
