<script lang="ts">
	export let bullets: string[];
</script>

<div class="py-2">
	<ul class="text-ss list-outside pl-2.5 list-disc marker:text-indigo-500">
		{#each bullets as bullet}
			<li class="pb-1">{bullet}</li>
		{/each}
	</ul>
</div>