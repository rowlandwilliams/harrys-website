<script lang="ts">
	import { sankey } from 'd3-sankey';
	import data from '../portfolio/sankey/sankey_data.json';
	import SankeyLinkGradient from '../../component/SankeyLinkGradient/SankeyLinkGradient.svelte';
	import SankeyLink from '../../component/SankeyLink/SankeyLink.svelte';
	import SankeyNode from '../../component/SankeyNode/SankeyNode.svelte';
	import classNames from 'classnames';
	import { linkIsHovered } from '../../stores';

	let width = 0;
	const height = 600;
	const nodeWidth = 25;
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
		class="relative flex  flex-col items-center font-normal text-sm h-full w-full "
	>
		<svg width="100%" {height}>
			<defs>
				{#each send.links as link}
					<SankeyLinkGradient source={link.source} target={link.target} />
				{/each}
			</defs>
			<g transform={`translate(${paddingX},${paddingY})`}>
				<g id="nodes">
					{#each send.nodes as node}
						<SankeyNode {node} {nodeWidth} />
					{/each}
				</g>
				<g id="links">
					{#each send.links as link}
						<SankeyLink {link} />
					{/each}
				</g>
			</g>
		</svg>
	</section>

	<div
		class={classNames('absolute top-2 left-2 bg-gray-900 text-xs shadow-lg', {
			hidden: !linkIsHovered
		})}
	>
		{#each send.links as link}
			{link.value}
		{/each}
	</div>
</div>
