<script lang="ts">
	import { className } from './linkStyle';

	export let text: string;
	export let href: string;
</script>

<a {href} target="_blank" class={className}>{text}</a>
