<script lang="ts">
	import { className } from './linkStyle';

	export let text: string;
	export let href: string;
</script>

<a {href} target="_blank" class=" px-[15px] pt-[12px] pb-[9px] mx-[2px] sm:mx-[4px] mb-3 bg-linkBg text-linkText underline font-bold font-robotoMono rounded-full shadow-xl cursor-pointer inline-block tracking-[0.09em]">{text}</a>
