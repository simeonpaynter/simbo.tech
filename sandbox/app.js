const DUMMY_DATA = [
  { id: 'd1', value: 10, region: 'USA'},
  { id: 'd2', value: 6, region: 'INDIA'},
  { id: 'd3', value: 12, region: 'CHINA'}
];

d3.select('div')
  .selectAll('p')
  .data(DUMMY_DATA)
  .enter()
  .append('p')
  .text(dta => dta.region);
