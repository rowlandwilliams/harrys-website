<script lang="ts">
	export let skill: { categories: string; items: string[] };
	$: ({ categories, items } = skill);
</script>

<section>
	<h1 class="mb-1">{categories}</h1>
	<div class="grid grid-cols-3 gap-1">
		{#each items as item}
			<p class="rounded-sm border border-gray-100 text-center text-gray-500">
				{item}
			</p>{/each}
	</div>
</section>