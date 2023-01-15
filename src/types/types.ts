interface Job {
	title: string;
	employer: string;
	image: string;
	imageColorClass: string;
	bullets: string[];
	timeframe: Timeframe;
	contractType: string[];
	locations: string[];
}

export interface Timeframe {
	start: string;
	end?: string;
}

export type Jobs = Job[];