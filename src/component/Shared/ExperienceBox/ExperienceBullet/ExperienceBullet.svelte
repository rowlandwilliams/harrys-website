<script lang="ts">
	export let bullets: string[];
</script>

<div class="py-2">
	<ul class="list-inside list-disc marker:text-indigo-500">
		{#each bullets as bullet}
			<li class="">{bullet}</li>
		{/each}
	</ul>
</div>