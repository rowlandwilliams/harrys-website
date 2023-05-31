<script lang="ts">
	import { sankeyLinkHorizontal } from 'd3-sankey';
	import { hoverStore, linkTooltipData } from '../../stores';
	import type { TransformedLink } from '../../types/portfolio';

	export let link: TransformedLink;
	let hovered = false;

	const gradientId = link.source.index + '-' + link.target.index;
	const strokeGradient = `url(#${gradientId})`;
	const handleMouseOver = () => {
		hovered = true;
	};

	const handleMouseOut = () => {
		hovered = false;
	};
</script>

<path
	fill="none"
	class="outline-none"
	stroke={strokeGradient}
	d={sankeyLinkHorizontal()(link)}
	stroke-width={link.width ? Math.max(1, link.width) : undefined}
	opacity={hovered ? 0.89 : 0.65}
	on:mouseenter={() => {
		hoverStore.update((state) => {
			state.link = true;
			return state;
		});
		linkTooltipData.update((state) => {
			state.source = link.source.name;
			state.target = link.target.name;
			state.value = link.value;
			state.x0 = link.target.x0;
			state.x1 = link.source.x1;
			state.y0 = link.y0;
			state.y1 = link.y1;
			return state;
		});
	}}
	on:mouseleave={() => {
		hoverStore.update((state) => {
			state.link = false;
			return state;
		});
		linkTooltipData.update((state) => {
			state.source = undefined;
			state.target = undefined;
			state.value = undefined;
			state.x0 = undefined;
			state.x1 = undefined;
			state.y0 = undefined;
			state.y1 = undefined;
			return state;
		});
	}}
	on:mouseover={() => handleMouseOver()}
	on:focus={() => handleMouseOver()}
	on:mouseout={() => handleMouseOut()}
	on:blur={() => handleMouseOut()}
/>
/>
