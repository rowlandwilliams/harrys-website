<script lang="ts">
	import { sankey, sankeyLinkHorizontal } from 'd3-sankey';
	import data from '../portfolio/sankey/sankey_data.json';

	let width = 0;
	const height = 600;
	const nodeWidth = 30;
	const paddingX = 10;
	const paddingY = 10;

	$: vizWidth = width - paddingX * 2;
	$: vizHeight = height - paddingY * 2;
	$: send = sankey()
		.nodeWidth(nodeWidth)
		.nodePadding(30)
		.nodeSort(null)
		.size([vizWidth, vizHeight])(data);
</script>

<svelte:head>
	<title>Test | Harry Kelleher</title>
</svelte:head>

<div class="p-0 md:p-4">
	<section
		bind:clientWidth={width}
		class="relative flex  flex-col items-center font-normal  text-sm h-full w-full "
	>
		{#if width > 0}
			<svg width="100%" {height}>
				<g transform={`translate(${paddingX},${paddingY})`}>
					<g id="nodes">
						{#each send.nodes as node}
							<rect
								fill={node.colour}
								class="stroke-gray-400"
								stroke-width=""
								x={node.x0}
								y={node.y0}
								width={nodeWidth}
								height={node.y1 - node.y0}
							/>
						{/each}
					</g>
					<g id="links">
						{#each send.links as link}
							<path
								fill="none"
								opacity="0.2"
								stroke="red"
								d={sankeyLinkHorizontal()(link)}
								stroke-width={Math.max(1, link.width)}
							/>
						{/each}
					</g>
				</g>
			</svg>
		{/if}
	</section>
</div>
