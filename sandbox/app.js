const DUMMY_DATA = [
  { id: 'd1', value: 10, region: 'USA'},
  { id: 'd2', value: 6, region: 'INDIA'},
  { id: 'd3', value: 12, region: 'CHINA'}
];

const xScale = d3
  .scaleBand()
  .domain(DUMMY_DATA.map( (datapoint)=> datapoint.region))
  .rangeRound([0, 800]).
  padding(0.2);

const yScale = d3.scaleLinear().domain([0,16]).range([400, 0]);

const bg = d3.select('svg')
  .classed('plot-bg', true)

const bars = bg
  .selectAll('.bar')
  .data(DUMMY_DATA)
  .enter()
  .append('rect')
  .classed('bar', true)
  .attr('width', xScale.bandwidth())
  .attr('height', (data) => 400 - yScale(data.value))
  .attr('x', data => xScale(data.region))
  .attr('y', data => yScale(data.value));
