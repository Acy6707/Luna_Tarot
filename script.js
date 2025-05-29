const startBtn = document.getElementById('start-button');
const modeSelection = document.getElementById('mode-selection');
const cardArea = document.getElementById('card-area');

const cardData = {
  'card1': { name: "卡牌1", desc: "這是卡牌1的描述" },
  'card2': { name: "卡牌2", desc: "這是卡牌2的描述" },
  // ...
  'card22': { name: "卡牌22", desc: "這是卡牌22的描述" }
};

startBtn.onclick = () => {
  document.getElementById('start-screen').classList.add('hidden');
  modeSelection.classList.remove('hidden');
};

document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.onclick = () => {
    modeSelection.classList.add('hidden');
    setupCards(btn.dataset.mode);
  };
});

function setupCards(mode) {
  cardArea.innerHTML = '';
  cardArea.classList.remove('hidden');

  let positions = [];

  if (mode === 'gift' || mode === 'solo') {
    positions = [ { range: [1, 8] } ];
  } else if (mode === 'triple') {
    positions = [
      { range: [9, 15] },
      { range: [1, 8] },
      { range: [16, 22] }
    ];
  } else if (mode === 'path') {
    positions = [
      { range: [9, 15] },
      { range: [1, 8] },
      { range: [1, 8] },
      { range: [1, 8] },
      { range: [16, 22] }
    ];
  }

  positions.forEach((pos, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    const inner = document.createElement('div');
    inner.className = 'card-inner';

    const back = document.createElement('div');
    back.className = 'card-back';

    const front = document.createElement('div');
    front.className = 'card-front';

    inner.appendChild(back);
    inner.appendChild(front);
    card.appendChild(inner);
    cardArea.appendChild(card);

    card.onclick = () => {
      if (card.classList.contains('flipped')) return;

      const cardNum = getRandomCard(pos.range[0], pos.range[1]);
      const flipped = Math.random() > 0.5;

      front.style.backgroundImage = `url('cards/card${cardNum}.png')`;
      if (flipped) front.style.transform = 'rotateY(180deg) rotateX(180deg)';

      card.classList.add('flipped');

      card.dataset.card = `card${cardNum}`;
      card.onclick = () => showCardDetail(`card${cardNum}`);
    };
  });
}

function getRandomCard(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showCardDetail(cardId) {
  const modal = document.getElementById('card-modal');
  modal.classList.remove('hidden');
  document.getElementById('modal-img').src = `cards/${cardId}.png`;
  document.getElementById('card-title').innerText = `${cardId} - ${cardData[cardId].name}`;
  document.getElementById('card-desc').innerText = cardData[cardId].desc;
}

function closeModal() {
  document.getElementById('card-modal').classList.add('hidden');
}
