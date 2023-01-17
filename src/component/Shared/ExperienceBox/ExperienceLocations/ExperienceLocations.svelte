<script lang="ts">
	export let locations: string[];
</script>

<div class="xxs:grid grid-rows-7 xs:flex gap-x-1 text-ss">
	{#each locations as location, i}
		{#if i < 1 && locations.length > 1}
			<div class="xxs:grid row-start-1 row-span-3 xs:flex">{location}</div> 
			<div class="text-indigo-500 xxs:grid row-start-4 row-span-1 xs:flex">&#8226;</div>
		{:else}
			<div class="xxs:grid row-start-5 row-span-3 xs:flex">{location}</div>
		{/if}
	{/each}
</div>