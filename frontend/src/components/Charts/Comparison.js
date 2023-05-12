import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';

/**
 * Component for rendering the Comparison chart.
 *
 * @param {Object} props - The component props.
 * @returns {JSX.Element} The Comparison component.
 */
function Comparison({
                        width,
                        height,
                        squaredLabelLeft,
                        squaredLabelRight,
                        leftLabel,
                        rightLabel,
                        difficultyValueLeftBar,
                        difficultyValueRightBar,
                        selectedOption3,
                        selectedOption2,
                        selectedOption1
                    }) {

    //this needs to be here, otherwise the chart will not be rendered (idk why)
    const data = [];

    const klassen = selectedOption3;
    const label = [squaredLabelLeft, squaredLabelRight];

    const colors = ["#85B3B7", "#D4E09B"];
    const dataRight = difficultyValueRightBar;
    const dataLeft = difficultyValueLeftBar;

    const svgRef = useRef();

    useEffect(() => {

        // Clear the SVG before rendering the new chart
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        // Render the chart
        const svgChart = svg
            .attr('width', width)
            .attr('height', height)
            .style('overflow', 'visible');

        const margin = {top: 10, right: 10, bottom: 20, left: 40};

        const xScale = d3.scaleBand()
            .domain(klassen)
            .range([margin.left, width - margin.right])
            .padding(0.5);

        const yScale = d3.scaleLinear()
            .domain([0, 1])
            .range([height - margin.bottom, margin.top]);

        const rightTickValue = d3.axisBottom(xScale)
            .tickValues(klassen)

        const leftYAxis = d3.axisLeft(yScale)
            .ticks(3)
            .tickFormat((d, i) => leftLabel[i]);

        const rightYAxis = d3.axisRight(yScale)
            .ticks(3)
            .tickFormat((d, i) => rightLabel[i]);

        // Füge zuerst die Gruppe für die horizontalen Linien hinzu
        const horizontalLines = svg.append('g')
            .attr('class', 'horizontal-lines')
            .selectAll('line')
            .data(yScale.ticks(10))
            .enter()
            .append('line')
            .attr('x1', margin.left)
            .attr('y1', d => yScale(d))
            .attr('x2', width - margin.right)
            .attr('y2', d => yScale(d))
            .attr('stroke', 'lightgrey')
            .attr('stroke-width', 1)
            .attr('stroke-dasharray', '4 4');


        // Füge zuletzt die Gruppe für die rechten Bars hinzu
        const rightBars = svg.append('g')
            .attr('class', 'right-bars')
            .selectAll('rect')
            .data(dataRight)
            .enter()
            .append('rect')
            .attr('x', (d, i) => xScale(klassen[i]) + xScale.bandwidth() / 4)
            .attr('y', d => yScale(d))
            .attr('width', xScale.bandwidth() / 2)
            .attr('height', d => height - yScale(d) - margin.bottom)
            .attr('fill', colors[1]);


        svg.append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0, ${height - margin.bottom})`)
            .call(rightTickValue)
            .style('font-size', '12')


        svg.append('g')
            .attr('class', 'y-axis')
            .attr('transform', `translate(${margin.left}, 0)`)
            .call(leftYAxis)
            .style('color', colors[0])
            .style('font-size', '16');

        svg.append('g')
            .attr('class', 'y-axis')
            .attr('transform', `translate(${width - margin.right}, 0)`)
            .call(rightYAxis)
            .style('color', colors[1])
            .style('font-size', '16');


        const legendWidth = 80 * colors.length;
        const legend = svg.append('g')
            .attr('transform', `translate(${(width - legendWidth) / 2}, ${height - 20})`);

        legend.selectAll('.legend-item')
            .data(colors)
            .join('g')
            .attr('class', 'legend-item')
            .attr('transform', (value, index) => `translate(${index * 140}, 0)`)
            .call(g => {
                g.append('rect')
                    .attr('x', 0)
                    .attr('y', -height -13)
                    .attr('width', 15)
                    .attr('height', 15)
                    .attr('fill', value => value);
                g.append('text')
                    .attr('x', 20)
                    .attr('y', -height)
                    .text((value, index) => label[index])
            });


        // Calculate the font size for the text based on the number of left bars
        const textFontSize = 16 - Math.min(dataLeft.length, 6); // Adjust the multiplier as needed

// Add the text displaying selectedOption1 on top of each left bar
        const textOffset = 10;

        const textGroup = svg.append('g')
            .attr('class', 'text-group')
            .selectAll('text')
            .data(dataLeft)
            .enter()
            .append('text')
            .attr('x', (d, i) => xScale(klassen[i]) - xScale.bandwidth() / 4)
            .attr('y', d => yScale(d) - textOffset)
            .attr('text-anchor', 'middle')
            .attr('fill', 'black')
            .style('font-size', `${textFontSize}px`) // Set the font size dynamically
            .text(selectedOption1);

// Füge dann die Gruppe für die linken Bars hinzu
        const leftBars = svg.append('g')
            .attr('class', 'left-bars')
            .selectAll('rect')
            .data(dataLeft)
            .enter()
            .append('rect')
            .attr('x', (d, i) => xScale(klassen[i]) - xScale.bandwidth() / 2)
            .attr('y', d => yScale(d))
            .attr('width', xScale.bandwidth() / 2)
            .attr('height', d => height - yScale(d) - margin.bottom)
            .attr('fill', colors[0]);

// Add the little line behind each left bar
        const lineLength = 10;
        const lineOffset = xScale.bandwidth() * (-0.25);

        const lineGroup = svg.insert('g', '.left-bars') // Use insert() to position the line group behind the bars
            .attr('class', 'line-group')
            .selectAll('line')
            .data(dataLeft)
            .enter()
            .append('line')
            .attr('x1', (d, i) => xScale(klassen[i]) + lineOffset)
            .attr('y1', d => yScale(d) + lineLength / 2)
            .attr('x2', (d, i) => xScale(klassen[i]) + lineOffset)
            .attr('y2', d => yScale(d) - lineLength / 2)
            .attr('stroke', 'black')
            .attr('stroke-width', 1)
            .attr('fill', colors[0]);

    }, [data, height, width]);

    return <svg ref={svgRef}/>;
}

export default Comparison;
