console.log("Script loaded.");

// script.js

// 從 cards.js 匯入卡片資料（需在 HTML 中先引入 cards.js）
document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.getElementById('card-container');
  const drawButton = document.getElementById('draw-button');
  const result = document.getElementById('result');

  function getRandomCard() {
    const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    const isUpright = Math.random() < 0.5; // 50% 機率正位或逆位
    return { ...card, isUpright };
  }

  function displayCard(card) {
    const orientationText = card.isUpright ? '正位 Upright' : '逆位 Reversed';
    const meaning = card.isUpright ? card.upright : card.reversed;

    result.innerHTML = `
      <div class="card-info">
        <h2>#${card.id} - ${card.name_cn} (${card.name_en})</h2>
        <h3>${orientationText}</h3>
        <p>${meaning}</p>
      </div>
    `;
  }

  drawButton.addEventListener('click', () => {
    const card = getRandomCard();
    displayCard(card);
  });
});
