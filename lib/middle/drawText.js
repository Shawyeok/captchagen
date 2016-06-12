var getColors = require('../getColors');

module.exports = function(canvas, opt) {
  var ctx = canvas.getContext('2d');

  var colors = getColors(opt.text.length);

  var x = 3;

  opt.text.split('').forEach(function(letter, idx) {
    var color = colors[idx], min, max;
    if (typeof opt.fontsize === 'number') {
      min = max = opt.fontsize;
    } else if (opt.fontsize instanceof Array && opt.fontsize.length == 2) {
      min = opt.fontsize[0];
      max = opt.fontsize[1];
    } else {
      console.warn("Invalid fontsize: %s, use default value [0.4, 0.5]", JSON.stringify(opt.fontsize));
      min = 0.4;
      max = 0.5;
    }
    // set font
    var size = getFontSize(opt.height, opt.width, min, max, opt.font);
    ctx.font = '' + size + 'px ' + opt.font;
    ctx.textBaseline = 'top';
    var te = ctx.measureText(letter);
    var y = Math.floor(((Math.random() * opt.height - size) / 100) + size / 3);
    
    // set color
    ctx.fillStyle = color.css;
    
    // set font rotation
    var rot = getFontRotation();
    ctx.rotate(rot);

    // draw text
    ctx.fillText(letter, x, y);

    // unset rotation for next letter
    ctx.rotate(-rot);

    // space the x-axis for the next letter
    x += te.width + 1;
  });
  return canvas;
};

function getFontSize(height, width, minPercent, maxPercent, font) {
  var min = height * minPercent;
  var max = height * maxPercent;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getFontRotation() {
  return (Math.random() * -0.4) + 0.2;
};