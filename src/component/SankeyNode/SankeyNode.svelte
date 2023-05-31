<script lang="ts">
	import { rgb } from 'd3';
	import { clickStore, nodeTooltipData } from '../../stores';
	import type { TransformedNode } from '../../types/portfolio';

	export let node : TransformedNode;
	export let nodeWidth : number;

	const darkerColor = rgb(node.colour).darker(0.5);

	const edRegex = /Emergency Department/;

	const label =  edRegex.test(node.name) ? node.name.replace('Emergency Department','ED') : node.name

	const getTextAnchorFromNodeLayer = (node: TransformedNode) => {
		switch (node.fixedLayer) {
			case 0:
				return 'end';
			default:
				return 'start';
		}
	};

	const textAnchor = getTextAnchorFromNodeLayer(node);

	const xPadding = 10;

	const getLabelXPositionFromNodeLayer = (node : TransformedNode) => {
		switch (node.fixedLayer) {
			case 0:
				return node.x0 - xPadding;
			default:
				return node.x0 + xPadding + nodeWidth;
		}
	};

	$: labelXPosition = getLabelXPositionFromNodeLayer(node);
	const labelYPosition = node.y1 - (node.y1 - node.y0) / 2
</script>

<rect
	fill={node.colour}
	stroke={darkerColor}
	stroke-width="1"
	rx="3"
	x={node.x0}
	y={node.y0}
	width={nodeWidth}
	height={node.y1 - node.y0}
	on:click={() => {
		clickStore.update((state) => {
			state.node = !state.node;
			console.log('nodestate', state);
			return state;
		});
		nodeTooltipData.update((state) => {
			state.index = node.index;
			return state;
		});
	}}
	on:keydown={() => {
		clickStore.update((state) => {
			state.node = !state.node;
			console.log('nodestate', state);
			return state;
		});
		nodeTooltipData.update((state) => {
			state.index = node.index;
			return state;
		});
	}}
/>
<text
class ="fill-gray-700 hidden md:block"
	x={labelXPosition}
	y={labelYPosition}
	text-anchor={textAnchor}
	dominant-baseline="middle"

>
	{label}
</text>
