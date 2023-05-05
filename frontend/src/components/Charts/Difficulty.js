import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function DifficultyBar({ data, width, height }) {
    const leftLabel = ["leicht", "mittel", "schwer"];
    const rightLabel = ["stark eingeschränkt", "mittelmässig eingeschränkt", "stark eingeschränkt"];
    const klassen = ["Klasse 1", "Klasse 2", "Klasse 3", "Klasse 4", "Klasse 5", "Klasse 6"];
    const dataRight = [0.5, 0.1, 0.8, 0.7, 1, 0.3];
    const dataLeft = [0.7, 0.2, 0.1, 0.3, 0.5, 0.3];

    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height)
            .style('overflow', 'visible');

        // Define the scales for the x-axis and y-axis
        const xScale = d3.scaleBand()
            .domain(klassen)
            .range([0, width])
            .padding(0.5);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(dataLeft.concat(dataRight))])
            .range([height, 0]);

        // Draw the left bars
        const leftBars = svg.append('g')
            .attr('class', 'left-bars')
            .selectAll('rect')
            .data(dataLeft)
            .enter()
            .append('rect')
            .attr('x', (d, i) => xScale(klassen[i]) - xScale.bandwidth()/2 +15)
            .attr('y', d => yScale(d))
            .attr('width', xScale.bandwidth()/2)
            .attr('height', d => height - yScale(d))
            .attr('fill', 'steelblue');

        // Draw the right bars
        const rightBars = svg.append('g')
            .attr('class', 'right-bars')
            .selectAll('rect')
            .data(dataRight)
            .enter()
            .append('rect')
            .attr('x', (d, i) => xScale(klassen[i]) + xScale.bandwidth()/2)
            .attr('y', d => yScale(d))
            .attr('width', xScale.bandwidth()/2)
            .attr('height', d => height - yScale(d))
            .attr('fill', 'orange');

        // Add x-axis and y-axis
        const xAxis = d3.axisBottom(xScale)
            .tickValues(klassen);

        const yAxis = d3.axisLeft(yScale);

        svg.append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0, ${height})`)
            .call(xAxis);

        svg.append('g')
            .attr('class', 'y-axis')
            .call(yAxis);

    }, [data, height, width]);

    return <svg ref={svgRef} />;
}

export default DifficultyBar;
