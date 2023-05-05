import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function DifficultyBar({ data, width, height }) {
    const leftLabel = ["leicht", "mittel", "schwer"];
    const rightLabel = ["leicht", "mittel", "stark"];
    const klassen = ["Klasse 1", "Klasse 2", "Klasse 3", "Klasse 4", "Klasse 5", "Klasse 6"];
    const label = ["Schwieirgkeit", "Einschränkung"]

    const colors = ["blue","orange"]
    const dataRight = [0.5, 0.1, 0.8, 0.7, 1, 0.3];
    const dataLeft = [0.7, 0.2, 0.1, 0.3, 0.5, 0.3];

    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height)
            .style('overflow', 'visible');

        const margin = { top: 10, right: 10, bottom: 20, left: 40 };

        const xScale = d3.scaleBand()
            .domain(klassen)
            .range([margin.left, width - margin.right])
            .padding(0.5);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(dataLeft.concat(dataRight))])
            .range([height - margin.bottom, margin.top]);

        const xAxis = d3.axisBottom(xScale)
            .tickValues(klassen);

        const leftYAxis = d3.axisLeft(yScale)
            .ticks(3)
            .tickFormat((d, i) => leftLabel[i]);

        const rightYAxis = d3.axisRight(yScale)
            .ticks(3)
            .tickFormat((d, i) => rightLabel[i]);

        const leftBars = svg.append('g')
            .attr('class', 'left-bars')
            .selectAll('rect')
            .data(dataLeft)
            .enter()
            .append('rect')
            .attr('x', (d, i) => xScale(klassen[i]) - xScale.bandwidth()/2 + 13)
            .attr('y', d => yScale(d))
            .attr('width', xScale.bandwidth()/2)
            .attr('height', d => height - yScale(d) - margin.bottom)
            .attr('fill', colors[0]);

        const rightBars = svg.append('g')
            .attr('class', 'right-bars')
            .selectAll('rect')
            .data(dataRight)
            .enter()
            .append('rect')
            .attr('x', (d, i) => xScale(klassen[i]) + xScale.bandwidth()/2)
            .attr('y', d => yScale(d))
            .attr('width', xScale.bandwidth()/2)
            .attr('height', d => height - yScale(d) - margin.bottom)
            .attr('fill', 'orange');

        svg.append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0, ${height - margin.bottom})`)
            .call(xAxis);


        svg.append('g')
            .attr('class', 'y-axis')
            .attr('transform', `translate(${margin.left}, 0)`)
            .call(leftYAxis)
            .style('color', colors[0]);

        svg.append('g')
            .attr('class', 'y-axis')
            .attr('transform', `translate(${width - margin.right}, 0)`)
            .call(rightYAxis)
            .style('color', colors[1]);

        // Add left y-axis label
        svg.append('text')
            .attr('class', 'axis-label')
            .attr('x', margin.left - 50)
            .attr('y', height / 2)
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'central')
            .attr('transform', 'rotate(-90, ' + (margin.left - 50) + ', ' + (height / 2) + ')')
            .text(label[0])
            .style('fill', colors[0]);

        // Add right y-axis label
        svg.append('text')
            .attr('class', 'axis-label')
            .attr('x', width - margin.right + 50)
            .attr('y', height / 2)
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'central')
            .attr('transform', 'rotate(-90, ' + (width - margin.right + 50) + ', ' + (height / 2) + ')')
            .text(label[1])
            .style('fill', colors[1]);

        const legendWidth = 80 * colors.length;
        const legend = svg.append('g')
            .attr('transform', `translate(${(width - legendWidth) / 2}, ${height - 20})`);

        legend.selectAll('.legend-item')
            .data(colors)
            .join('g')
            .attr('class', 'legend-item')
            .attr('transform', (value, index) => `translate(${index * 120}, 0)`)
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
                    .text((value, index) => label[index])
            });

    }, [data, height, width]);

    return <svg ref={svgRef} />;
}

export default DifficultyBar;
