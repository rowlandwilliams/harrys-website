<script lang="ts">
	import classNames from 'classnames';
	export let withArrow: boolean;
	export let imageColorClass: string;
	export let image: string;
	export let title: string;
	export let employer: string;
</script>

<div class="flex justify-between">
	<div class="flex items-center gap-x-2">
		<div class={classNames('flex items-center w-8 h-8 p-1.5 rounded-full', imageColorClass)}>
			<img src={`images/${image}`} alt="flow" />
		</div>
		<div>
			<h1 class="font-medium text-gray-800">{title}</h1>
			<h2 class="hover:text-indigo-500 hover:underline ">{employer}</h2>
		</div>
	</div>
	{#if withArrow}
		<div class="text-right text-indigo-500">&#x2192;</div>
	{/if}
</div>