<script lang="ts">
	export let locations: string[];
</script>

<div class="flex gap-x-1 text-ss pt-2.5 xs:p-0 justify-end ">
	{#each locations as location, i}
		{#if i < 1 && locations.length > 1}
			<p>{location} <span class="text-indigo-500">&#8226; </span></p>
		{:else}
			<p>{location}</p>
		{/if}
	{/each}
</div>