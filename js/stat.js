'use strict';

window.renderStatistics = function(ctx) {
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 1;
  ctx.strokeRect(110, 20, 420, 266);

  ctx.strokeStyle = 'rgba(0, 0, 0, 0.6)';
  ctx.lineWidth = 10;
  ctx.strokeRect(115, 25, 410, 257);

  ctx.strokeStyle = '#36499c';
  ctx.lineWidth = 1;
  ctx.strokeRect(99, 11, 421, 266);

  ctx.strokeStyle = '#aeb4cd';
  ctx.lineWidth = 1;
  ctx.strokeRect(100, 12, 420, 265);

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 12, 420, 265);
};
