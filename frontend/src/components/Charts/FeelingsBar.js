import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';
import {getSchluesseSelectedDropdown1} from "../helperFunctions/HelperFunctions";


/**
 * Component for rendering the Feelings Bar chart.
 */
function FeelingsBar({
                         fakeData,
                         selectedOption1,
                         selectedOption2,
                         width,
                         height
                     }) {

    // Get the selected commitment ID based on the selectedOption2
    const cId = fakeData.commitments.filter(commitment => commitment.commitmentname === selectedOption2)[0].commitmentid;

    let data = [];

    if (cId > 0) {
        const uId = fakeData.users.find((user) => user.username === selectedOption1)?.userid;
        if (uId !== undefined) {

            // Get the feelings array based on the selectedCommitmentId and the selectedUserId
            const diariesFromCiD = fakeData.diary.filter((diary) => diary.commitmentid === cId);
            const selectedDiaries = diariesFromCiD.filter((diary) => diary.userid === uId);
            const feelingsArray = selectedDiaries.map((diary) => diary.feelings);

            // Merge all the feelings arrays into a single array
            data = feelingsArray.reduce((acc, feelings) => [...acc, ...feelings], []);

            const schluesseChallengeUserGroup = getSchluesseSelectedDropdown1(selectedOption1, selectedOption2, fakeData);
            if (schluesseChallengeUserGroup[0] === "-") {
                data = [];
            } else {
                data = data.slice(0, 28);
            }
        } else {
            const groupOfUsers = fakeData.groups.find(group => group.groupname === selectedOption1)?.users || [];
            const diariesFromCiD = fakeData.diary.filter(diary => diary.commitmentid === cId);
            const selectedDiaries = diariesFromCiD.filter(diary => groupOfUsers.includes(diary.userid));
            const feelingsArray = selectedDiaries.map(diary => diary.feelings);
            data = feelingsArray.reduce((acc, feelings) => {
                if (acc.length === 0) {
                    return feelings;
                } else {
                    return acc.map((value, index) => (value + feelings[index]) / 2);
                }
            }, []);
        }
    }


    const colors = ['#135210', '#73796E', '#FF897D', '#85B3B7'];
    const yAxisLabels = ['schlecht', 'gelassen', 'grossartig'];
    const groups = ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6", "Tag 7"]

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


        svgChart.append('g')
            .call(xAxis)
            .attr('transform', `translate(0, ${height})`);
        svgChart.append('g')
            .call(yAxis)
            .style('font-size', '16px');


        const horizontalLines = d3.axisLeft(yScale)
            .ticks(10)
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
            .attr('fill', (value, index) => colors[index % colors.length]);

        group.each(function (d, i) {
            if (i % 4 === 3) {
                // Append a line and text to every 4th bar
                const groupIndex = Math.floor(i / 4);
                d3.select(this)
                    .append('line')
                    .attr('class', 'line')
                    .attr('x1', xScale(i) + xScale.bandwidth() / 2 + 15)
                    .attr('y1', yScale(1))
                    .attr('x2', xScale(i) + xScale.bandwidth() / 2 + 15)
                    .attr('y2', yScale(0))
                    .attr('stroke', 'grey')
                    .attr('stroke-width', 1);
                d3.select(this)
                    .append('text')
                    .attr('class', 'group-text')
                    .attr('x', xScale(i) + xScale.bandwidth() / 2 - 40)
                    .attr('y', yScale(0) + 20)
                    .attr('text-anchor', 'middle')
                    .text(groups[groupIndex])
            }
        });


        const legendWidth = 80 * colors.length;
        const legend = svg.append('g')
            .attr('transform', `translate(${(width - legendWidth) / 2}, ${height - 20})`);

        legend.append('text')
            .attr('x', legendWidth / 2)
            .attr('y', -height - 30)
            .attr('text-anchor', 'middle')
            .style('font-weight', 'bold')
            .text('Wie hast du dich über den Verlauf des Commitments gefühlt?');


        legend.selectAll('.legend-item')
            .data(colors)
            .join('g')
            .attr('class', 'legend-item')
            .attr('transform', (value, index) => `translate(${index * 100}, 0)`)
            .call(g => {
                g.append('rect')
                    .attr('x', -10)
                    .attr('y', -height - 5)
                    .attr('width', 15)
                    .attr('height', 15)
                    .attr('fill', value => value);
                g.append('text')
                    .attr('x', 10)
                    .attr('y', -height + 10)
                    .text((value, index) => `Woche ${index + 1}`);
            });
    }, [data, height, width, colors]);

    return (<svg className="feelingsbar" ref={svgRef}>
        <text x={width / 2} y={-40} textAnchor="middle" fontWeight="bold">
            Wie hast du dich über den Verlauf des Selfcommitments gefühlt?
        </text>
    </svg>);
}

export default FeelingsBar;