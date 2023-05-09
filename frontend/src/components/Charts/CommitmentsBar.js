import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';

function CommitmentsBar({data, width, height}) {

    data = [28, 1, 28, 5, 24, 23, 15, 5, 8, 20];
    const colors = ["blue"];
    const groups = ['Klasse 1', 'Klasse 2', 'Klasse 3', 'Klasse 4', 'Klasse 5', 'Klasse 6', 'Klasse 7', 'Klasse 8', 'Klasse 9', 'Klasse 10'];

    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height)
            .style('overflow', 'visible');

        const xScale = d3.scaleBand()
            .domain(data.map((value, index) => index))
            .range([0, width])
            .padding(0.5);

        const yScale = d3.scaleLinear()
            .domain([0, 28])
            .range([height, 0]);

        const xAxis = d3.axisBottom(xScale)
            .tickFormat((value, index) => groups[index])
            .tickSize(0);

        const yAxis = d3.axisLeft(yScale)
            .ticks(6)
            .tickValues([5, 10, 15, 20, 25, 28]);

        svg.append('g')
            .call(xAxis)
            .attr('transform', `translate(0, ${height})`)
            .selectAll('text')
            .style('font-size', '16px');

        svg.append('g')
            .call(yAxis)
            .selectAll('text')
            .style('fill', 'black')
            .style('font-size', '16px');

        const horizontalLines = d3.axisLeft(yScale)
            .ticks(5)
            .tickSize(-width)
            .tickFormat('')
            .tickSizeOuter(0);

        svg.append('g')
            .call(horizontalLines)
            .attr('class', 'horizontal-lines')
            .selectAll('.tick line')
            .attr('stroke', 'lightgrey')
            .attr('stroke-width', 1)
            .attr('stroke-dasharray', '4 4');

        const group = svg.selectAll('.group')
            .data(data)
            .join('g')
            .attr('class', 'group');

        group.append('rect')
            .attr('class', 'bar')
            .attr('x', (value, index) => xScale(index))
            .attr('y', yScale)
            .attr('width', xScale.bandwidth())
            .attr('height', value => height - yScale(value))
            .attr('fill', 'blue');

        group.each(function (d, i) {
            if (i % 4 === 3) {
                // Append a line and text to every 4th group
                const groupIndex = Math.floor(i / 4);
                d3.select(this)
                    .append('line')
                    .attr('class', 'line')
                    .attr('x1', xScale(i) + xScale.bandwidth() / 2 + 15)
                    .attr('y1', yScale(28))
                    .attr('x2', xScale(i) + xScale.bandwidth() / 2 + 15)
                    .attr('y2', yScale(28) - 30)
                    .attr('stroke', 'grey')
                    .attr('stroke-width', 1);

                d3.select(this)
                    .append('text')
                    .attr('class', 'group-label')
                    .attr('x', xScale(i) + xScale.bandwidth() / 2 + 15)
                    .attr('y', yScale(28) - 35)
                    .text(`Klasse ${groupIndex + 1}`)
                    .style('font-size', '12px')
                    .style('text-anchor', 'middle');
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
                    .text(`Eingelöste Commitments`)
            });
    }, [data, groups, height, width]);

    return <svg ref={svgRef}/>;
}

export default CommitmentsBar;