<script lang="ts">
	import classNames from 'classnames';
	export let skill: { categories: string; items: string[]; gridColsClass: string };
	$: ({ categories, items, gridColsClass } = skill);
</script>

<section>
	<h1 class="mb-2 font-medium">{categories}</h1>
	<div class={classNames('grid gap-3', gridColsClass)}>
		{#each items as item}
			<p
				class="rounded-sm border border-gray-100 text-center text-gray-500 text-ss font-medium px-1 sm:px-2"
			>
				{item}
			</p>{/each}
	</div>
</section>
