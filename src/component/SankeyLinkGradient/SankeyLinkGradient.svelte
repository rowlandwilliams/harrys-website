<script>
	export let source;
	export let target;
	const gradientId = source.index + '-' + target.index;
</script>

<linearGradient id={gradientId}>
	<stop offset="0%" stop-color={source.colour} />
	<stop offset="100%" stop-color={target.colour} />
</linearGradient>
