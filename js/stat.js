'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const renderShadow = function (ctx, x, y, width, height, shadowWidth, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = shadowWidth;
  ctx.strokeRect(x, y, width, height);
};

window.renderStatistics = function (ctx) {
  renderShadow(ctx, 110, 20, 420, 269, 1, `#000000`);
  renderShadow(ctx, 115, 25, 410, 260, 10, `rgba(0, 0, 0, 0.7)`);
  renderShadow(ctx, 99, 9, 421, 271, 1, `#aeb4cd`);
  renderShadow(ctx, 98, 8, 423, 273, 1, `#36499c`);
  renderCloud(ctx, 100, 10, `#fff`);

  ctx.fillStyle = `#000`;
  ctx.fillText('Ура вы победили!', 130, 38);
  ctx.fillText('Список результатов:', 130, 58);

  ctx.fillStyle = `rgba(255, 0, 0, 1)`;
  ctx.fillRect(130, 90, 40, 150);
  ctx.fillStyle = `#000`;
  ctx.fillText('1500', 130, 80);
  ctx.fillText('Вы', 130, 260);

  ctx.fillStyle = `rgba(2, 14, 134, 1)`;
  ctx.fillRect(220, 90, 40, 150);
  ctx.fillStyle = `#000`;
  ctx.fillText('1500', 220, 80);
  ctx.fillText('Кекс', 220, 260);

  ctx.fillStyle = `rgba(2, 14, 134, 0.2)`;
  ctx.fillRect(310, 90, 40, 150);
  ctx.fillStyle = `#000`;
  ctx.fillText('1500', 310, 80);
  ctx.fillText('Катя', 310, 260);

  ctx.fillStyle = `rgba(2, 14, 134, 0.6)`;
  ctx.fillRect(400, 90, 40, 150);
  ctx.fillStyle = `#000`;
  ctx.fillText('1500', 400, 80);
  ctx.fillText('Катя', 400, 260);
};
