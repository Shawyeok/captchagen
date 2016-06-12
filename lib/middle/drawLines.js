var getColors = require('../getColors');
var randomBetween = require('../randomBetween');

module.exports = function(canvas, opt) {
  var ctx = canvas.getContext('2d'), lines;
  if (typeof opt.lines === 'number') {
    lines = opt.lines;
  } else if (opt.lines instanceof Array) {
    lines = randomBetween.apply(null, opt.lines);
  } else {
    console.warn("Invalid lines: %s, use default value 3", opt.lines);
    lines = 3;
  }
  var colors = getColors(lines);

  colors.forEach(function(color) {
    ctx.beginPath();
    ctx.moveTo(randomBetween(0, opt.width), randomBetween(0, opt.height));
    ctx.bezierCurveTo(randomBetween(0, opt.height), randomBetween(0, opt.height), randomBetween(0, opt.width), randomBetween(0, opt.height), randomBetween(0, opt.width), randomBetween(0, opt.height));
    
    ctx.fillStyle = ctx.strokeStyle = color.css;
    ctx.lineWidth = opt.lineWidth;
    return ctx.stroke();
  });
  return canvas;
};

