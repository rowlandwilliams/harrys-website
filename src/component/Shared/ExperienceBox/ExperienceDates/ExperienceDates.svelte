<script lang="ts">
	import { getMonthDiff, getTimeframe } from '../../../Experience/utils/utils';
	import type { Timeframe } from 'src/types/types';
	export let timeframe: Timeframe;
</script>

<div class="flex gap-x-2 text-sm" >
	<div class="text-gray-800">{getTimeframe(timeframe)}</div>
	<div class=" text-indigo-500">&#8226;</div>
	<div class="text-gray-800">{getMonthDiff(timeframe)}</div>
</div>