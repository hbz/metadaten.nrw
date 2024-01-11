<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import ArrowUp from '$lib/components/icons/ArrowUp.svelte';

	onMount(() => {
		if (window && window !== 'undefined') {
			window.onscroll = function () {
				scrollFunction();
			};
		}
	});
	// When the user scrolls down 20px from the top of the document, show the button

	function scrollFunction() {
		const mybutton = document.getElementById('myBtn');
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			mybutton.style.display = 'flex';
		} else {
			mybutton.style.display = 'none';
		}
	}

	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}
</script>

<button
	class="hidden w-9 h-9 z-10 bg-white fixed bottom-2 right-2 rounded-full border-2 border-fuchsia-700 border-opacity-70 items-center justify-center"
	on:click={() => topFunction()}
	id="myBtn"
	title="Go to top"><ArrowUp /></button
>
<slot />
