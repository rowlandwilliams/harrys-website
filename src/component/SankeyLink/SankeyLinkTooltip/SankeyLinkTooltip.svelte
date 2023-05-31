<script>
	import { formatTooltipValue } from '../../../routes/portfolio/sankey/utils';
	import { hoverStore, linkTooltipData } from '../../../stores';
	import classNames from 'classnames';

</script>

<div
	class={classNames(
		'absolute bg-gray-900 text-white text-xs shadow-lg p-2 rounded-sm pointer-events-none',
		{
			hidden: !$hoverStore.link
		}
	)}
	style="left:{$linkTooltipData.x1 && $linkTooltipData.x0
		? $linkTooltipData.x1 - ($linkTooltipData.x1 - $linkTooltipData.x0) / 2
		: 0}; top:{$linkTooltipData.y0 ? $linkTooltipData.y0 - 30 : 0}px"
>
	<div>{$linkTooltipData.source} → {$linkTooltipData.target}</div>
	<div>{formatTooltipValue($linkTooltipData.value || 0)} patients</div>
</div>
