import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';

function CommitmentsBar({data, width, height}) {


    data = [
        0.5, 0.8, 0.2, 0.1,
        0.8, 0.7, 0.8, 0.8,
        0.5, 0.8, 0.2, 0.1,
        0.8, 0.7, 0.8, 0.8,
        0.5, 0.8, 0.2, 0.1,
        0.8, 0.7, 0.8, 0.8,
        0.5, 0.8, 0.2, 0.1,
    ];

    const colors = ['green', 'grey', 'red', 'blue'];
    const yAxisLabels = ['schlecht', 'gelassen', 'grossartig'];
    const groups = ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6", "Tag 7"]

    const svgRef = useRef();
    useEffect(() => {
        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height)
            .style('overflow', 'visible');

        const xScale = d3.scaleBand()
            .domain(d3.range(0, 28))
            .range([0, width])
            .padding(0.5);

        const xAxis = d3.axisBottom(xScale)
            .tickValues([])
            .tickSize(0);

        const yScale = d3.scaleLinear()
            .domain([0, 1])
            .range([height, 0]);

        const yAxis = d3.axisLeft(yScale)
            .tickValues([0, 0.5, 1])
            .tickFormat(d => yAxisLabels[d * 2])


        svg.append('g')
            .call(xAxis)
            .attr('transform', `translate(0, ${height})`);
        svg.append('g')
            .call(yAxis)
            .style('font-size', '16px');


        svg.selectAll('.bar')
            .data(data)
            .join('rect')
            .attr('class', 'bar')
            .attr('x', (value, index) => xScale(index))
            .attr('y', yScale)
            .attr('width', xScale.bandwidth())
            .attr('height', value => height - yScale(value))
            .attr('fill', (value, index) => colors[index % colors.length])
            .each(function (d, i) {
                if (i % 4 === 3) {
                    // Append a line and text to every 4th bar
                    const groupIndex = Math.floor(i / 4);
                    d3.select(this.parentNode)
                        .append('line')
                        .attr('class', 'line')
                        .attr('x1', xScale(i) + xScale.bandwidth() / 2 + 15)
                        .attr('y1', yScale(1))
                        .attr('x2', xScale(i) + xScale.bandwidth() / 2 + 15)
                        .attr('y2', yScale(0))
                        .attr('stroke', 'grey')
                        .attr('stroke-width', 1);
                    d3.select(this.parentNode)
                        .append('text')
                        .attr('class', 'group-text')
                        .attr('x', xScale(i) + xScale.bandwidth() / 2 - 40)
                        .attr('y', yScale(0) + 20)
                        .attr('text-anchor', 'middle')
                        // .attr('fill', 'white')
                        .text(groups[groupIndex])
                }
            });


        const legendWidth = 80 * colors.length;
        const legend = svg.append('g')
            .attr('transform', `translate(${(width - legendWidth) / 2}, ${height - 20})`);

        legend.selectAll('.legend-item')
            .data(colors)
            .join('g')
            .attr('class', 'legend-item')
            .attr('transform', (value, index) => `translate(${index * 80}, 0)`)
            .call(g => {
                g.append('rect')
                    .attr('x', 0)
                    .attr('y', -height)
                    .attr('width', 15)
                    .attr('height', 15)
                    .attr('fill', value => value);
                g.append('text')
                    .attr('x', 20)
                    .attr('y', -height + 13)
                    .text((value, index) => `Woche ${index + 1}`);
            });
    }, [data, height, width, colors]);

    return <svg ref={svgRef}>
        <text x={width / 2} y={-40} textAnchor="middle" fontWeight="bold">
            Wie hast du dich über den Verlauf des Selfcommitments gefühlt?
        </text>
    </svg>

        ;
}

export default CommitmentsBar;
