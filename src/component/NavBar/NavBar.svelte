<script lang="ts">
	import DesktopMenu from './DesktopMenu/DesktopMenu.svelte';
	import MobileMenu from './MobileMenu/MobileMenu.svelte';

	$: open = false;

	const handleOpen = () => {
		open = !open;
	};

    const handleClose = () => {
		open = false;
	};

	console.log(open);

</script>

<nav
	class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
>
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="/" class="flex items-center">
			<img src="/static/HK_thumbnail.png" class="h-12 mr-4" alt="Harry Kelleher" />
			<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
				>Harry Kelleher</span
			>
		</a>
		<button
			data-collapse-toggle="navbar-sticky"
			type="button"
			class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			aria-controls="navbar-sticky"
			aria-expanded="false"
			on:click={handleOpen}
		>
			<span class="sr-only" />
			<svg
				class="w-6 h-6"
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
					clip-rule="evenodd"
				/></svg
			>
		</button>
		<DesktopMenu />
		<MobileMenu {open} {handleClose}/>
	</div>
</nav>
