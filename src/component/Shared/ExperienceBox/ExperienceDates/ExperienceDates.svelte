<script lang="ts">
	import { getMonthDiff, getTimeframe } from '../../../Experience/utils/utils';
	import type { Timeframe } from 'src/types/types';
	export let timeframe: Timeframe;
</script>

<div class="xxs:grid grid-rows-7 xs:flex gap-x-2 text-sm" >
	<div class="text-gray-800 xxs:grid row-start-1 row-span-3 xs:flex">{getTimeframe(timeframe)}</div>
	<div class=" text-indigo-500 xxs:grid row-start-4 row-span-1 xs:flex">&#8226;</div>
	<div class="text-gray-800 xxs:grid row-start-5 row-span-3 xs:flex">{getMonthDiff(timeframe)}</div>
</div>