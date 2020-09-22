'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;

const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 50;
const FONT_GAP = 20;
const TEXT_WIDTH = 40;
const BAR_WIDTH = 40;
// BAR_MAX_Y = 90
const BAR_MAX_Y = CLOUD_Y + (FONT_GAP * 4);
// BAR_MAX_HEIGHT = 150
const BAR_MAX_HEIGHT = CLOUD_HEIGHT - (FONT_GAP * 6);

// from 90 to 240  (range = 150)
const BAR_Y = BAR_MAX_Y + 0;
// from 150 to 0 (range = 150)
const BAR_HEIGHT = BAR_MAX_HEIGHT - 0;

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
  ctx.font = `16px PT Mono`;
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

  let playerIndex = 0;
  let playerName = `Вы`;
  // let players = [`Вы`, `Кекс`, `Катя`, `Игорь`];

  ctx.fillText(
      `${BAR_HEIGHT * 10}`,
      CLOUD_X + ((playerIndex + 1) * GAP) + (playerIndex * TEXT_WIDTH),
      BAR_Y - CLOUD_Y
  );
  ctx.fillText(
      playerName,
      CLOUD_X + ((playerIndex + 1) * GAP) + (playerIndex * TEXT_WIDTH),
      GAP + BAR_MAX_HEIGHT + (3 * FONT_GAP)
  );
  ctx.fillStyle = `rgba(255, 0, 0, 1)`;
  ctx.fillRect(
      // BAR_X,
      // BAR_Y,
      // BAR_WIDTH,
      // BAR_HEIGHT
      //
      // 150,
      // 90,
      // 40,
      // 150,
      //
      CLOUD_X + ((playerIndex + 1) * GAP) + (playerIndex * BAR_WIDTH),
      BAR_Y,
      BAR_WIDTH,
      BAR_HEIGHT
  );

  playerIndex = 1;
  playerName = `Кекс`;

  ctx.fillStyle = `rgba(0, 0, 0, 1)`;
  ctx.fillText(
      `${BAR_HEIGHT * 10}`,
      CLOUD_X + ((playerIndex + 1) * GAP) + (playerIndex * TEXT_WIDTH),
      BAR_Y - CLOUD_Y
  );
  ctx.fillText(
      playerName,
      CLOUD_X + ((playerIndex + 1) * GAP) + (playerIndex * TEXT_WIDTH),
      GAP + BAR_MAX_HEIGHT + (3 * FONT_GAP)
  );
  ctx.fillStyle = `rgba(2, 14, 134, 1)`;
  ctx.fillRect(
      CLOUD_X + ((playerIndex + 1) * GAP) + (playerIndex * BAR_WIDTH),
      BAR_Y,
      BAR_WIDTH,
      BAR_HEIGHT
  );

  playerIndex = 2;
  playerName = `Катя`;

  ctx.fillStyle = `rgba(0, 0, 0, 1)`;
  ctx.fillText(
      `${BAR_HEIGHT * 10}`,
      CLOUD_X + ((playerIndex + 1) * GAP) + (playerIndex * TEXT_WIDTH),
      BAR_Y - CLOUD_Y
  );
  ctx.fillText(
      playerName,
      CLOUD_X + ((playerIndex + 1) * GAP) + (playerIndex * TEXT_WIDTH),
      GAP + BAR_MAX_HEIGHT + (3 * FONT_GAP)
  );
  ctx.fillStyle = `rgba(2, 14, 134, 0.2)`;
  ctx.fillRect(
      CLOUD_X + ((playerIndex + 1) * GAP) + (playerIndex * BAR_WIDTH),
      BAR_Y,
      BAR_WIDTH,
      BAR_HEIGHT
  );

  playerIndex = 3;
  playerName = `Игорь`;

  ctx.fillStyle = `rgba(0, 0, 0, 1)`;
  ctx.fillText(
      `${BAR_HEIGHT * 10}`,
      CLOUD_X + ((playerIndex + 1) * GAP) + (playerIndex * TEXT_WIDTH),
      BAR_Y - CLOUD_Y
  );
  ctx.fillText(
      playerName,
      CLOUD_X + ((playerIndex + 1) * GAP) + (playerIndex * TEXT_WIDTH),
      GAP + BAR_MAX_HEIGHT + (3 * FONT_GAP)
  );
  ctx.fillStyle = `rgba(2, 14, 134, 0.6)`;
  ctx.fillRect(
      CLOUD_X + ((playerIndex + 1) * GAP) + (playerIndex * BAR_WIDTH),
      BAR_Y,
      BAR_WIDTH,
      BAR_HEIGHT
  );
};
