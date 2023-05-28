import * as d3 from 'd3';
import * as d3Array from 'd3-array';
import * as d3Sankey from 'd3-sankey';
import { onMount } from 'svelte';
import { construct_svelte_component } from 'svelte/internal';

export function renderSankey() {
	/**
	 * @type {(arg0: any) => void}
	 */

	let sankey;

	onMount(() => {
		// set the dimensions and margins of the diagram
		const margin = { top: 10, right: 100, bottom: 140, left: 10 };
		let parentWidth = window.innerWidth - margin.left - margin.right;
		let height = window.innerHeight - margin.top - margin.bottom;

		// append the svg object to the component
		const svg = d3
			.select('#sankey-diagram')
			.append('svg')
			//.attr("preserveAspectRatio", "xMinYMin slice")
			.attr("viewBox", `0 0 {height} {parentWidth}`)
			.attr("position", "absolute")
			.attr("overflow", "visible")
			.attr("top", "0")
			.attr("left", "0")
			// .attr("width", width)
			// .attr("height", height)
			.append('g')
			.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

		// set the color scale
		var setUnit = function (d) {
			if (d.layer === 0) {
				return ' people called NHS111';
			} else if (d.layer === 1 && d.name != 'No attendance') {
				return ' callers went on to attend';
			} else if (d.layer === 1 && d.name === 'No attendance') {
				return ' callers did not attend an Emergency Department.';
			} else {
				return ' patients';
			}
		};

		var formatNumber = d3.format(',.0f'), // zero decimal places
			format = function (/** @type {number} */ d) {
				return formatNumber(d) + ' patients';
			};

		// set the sankey diagram properties
		sankey = d3Sankey.sankey().nodeWidth(15).nodePadding(30).nodeSort(null).size([parentWidth, height]);


		// load the data
		d3.json('/src/routes/portfolio/sankey/sankey_data.json').then(function (
			/** @type {{ nodes: any; links: any; }} */ data
		) {
			// format the data
			data = {
				nodes: data.nodes.map(
					(
						/** @type {{ name: string; colour: string; index: number; fixedLayer: number; }} */ d
					) => ({
						name: d.name,
						colour: d.colour,
						index: d.index,
						fixedLayer: d.fixedLayer
					})
				),
				links: data.links.map(
					(/** @type {{ source: number; target: number; value: number; }} */ d) => ({
						source: d.source,
						target: d.target,
						value: +d.value
					})
				)
			};

			console.log(data.nodes);
			//console.log(data.links);

			// compute the layout
			
			const test = sankey(data)
			console.log(test)

			// add the color gradient definitions
			const defs = svg.append('defs');
			const linkGradient = defs
				.selectAll('linearGradient')
				.data(data.links)
				.enter()
				.append('linearGradient')
				.attr('id', function (d) {
					return 'linkGradient_' + d.source.index + '_' + d.target.index;
				})
				.attr('gradientUnits', 'userSpaceOnUse')
				.attr('x1', function (d) {
					return d.source.x1;
				})
				.attr('y1', function (d) {
					return d.source.y1;
				})
				.attr('x2', function (d) {
					return d.target.x0;
				})
				.attr('y2', function (d) {
					return d.target.y0;
				});

			linkGradient
				.append('stop')
				.attr('offset', '0%')
				.attr('stop-color', function (d) {
					return d.source.colour;
				});

			linkGradient
				.append('stop')
				.attr('offset', '100%')
				.attr('stop-color', function (d) {
					return d.target.colour;
				});

			// render links
			const link = svg.append("g")
			.selectAll(".link")
			.data(data.links)
			.join("path")
			.attr("class", "link")
			.attr("d", d3Sankey.sankeyLinkHorizontal())
			.attr('fill', 'none')
			.style("stroke-width", function(d) { return Math.max(1, d.width); })
			.style("stroke", function(d) {
				return d3.interpolateViridis(d.source.y / 9);
			})
			.style('stroke', function (d) {
				return 'url(#linkGradient_' + d.source.index + '_' + d.target.index + ')';
			})
			.sort(function (a, b) {
				return b.width - a.width;
			})
			.style('stroke-opacity', '0.5')
			.on('mouseover', function () {
				d3.select(this).style('stroke-opacity', '0.8');
			})
			.on('mouseout', function () {
				d3.select(this).style('stroke-opacity', '0.5');
			})
			.style('stroke-width', function (d) {
				return Math.max(1, d.dy);
			})
			// .sort(function (a, b) {
			// 	return b.width - a.width;
			// })
			.append('title')
			.text(function (d) {
				return d.source.name + ' → ' + d.target.name + '\n' + format(d.value);
			});
			
			// svg
			// 	.append('g')
			// 	.selectAll('.link')
			// 	.data(data.links)
			// 	.enter()
			// 	.append('path')
			// 	.attr('class', 'link')
			// 	.attr('d', d3Sankey.sankeyLinkHorizontal())
			// 	.attr('fill', 'none')
			// 	.attr('stroke-width', function (d) {
			// 		return Math.max(1, d.width);
			// 	})
			// 	.style('stroke', function (d) {
			// 		return 'url(#linkGradient_' + d.source.index + '_' + d.target.index + ')';
			// 	})
			// 	.sort(function (a, b) {
			// 		return b.width - a.width;
			// 	})
			// 	.style('stroke-opacity', '0.4')
			// 	.on('mouseover', function () {
			// 		d3.select(this).style('stroke-opacity', '0.8');
			// 	})
			// 	.on('mouseout', function () {
			// 		d3.select(this).style('stroke-opacity', '0.5');
			// 	})
			// 	.style('stroke-width', function (d) {
			// 		return Math.max(1, d.dy);
			// 	})
			// 	.sort(function (a, b) {
			// 		return b.width - a.width;
			// 	})
			// 	.append('title')
			// 	.text(function (d) {
			// 		return d.source.name + ' → ' + d.target.name + '\n' + format(d.value);
			// 	});

		// const nodes = svg.append("g")
		// 	.selectAll(".node")
		// 	.data(data.nodes)
		// 	.join(function(enter) { return enter; });
	  
		//   // add the nodes
		//   const node = nodes.append("g")
		// 	.attr("class", "node")
		// 	.attr("transform", function(d) { return "translate(" + d.x0 + "," + d.y0 + ")"; })
		// 	.call(d3.drag()
		// 	  .on("drag", function(d) {
		// 		d.y0 = d3.event.y;
		// 		d.y1 = d.y0 + d.dy;
		// 		d3.select(this).attr("transform", "translate(" + d.x0 + "," + d.y0 + ")");
		// 		sankey.update(data);
		// 		link.attr("d", d3Sankey.sankeyLinkHorizontal());
		// 	  }));
	  
		//   node.append("rect")
		// 	.attr("height", function(d) { return d.dy; })
		// 	.attr("width", sankey.nodeWidth())
		// 	.style("fill", function(d) { return d.colour})
		// 	.style("stroke", "#000");
	  
		//   node.append("text")
		// 	.attr("x", -6)
		// 	.attr("y", function(d) { return d.dy / 2; })
		// 	.attr("dy", ".35em")
		// 	.attr("text-anchor", "end")
		// 	.attr("transform", null)
		// 	.text(function(d) { return d.name; })
		// 	.filter(function(d) { return d.x0 < width / 2; })
		// 	.attr("x", 6 + sankey.nodeWidth())
		// 	.attr("text-anchor", "start")
		// 	.style("font-size", "14px");


			const node = svg
				.append('g')
				.selectAll('.node')
				.data(data.nodes)
				.enter()
				.append('g')
				.attr('class', 'node')
				.call(
					d3.drag().on('drag', function (d) {
						d.y0 = d3.event.y;
						d.y1 = d.y0 + d.dy;
						d3.select(this).attr(
							'transform',
							'translate('
							+ d.x0 + "," + d.y0 + ")"
						);
						sankey.update(data);
						link.attr('d', d3Sankey.sankeyLinkHorizontal());
					})
				);

			node
				.append('rect')
				.attr('x', function (d) {
					return d.x0;
				})
				.attr('y', function (d) {
					return d.y0;
				})
				.attr('height', function (d) {
					return d.y1 - d.y0;
				})
				.attr('width', function (d) {
					return d.x1 - d.x0;
				})
				.style('fill', function (d) {
					return d.colour;
				})
				.style('stroke', function (d) {
					return d3.rgb(d.colour).darker();
				})
				.append('title')
				.text(function (d) {
					return d.name + '\n' + format(d.value);
				});

			// add in the title for the nodes
			node
				.append('text')
				.style('font-size', '0.625rem')
				.style('font-weight', '400')
				.attr('x', function (d) {
					return (d.x0 + d.x1) / 2 + 10;
				})
				.attr('y', function (d) {
					return (d.y0 + d.y1) / 2;
				})
				.attr('dy', '.35em')
				.attr('transform', null)
				.text(function (d) {
					if (d.name.includes('Emergency Department')) {
						return d.name.replace('Emergency Department', 'ED');
					} else {
						return d.name;
					}
				})
				.filter(function (d) {
					return d.x0 < parentWidth / 2;
				})
				.attr('text-anchor', 'start');


			// Update the width and height of the chart when the window is resized
			window.addEventListener('resize', function () {
				parentWidth = window.innerWidth - margin.left - margin.right;
				height = window.innerHeight - margin.top - margin.bottom;
				svg.attr('width', parentWidth).attr('height', height);
				sankey.size([parentWidth, height]);
				sankey.update(data);
				node.attr('transform', function (d) {
					return 'translate(' + d.x0 + ',' + d.y0 + ')';
				});
				link.attr('d', d3Sankey.sankeyLinkHorizontal());
			});
		});
	});
}
