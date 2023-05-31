export interface TransformedLink {
	index: number | undefined;
	source: any;
	target: any ;
	value: number | undefined;
	width: number | undefined;
	y0: number | undefined;
	y1: number | undefined;
	x0: number | undefined;
	x1: number | undefined;
}

export interface TransformedNode {
    depth: number;
    height: number;
    index: number;
    colour: string;
    fixedLayer: number;
    directionKey: string;
    layer: number;
    name: string;
    node: number;
    sourceLinks: any;
    targetLinks: any;
    value: number;
    x0: number;
    x1: number;
    y0: number;
    y1: number;
}


