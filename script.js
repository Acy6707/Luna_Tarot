const startBtn = document.getElementById('start-button');
const modeSelection = document.getElementById('mode-selection');
const cardArea = document.getElementById('card-area');

const cardData = {
  'card1':  { name: "1 - 【虛月】",       desc: "代表一切的開端，或許也有未被發現的潛力。" },
  'card2':  { name: "2 - 【萌月】",     desc: "代表希望萌生，潛能初次顯現。" },
  'card3':  { name: "3 - 【上弦】",     desc: "象徵行動力湧現，足以面對困境。" },
  'card4':  { name: "4 - 【盈凸】",       desc: "代表" },
  'card5':  { name: "5 - 【滿月】",       desc: "象徵穩定、權威與結構。" },
  'card6':  { name: "6 - 【虧凸】",       desc: "代表傳統、信仰與精神指導。" },
  'card7':  { name: "7 - 【下弦】",       desc: "象徵愛、選擇與關係的和諧。" },
  'card8':  { name: "8 - 【殘月】",       desc: "代表勝利、意志力與控制力。" },
  'card9':  { name: "0-1 - 【裂鏡】",       desc: "象徵內在的勇氣、耐力與慈悲。" },
  'card10': { name: "0-2 - 【夜泣鳥】",       desc: "代表內省、智慧與指引的燈火。" },
  'card11': { name: "0-3 - 【蠍影】",   desc: "象徵命運轉變、循環與機遇。" },
  'card12': { name: "0-4 - 【無聲潮】",       desc: "代表公平、誠實與業力的回應。" },
  'card13': { name: "0-5 - 【斷線者】",       desc: "象徵犧牲、轉化與重新觀點。" },
  'card14': { name: "0-6 - 【灰燼之月】",       desc: "象徵結束、釋放與重生的契機。" },
  'card15': { name: "0-7 - 【命環】",       desc: "代表平衡、耐心與和諧的整合。" },
  'card16': { name: "0-8 - 【反射之眼】",       desc: "象徵束縛、誘惑與陰影面對。" },
  'card17': { name: "0-9 - 【綴星書】",         desc: "代表突變、崩壞與真相顯現。" },
  'card18': { name: "0-10 - 【銀羽】",       desc: "象徵希望、靈感與療癒之光。" },
  'card19': { name: "0-11 - 【夜旅人】",       desc: "代表幻象、直覺與潛意識的不明。" },
  'card20': { name: "0-12 - 【倒影雙生】",       desc: "象徵快樂、成功與正面能量。" },
  'card21': { name: "0-13 - 【夢鉤】",       desc: "代表覺醒、救贖與重新出發。" },
  'card22': { name: "0-14 - 【淚珠燈】",       desc: "象徵圓滿、整合與完成。" }
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
