const DUMMY_DATA = [
  { id: 'd1', value: 10, region: 'USA'},
  { id: 'd2', value: 6, region: 'INDIA'},
  { id: 'd3', value: 12, region: 'CHINA'}
];

const bg = d3.select('svg')
  .classed('plot-bg', true)

const bars = bg
  .selectAll('.bar')
  .data(DUMMY_DATA)
  .enter()
  .append('rect')
  .classed('bar', true)
  .attr('width', 100)
  .attr('height', data => (data.value * 10));
