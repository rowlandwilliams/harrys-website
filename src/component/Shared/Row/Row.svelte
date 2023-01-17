<script lang="ts">
	import Section from '../Section/Section.svelte';
	export let rowHeader: string;
</script>

<Section>
	<div class="flex flex-col sm:flex-row space-y-2 md:space-y-0">
		<div class="w-24 flex-shrink-0 text-base font-medium text-indigo-500 ">{rowHeader}</div>
		<div class="flex-grow text-gray-800">
			<slot />
		</div>
	</div>
</Section>