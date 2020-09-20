'use strict';

window.renderStatistics = function (ctx) {
  ctx.strokeStyle = `#000000`;
  ctx.lineWidth = 1;
  ctx.strokeRect(110, 20, 420, 269);

  ctx.strokeStyle = `rgba(0, 0, 0, 0.7)`;
  ctx.lineWidth = 10;
  ctx.strokeRect(115, 25, 410, 260);

  ctx.fillStyle = `#ffffff`;
  ctx.fillRect(100, 10, 420, 270);

  ctx.strokeStyle = `#aeb4cd`;
  ctx.lineWidth = 1;
  ctx.strokeRect(99, 9, 421, 271);

  ctx.strokeStyle = `#36499c`;
  ctx.lineWidth = 1;
  ctx.strokeRect(98, 8, 423, 273);
};
