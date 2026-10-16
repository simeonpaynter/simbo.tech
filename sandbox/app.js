const DUMMY_DATA = [
  { id: 'd1', value: 10, region: 'USA'},
  { id: 'd2', value: 6, region: 'INDIA'},
  { id: 'd3', value: 12, region: 'CHINA'}
];

const bg = d3.select('div')
  .classed('plot-bg', true)

const bars = bg
  .selectAll('.bar')
  .data(DUMMY_DATA)
  .enter()
  .append('div')
  .classed('bar', true)
  .style('width', '100px')
  .style('height', (data.value * 10) + 'px');
