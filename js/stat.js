'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;

// const PLAYER_BAR_Y = 90;

const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 50;
const FONT_GAP = 20;
const TEXT_WIDTH = 40;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;
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
  ctx.font = '16px PT Mono';
  ctx.fillText(
      `Ура вы победили!`,
      CLOUD_X + FONT_GAP,
      FONT_GAP * 2
  );
  ctx.fillText(
      `Список результатов:`,
      CLOUD_X + FONT_GAP,
      FONT_GAP * 3
  );

  ctx.fillText(
      `1500`,
      CLOUD_X + (1 * GAP) + (0 * TEXT_WIDTH),
      80
  );
  ctx.fillText(
      `Вы`,
      CLOUD_X + (1 * GAP) + (0 * TEXT_WIDTH),
      GAP + BAR_HEIGHT + (3 * FONT_GAP)
  );
  ctx.fillStyle = `rgba(255, 0, 0, 1)`;
  ctx.fillRect(
      // FIRST_PLAYER_BAR_X,
      // FIRST_PLAYER_BAR_Y,
      // FIRST_PLAYER_BAR_WIDTH,
      // FIRST_PLAYER_BAR_HEIGHT
      //
      // 150,
      // 90,
      // 40,
      // 150,
      //
      CLOUD_X + (1 * GAP) + (0 * BAR_WIDTH),
      90,
      BAR_WIDTH,
      BAR_HEIGHT
  );

  ctx.fillStyle = `rgba(0, 0, 0, 1)`;
  ctx.fillText(
      `1500`,
      CLOUD_X + (2 * GAP) + (1 * TEXT_WIDTH),
      80
  );
  ctx.fillText(
      `Кекс`,
      CLOUD_X + (2 * GAP) + (1 * TEXT_WIDTH),
      260
  );
  ctx.fillStyle = `rgba(2, 14, 134, 1)`;
  ctx.fillRect(
      CLOUD_X + (2 * GAP) + (1 * BAR_WIDTH),
      90,
      BAR_WIDTH,
      BAR_HEIGHT
  );

  ctx.fillStyle = `rgba(0, 0, 0, 1)`;
  ctx.fillText(
      `1500`,
      CLOUD_X + (3 * GAP) + (2 * TEXT_WIDTH),
      80
  );
  ctx.fillText(
      `Катя`,
      CLOUD_X + (3 * GAP) + (2 * TEXT_WIDTH),
      260
  );
  ctx.fillStyle = `rgba(2, 14, 134, 0.2)`;
  ctx.fillRect(
      CLOUD_X + (3 * GAP) + (2 * BAR_WIDTH),
      90,
      BAR_WIDTH,
      BAR_HEIGHT
  );

  ctx.fillStyle = `rgba(0, 0, 0, 1)`;
  ctx.fillText(
      `1500`,
      CLOUD_X + (4 * GAP) + (3 * TEXT_WIDTH),
      80
  );
  ctx.fillText(
      `Игорь`,
      CLOUD_X + (4 * GAP) + (3 * TEXT_WIDTH),
      260
  );
  ctx.fillStyle = `rgba(2, 14, 134, 0.6)`;
  ctx.fillRect(
      CLOUD_X + (4 * GAP) + (3 * BAR_WIDTH),
      90,
      BAR_WIDTH,
      BAR_HEIGHT
  );
};