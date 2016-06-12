var Captcha = require('./lib/Captcha');
var drawBackground = require('./lib/middle/drawBackground');
var drawText = require('./lib/middle/drawText');
var drawLines = require('./lib/middle/drawLines');

module.exports = {
  Captcha: Captcha,

  // stock middleware
  drawBackground: drawBackground,
  drawText: drawText,
  drawLines: drawLines,
  
  // use default settings
  create: function (opt) {
    var cap = new Captcha(opt);
    cap.use(drawBackground);
    cap.use(drawLines);
    cap.use(drawText);
    cap.use(drawLines);
    return cap;
  }
};