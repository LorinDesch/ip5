import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function CommitmentsBar({ data, width, height }) {


    data = [28, 1, 28, 5, 24, 23, 15,5, 8, 20];
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
            .domain([0, 30]) // update y-axis scale domain to [0, 28]
            .range([height, 0]);

        const xAxis = d3.axisBottom(xScale)
            .tickFormat([])
            .tickSize(0);
        const yAxis = d3.axisLeft(yScale)
            .ticks(5);

        svg.append('g')
            .call(xAxis)
            .attr('transform', `translate(0, ${height})`);
        svg.append('g')
            .call(yAxis);

        svg.selectAll('.bar')
            .data(data)
            .join('rect')
            .attr('class', 'bar')
            .attr('x', (value, index) => xScale(index))
            .attr('y', yScale)
            .attr('width', xScale.bandwidth())
            .attr('height', value => height - yScale(value))
            .attr('fill', 'blue'); // set the fill color of the bars

        svg.selectAll('.label')
            .data(data)
            .join('text')
            .attr('class', 'label')
            .attr('x', (value, index) => xScale(index) + xScale.bandwidth() / 2)
            .attr('y', 0)
            .attr('transform', (value, index) => `rotate(-45 ${xScale(index) + xScale.bandwidth() / 2} 0)`)
            .text((value, index) => groups[index]);
    }, [data, groups, height, width]);




    return <svg ref={svgRef} />;
}

export default CommitmentsBar;
