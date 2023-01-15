<script lang="ts">
	import type { Timeframe } from 'src/types/types';
	import ExperienceBoxHeader from './ExperienceBoxHeader/ExperienceBoxHeader.svelte';
	import ExperienceBullets from './ExperienceBullet/ExperienceBullet.svelte';
	import ExperienceDates from './ExperienceDates/ExperienceDates.svelte';
	import ExperienceLocations from './ExperienceLocations/ExperienceLocations.svelte';
	export let withArrow = false;
	export let imageColorClass: string;
	export let image: string;
	export let title: string;
	export let employer: string;
	export let bullets: string[];
	export let timeframe: Timeframe;
	export let locations: string[];
</script>

<div
	class="flex max-h-max w-full flex-col gap-y-2 rounded-xl border border-gray-100 p-4 text-xs text-gray-500"
>
	<ExperienceBoxHeader {imageColorClass} {image} {title} {employer} {withArrow} />
	<ExperienceBullets {bullets} />
	<div class="flex justify-between">
		<ExperienceDates {timeframe} />
		<ExperienceLocations {locations} />
	</div>
</div>