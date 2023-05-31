import { writable } from 'svelte/store';
import type { TransformedLink } from './types/portfolio';

export const linkTooltipData = writable<Partial<TransformedLink>>({
	source: undefined,
	target: undefined,
	value: undefined,
	x0: undefined,
	x1: undefined,
	y0: undefined,
	y1: undefined
});
export const nodeTooltipData = writable({ index: 0 });
export const hoverStore = writable({ link: false });
export const clickStore = writable({ node: false });
