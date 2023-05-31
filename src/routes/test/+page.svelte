<script lang="ts">
	import { sankey } from 'd3-sankey';
	import data from '../portfolio/sankey/sankey_data.json';
	import nodevalues from '../portfolio/sankey/nodevalues.json';
	import SankeyLinkGradient from '../../component/SankeyLink/SankeyLinkGradient/SankeyLinkGradient.svelte';
	import SankeyLink from '../../component/SankeyLink/SankeyLink.svelte';
	import SankeyNode from '../../component/SankeyNode/SankeyNode.svelte';
	import SankeyLinkTooltip from '../../component/SankeyLink/SankeyLinkTooltip/SankeyLinkTooltip.svelte';
	import SankeyNodeTooltip from '../../component/SankeyNode/SankeyNodeTooltip/SankeyNodeTooltip.svelte';

	let width = 0;
    let innerWidth = 0

	const height = 600;
	const nodeWidth = 25;
	$: paddingX = innerWidth > 768 ? 100 : 10;
	const paddingY = 10;

	$: vizWidth = width - paddingX * 2;
	$: vizHeight = height - paddingY * 2;
	$: send = sankey()
		.nodeWidth(nodeWidth)
		.nodePadding(30)
		.nodeSort(null)
		.size([vizWidth, vizHeight])(data);

	console.log('Links', data.links);
	console.log('Node Values:', nodevalues.data);
</script>

<svelte:head>
	<title>Test | Harry Kelleher</title>
</svelte:head>

<svelte:window bind:innerWidth />

<div class="p-0 md:p-4">
	<section
		bind:clientWidth={width}
		class="relative flex  flex-col items-center font-normal text-sm h-full w-full "
	>
		{#if width > 0}
			<svg width="100%" {height}>
				<defs>
					{#each send.links as link}
						<SankeyLinkGradient source={link.source} target={link.target} />
					{/each}
				</defs>
				<g transform={`translate(${paddingX},${paddingY})`}>
					<g id="links">
						{#each send.links as link}
							<SankeyLink {link} />
						{/each}
					</g>
					<g id="nodes">
						{#each send.nodes as node}
							<SankeyNode {node} {nodeWidth} />
						{/each}
					</g>
				</g>
			</svg>
		{/if}
		<SankeyLinkTooltip />
		<SankeyNodeTooltip />
	</section>
</div>
