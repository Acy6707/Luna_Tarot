console.log("Script loaded.");

// script.js

const startButton = document.getElementById('startButton');
const modeButtonsContainer = document.getElementById('modeButtons');
const cardArea = document.getElementById('cardArea');
const cardModal = document.getElementById('cardModal');
const modalImage = document.getElementById('modalImage');
const modalInfo = document.getElementById('modalInfo');
const closeModal = document.getElementById('closeModal');

const cardData = [
  { id: 1, nameZh: '新月', nameEn: 'New Moon', upright: '開始、新機會', reversed: '遲疑、延遲' },
  { id: 2, nameZh: '盈眉月', nameEn: 'Waxing Crescent', upright: '希望、成長', reversed: '不安、迷惘' },
  { id: 3, nameZh: '上弦月', nameEn: 'First Quarter', upright: '挑戰、決斷', reversed: '阻力、緩慢' },
  { id: 4, nameZh: '盈凸月', nameEn: 'Waxing Gibbous', upright: '充實、準備', reversed: '拖延、迷惑' },
  { id: 5, nameZh: '滿月', nameEn: 'Full Moon', upright: '成果、光明', reversed: '混亂、壓力' },
  { id: 6, nameZh: '虧凸月', nameEn: 'Waning Gibbous', upright: '釋放、反思', reversed: '否認、執著' },
  { id: 7, nameZh: '下弦月', nameEn: 'Last Quarter', upright: '整頓、結束', reversed: '困難、倦怠' },
  { id: 8, nameZh: '殘月', nameEn: 'Waning Crescent', upright: '轉化、療癒', reversed: '拖延、悲觀' },
  { id: 9, nameZh: '影徑I', nameEn: 'Shadow Path I', upright: '潛意識、內省', reversed: '逃避、否定' },
  { id: 10, nameZh: '影徑II', nameEn: 'Shadow Path II', upright: '試煉、重塑', reversed: '混亂、抵抗' },
  { id: 11, nameZh: '影徑III', nameEn: 'Shadow Path III', upright: '通過、成長', reversed: '迷失、疲憊' },
  { id: 12, nameZh: '影徑IV', nameEn: 'Shadow Path IV', upright: '覺醒、突破', reversed: '障礙、壓抑' },
  { id: 13, nameZh: '影徑V', nameEn: 'Shadow Path V', upright: '重生、平衡', reversed: '恐懼、猶豫' },
  { id: 14, nameZh: '影徑VI', nameEn: 'Shadow Path VI', upright: '融合、釋懷', reversed: '矛盾、執迷' },
  { id: 15, nameZh: '映象I', nameEn: 'Reflection I', upright: '照見、意識', reversed: '模糊、壓制' },
  { id: 16, nameZh: '映象II', nameEn: 'Reflection II', upright: '觀照、自省', reversed: '逃避、錯覺' },
  { id: 17, nameZh: '映象III', nameEn: 'Reflection III', upright: '真理、領悟', reversed: '錯誤、幻覺' },
  { id: 18, nameZh: '映象IV', nameEn: 'Reflection IV', upright: '沉澱、理解', reversed: '膚淺、混淆' },
  { id: 19, nameZh: '映象V', nameEn: 'Reflection V', upright: '融合、昇華', reversed: '逃避、自閉' },
  { id: 20, nameZh: '映象VI', nameEn: 'Reflection VI', upright: '重構、重生', reversed: '重複、固執' },
  { id: 21, nameZh: '映象VII', nameEn: 'Reflection VII', upright: '完整、結束', reversed: '未完成、延宕' },
  { id: 22, nameZh: '映象Ω', nameEn: 'Reflection Omega', upright: '終章、新生', reversed: '重啟、迷惘' }
];

startButton.addEventListener('click', () => {
  startButton.classList.add('hidden');
  modeButtonsContainer.classList.remove('hidden');
});

function createCard(position, cardIndexRange) {
  const card = document.createElement('div');
  card.className = 'card';
  const back = document.createElement('img');
  back.src = 'cards/back.png';
  back.className = 'card-back';
  const front = document.createElement('img');
  const randomIndex = cardIndexRange[Math.floor(Math.random() * cardIndexRange.length)];
  front.src = `cards/card${randomIndex}.png`;
  front.className = 'card-front';
  front.style.transform = Math.random() < 0.5 ? 'rotateY(180deg) rotateX(180deg)' : 'rotateY(180deg)';
  card.dataset.cardId = randomIndex;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', () => {
    if (!card.classList.contains('flipped')) {
      card.classList.add('flipped');
    } else {
      const data = cardData.find(c => c.id === parseInt(card.dataset.cardId));
      modalImage.src = front.src;
      modalInfo.innerHTML = `
        <p><strong>編號：</strong>${data.id}</p>
        <p><strong>中文名稱：</strong>${data.nameZh}</p>
        <p><strong>英文名稱：</strong>${data.nameEn}</p>
        <p><strong>正位象徵：</strong>${data.upright}</p>
        <p><strong>逆位象徵：</strong>${data.reversed}</p>
      `;
      cardModal.classList.remove('hidden');
    }
  });
  cardArea.appendChild(card);
}

function setupCards(mode) {
  cardArea.innerHTML = '';
  let config = [];
  if (mode === '初見之禮' || mode === '單影啟示') {
    config = [{ position: 'center', range: [1, 2, 3, 4, 5, 6, 7, 8] }];
  } else if (mode === '月環三問') {
    config = [
      { position: 'left', range: [9, 10, 11, 12, 13, 14, 15] },
      { position: 'center', range: [1, 2, 3, 4, 5, 6, 7, 8] },
      { position: 'right', range: [16, 17, 18, 19, 20, 21, 22] },
    ];
  } else if (mode === '影徑之門') {
    config = [
      { position: 'left1', range: [9, 10, 11, 12, 13, 14, 15] },
      { position: 'left2', range: [1, 2, 3, 4, 5, 6, 7, 8] },
      { position: 'center', range: [1, 2, 3, 4, 5, 6, 7, 8] },
      { position: 'right2', range: [1, 2, 3, 4, 5, 6, 7, 8] },
      { position: 'right1', range: [16, 17, 18, 19, 20, 21, 22] },
    ];
  }
  config.forEach(({ position, range }) => createCard(position, range));
}

document.querySelectorAll('.mode').forEach(button => {
  button.addEventListener('click', () => {
    modeButtonsContainer.classList.add('hidden');
    setupCards(button.dataset.mode);
  });
});

closeModal.addEventListener('click', () => {
  cardModal.classList.add('hidden');
});
