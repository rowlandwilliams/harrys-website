<script>
	import { sankeyLinkHorizontal } from 'd3-sankey';

	export let link;
    let hovered = false

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
	stroke={strokeGradient}
	d={sankeyLinkHorizontal()(link)}
	stroke-width={Math.max(1, link.width)}
    opacity={hovered ? 0.89 : 0.65}
    on:mouseover={() => handleMouseOver()}
    on:focus={() => handleMouseOver()}
    on:mouseout={() => handleMouseOut()}
    on:blur={() => handleMouseOut()}
/>
/>
