window.$ = window.jQuery = require('jquery')
window.Popper = require('popper.js')
require('bootstrap')
import '../scss/index.scss';

import d3Graph from './graph/d3Graph.js';
let graph = new d3Graph('#graph');
graph.drawRectAngle();




console.log("hello world!")

// use tooltip and popover components everywhere
$(function (){
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})
