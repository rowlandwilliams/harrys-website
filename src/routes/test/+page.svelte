<script lang="ts">
	import { sankey, sankeyLinkHorizontal } from 'd3-sankey';
	import data from '../portfolio/sankey/sankey_data.json';
	import { onMount } from 'svelte';

	let containerWidth = 0;
	let svgWidth = 0;

	const updateSvgWidth = () => {
		svgWidth = container.clientWidth;
	};

	const updateContainerWidth = () => {
		containerWidth = container.clientWidth;
		updateSvgWidth();
	};

	let container;

	onMount(() => {
		updateContainerWidth();
		window.addEventListener('resize', updateContainerWidth);
	});

	const height = 600;
	const nodeWidth = 25;
	const padding = 50;
	let vizHeight = height - padding * 2;
	let vizWidth = svgWidth - padding * 2;

	let nodes = [];
	let links = [];

	$: {
		const { nodes: updatedNodes, links: updatedLinks } = sankey()
			.nodeWidth(nodeWidth)
			.nodePadding(30)
			.nodeSort(null)
			.size([vizWidth, vizHeight])(data);

		nodes = updatedNodes;
		links = updatedLinks;
	}

	console.log('nodes', nodes);
	console.log('Svg Width: ', svgWidth);
	console.log('Container Width:', containerWidth)
</script>

<svelte:head>
	<title>Test | Harry Kelleher</title>
</svelte:head>

<section
	bind:this={container}
	class="relative flex flex-grow flex-col bg-yellow-400 items-center font-normal px-4 text-sm h-full w-full "
>
	{#if typeof window !== 'undefined'}
		<svg class="border border-red-500" width={svgWidth} {height}>
			<g transform={`translate(${padding},${padding})`}>
				<g id="nodes">
					{#each nodes as node}
						<rect
							fill={node.colour}
							stroke="black"
							stroke-width="2"
							x={node.x0}
							y={node.y0}
							width={nodeWidth}
							height={node.y1 - node.y0}
						/>
					{/each}
				</g>
				<g id="links">
					{#each links as link}
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
