'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;

const FIRST_PLAYER_NAME_X = 130;
const FIRST_PLAYER_NAME_Y = 260;
const FIRST_PLAYER_BAR_X = 130;
const FIRST_PLAYER_BAR_Y = 90;
const FIRST_PLAYER_BAR_WIDTH = 40;
const FIRST_PLAYER_BAR_HEIGHT = 150;

const CLOUD_X = 100;
const CLOUD_Y = 10;
// const FONT_GAP = 20;
// const GAP = 50;
// let barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

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
  renderShadow(ctx, 110, 20, 420, 269, 1, `rgba(0, 0, 0, 1)`);
  renderShadow(ctx, 115, 25, 410, 260, 10, `rgba(0, 0, 0, 0.7)`);
  renderShadow(ctx, 99, 9, 421, 271, 1, `rgba(174, 180, 205, 1)`);
  renderShadow(ctx, 98, 8, 423, 273, 1, `rgba(54, 73, 156, 1)`);

  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `rgba(255, 255, 255, 1)`
  );

  ctx.fillStyle = `rgba(0, 0, 0, 1)`;
  ctx.fillText(`Ура вы победили!`, 130, 38);
  ctx.fillText(`Список результатов:`, 130, 58);

  ctx.fillText(`1500`, 130, 80);
  ctx.fillText(
      `Вы`,
      FIRST_PLAYER_NAME_X,
      FIRST_PLAYER_NAME_Y
  );
  ctx.fillStyle = `rgba(255, 0, 0, 1)`;
  ctx.fillRect(
      FIRST_PLAYER_BAR_X,
      FIRST_PLAYER_BAR_Y,
      FIRST_PLAYER_BAR_WIDTH,
      FIRST_PLAYER_BAR_HEIGHT
  );

  ctx.fillStyle = `rgba(0, 0, 0, 1)`;
  ctx.fillText(`1500`, 220, 80);
  ctx.fillText(`Кекс`, 220, 260);
  ctx.fillStyle = `rgba(2, 14, 134, 1)`;
  ctx.fillRect(220, 90, 40, 150);

  ctx.fillStyle = `rgba(0, 0, 0, 1)`;
  ctx.fillText(`1500`, 310, 80);
  ctx.fillText(`Катя`, 310, 260);
  ctx.fillStyle = `rgba(2, 14, 134, 0.2)`;
  ctx.fillRect(310, 90, 40, 150);

  ctx.fillStyle = `rgba(0, 0, 0, 1)`;
  ctx.fillText(`1500`, 400, 80);
  ctx.fillText(`Игорь`, 400, 260);
  ctx.fillStyle = `rgba(2, 14, 134, 0.6)`;
  ctx.fillRect(400, 90, 40, 150);
};
