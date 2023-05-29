<script>
    import { rgb } from 'd3'
	export let node;
	export let nodeWidth;
    const darkerColor = rgb(node.colour).darker(0.5)
    console.log(darkerColor)
</script>

<rect
	fill={node.colour}
	stroke={darkerColor}
    stroke-width=1
    rx = 3
	x={node.x0}
	y={node.y0}
	width={nodeWidth}
	height={node.y1 - node.y0}
/>
