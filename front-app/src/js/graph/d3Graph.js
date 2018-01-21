//import d3 from 'd3'
var d3 = require('d3');

export default class d3Graph {
    constructor(id) {
        this.container = d3.select(id).append('svg').append('g');
    }
    drawRectAngle()	{
        this.container.append('rect')
            .attr('x', 10)
            .attr('y', 10)
            .attr('width', 250)
            .attr('height', 100);
    }

}