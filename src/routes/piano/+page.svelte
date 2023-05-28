<svelte:head>
	<title>Piano | Harry Kelleher</title>
</svelte:head>

<script>
	let width;
</script>

<section bind:clientWidth={width}
	class="flex flex-col items-center font-normal px-4 text-sm w-full "
>
	<p>
		Hi, I'm Harry, and I like to play the piano.
	</p>
	<svg class="border border-red-500" width={width}>
		
	</svg>
</section>
