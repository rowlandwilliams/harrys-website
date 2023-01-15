<script lang="ts">
	import Section from '../Section/Section.svelte';
	export let rowHeader: string;
</script>

<Section>
	<div class="flex">
		<div class="w-24 flex-shrink-0 font-medium text-indigo-500">{rowHeader}</div>
		<div class="flex-grow text-gray-700">
			<slot />
		</div>
	</div>
</Section>