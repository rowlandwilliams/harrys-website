<script>
	import nodevalues from '../../../routes/portfolio/sankey/nodevalues.json';
	import { formatTooltipValue } from '../../../routes/portfolio/sankey/utils';
	import { clickStore, nodeTooltipData } from '../../../stores';
	import classNames from 'classnames';

	const nodes = nodevalues.data;
	console.log(nodes);
</script>

<div
	class={classNames(
		'absolute bg-gray-100 text-gray-700 text-xs shadow-lg space-y-2 p-3 rounded-md -translate-x-1/2 pointer-events-none',
		{
			hidden: !$clickStore.node
		}
	)}
>
	<h1 class="font-semibold text-sm">{nodes[$nodeTooltipData.index].name}</h1>
	<div>
		<p>{formatTooltipValue(nodes[$nodeTooltipData.index].nodeSum)} patients</p>
		<p>{nodes[$nodeTooltipData.index].percent}% of total</p>
	</div>
</div>
