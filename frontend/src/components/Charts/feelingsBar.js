import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function CommitmentsBar({ data, width, height }) {




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
            .domain([0, height])
            .range([height, 0]);

        const xAxis = d3.axisBottom(xScale)
            .ticks(data.length);
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
            .attr('x', (value, index) => xScale(index))
            .attr('y', yScale)
            .attr('width', xScale.bandwidth())
            .attr('height', value => height - yScale(value));
    }, [data, height, width]);

    return <svg ref={svgRef} />;
}

export default CommitmentsBar;
