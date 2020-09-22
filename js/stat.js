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

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const renderShadow = function (ctx, x, y, width, height, shadowWidth, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = shadowWidth;
  ctx.strokeRect(x, y, width, height);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
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

  const palyersColor = [
    `rgba(255, 0, 0, 1)`,
    `rgba(2, 14, 134, 1)`,
    `rgba(2, 14, 134, 0.2)`,
    `rgba(2, 14, 134, 0.6)`
  ];

  const maxTime = getMaxElement(times);
  players.sort((a, b) => {
    if (a === `Вы`) {
      return -100;
    } else {
      return a - b;
    }
  });

  for (let i = 0; i < players.length; i++) {
    // deltaTime in range from 0 to 1
    const BAR_X = CLOUD_X + ((i + 1) * GAP) + (i * BAR_WIDTH);
    const deltaTime = 1 - (times[i] / maxTime);
    const barY = BAR_MAX_Y + (BAR_MAX_HEIGHT * deltaTime);
    const barHeight = BAR_MAX_HEIGHT - (BAR_MAX_HEIGHT * deltaTime);
    const playerScore = Math.round(barHeight * 26.833);
    const TEXT_X = CLOUD_X + ((i + 1) * GAP) + (i * TEXT_WIDTH);
    const textY = barY - CLOUD_Y;
    const TEXT_Y = GAP + BAR_MAX_HEIGHT + (3 * FONT_GAP);

    ctx.fillStyle = `rgba(0, 0, 0, 1)`;

    ctx.fillText(
        `${playerScore}`,
        TEXT_X,
        textY
    );
    ctx.fillText(
        players[i],
        TEXT_X,
        TEXT_Y
    );

    ctx.fillStyle = palyersColor[i];

    ctx.fillRect(
        BAR_X,
        barY,
        BAR_WIDTH,
        barHeight
    );
  }
};
