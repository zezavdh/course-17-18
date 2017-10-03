'use strict';

/* Based on https://bl.ocks.org/mbostock/3887118 by Mike Bostock. */

/* Define margins and size — https://bl.ocks.org/mbostock/3019563. */
var margin = {top: 48, right: 48, bottom: 48, left: 48};
var width = 960 - margin.l - margin.r;
var height = 500 - margin.t - margin.b;

/* Scales and axes. */
var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);
var color = d3.scale.ordinal().range(['#fe2f2f', '#feca2f', '#96fe2f']);
var xAxis = d3.svg.axis().scale(x).orient('bottom');
var yAxis = d3.svg.axis().scale(y).orient('left');

/* Size SVG. */
var svg = d3
  .select('svg')
  .attr('viewBox', [
    0,
    0,
    margin.l + width + margin.r,
    margin.t + height + margin.b
  ].join(' '))
  .append('g')
  .attr('transform', 'translate(' + margin.l + ',' + margin.t + ')');

/* Load data. */
d3.tsv('index.tsv', row, onload);

/* Handle data. */
function onload(data) {
  x.domain(d3.extend(data, sepalWidth)).nice();
  y.domain(d3.extend(data, sepalLength)).nice();

  svg
    .append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxis)
    .append('text')
    .attr('class', 'label')
    .attr('x', width)
    .attr('y', -6)
    .style('text-anchor', 'end')
    .text('Sepal Width (cm)');

  svg
    .append('g')
    .attr('class', 'y axis')
    .call(yAxis)
    .append('text')
    .attr('class', 'label')
    .attr('transform', 'rotate(-90)')
    .attr('y', 8)
    .attr('dy', 8)
    .style('text-anchor', 'end')
    .text('Sepal Length (cm)')

  svg
    .selectAll('.dot')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'dot')
    .attr('r', 4)
    .attr('cx', cx)
    .attr('cy', cy)
    .style('fill', fill);

  var legend = svg
    .selectAll('.legend')
    .data(color.domain())
    .enter()
    .append('g')
    .attr('class', 'legend')
    .attr('transform', labelTransform);

  legend
    .append('rect')
    .attr('x', width - 16)
    .attr('width', 16)
    .attr('height', 16)
    .style('fill', color);

  legend
    .append('text')
    .attr('x', width - 24)
    .attr('y', 12)
    .style('text-anchor', 'end')
    .text(String);
}

function cx(d) {
  return x(sepalWidth(d));
}

function cy(d) {
  return y(sepalLength(d));
}

function fill(d) {
  return color(species(d));
}

function labelTransform(d, i) {
  return 'translate(0,' + i * 20 + ')';
}

function row(d) {
  d.sepalLength = Number(sepalLength(d));
  d.sepalWidth = Number(sepalWidth(d));
  return d;
}

function species(d) {
  return d.species;
}

function sepalWidth(d) {
  return d.sepalWidth;
}

function sepalLength(d) {
  return d.sepalLength;
}
