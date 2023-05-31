<script lang="ts">
	export let source: { index: number; colour: string };
	export let target: { index: number; colour: string };
	const gradientId = source.index + '-' + target.index;
</script>

<linearGradient id={gradientId}>
	<stop offset="0%" stop-color={source.colour} />
	<stop offset="100%" stop-color={target.colour} />
</linearGradient>
