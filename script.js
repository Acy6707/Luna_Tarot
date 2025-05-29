const startBtn = document.getElementById('start-button');
const modeSelection = document.getElementById('mode-selection');
const cardArea = document.getElementById('card-area');

const cardData = [
  {
    id: 0,
    name: "虛月（New Moon）",
    image: "cards/card1.png",
    suggest: "一片黑暗中微光浮現的女神面容",
    upright: "開端、未知的機會、內在覺醒",
    reversed: "迷惘、逃避現實、精神渙散"
  },
  {
    id: 1,
    name: "萌月（Waxing Crescent）",
    image: "cards/card2.png",
    suggest: "月芽中孕育銀羽的鳥",
    upright: "萌生、希望、潛能初現",
    reversed: "猶豫、錯誤開始、缺乏目標"
  },
  {
    id: 2,
    name: "上弦（First Quarter）",
    image: "cards/card3.png",
    suggest: "一把穿透月影的銀劍",
    upright: "行動、突破、對抗困境",
    reversed: "衝突、受阻、選擇困難"
  },
  {
    id: 3,
    name: "盈凸（Waxing Gibbous）",
    image: "cards/card4.png",
    suggest: "月光下編織命運絲線的少女",
    upright: "精進、積累、臨近成功",
    reversed: "停滯、拖延、壓力累積"
  },
  {
    id: 4,
    name: "滿月（Full Moon）",
    image: "cards/card5.png",
    suggest: "散發光芒的女神擁抱信徒",
    upright: "圓滿、顯化、真相現形",
    reversed: "情緒泛濫、被誤導、假象"
  },
  {
    id: 5,
    name: "虧凸（Waning Gibbous）",
    image: "cards/card6.png",
    suggest: "月後一位老者靜觀水面",
    upright: "反思、學習、分享智慧",
    reversed: "偏見、固執、知識錯誤"
  },
  {
    id: 6,
    name: "下弦（Last Quarter）",
    image: "cards/card7.png",
    suggest: "月輪裂痕中走出的影子",
    upright: "放手、轉變、終結不適合的事物",
    reversed: "捨不得、無法斷離、反覆犯錯"
  },
  {
    id: 7,
    name: "殘月（Waning Crescent）",
    image: "cards/card8.png",
    suggest: "女神閉眼入眠，懷抱碎片般的記憶",
    upright: "休息、沉潛、夢境中的指引",
    reversed: "麻痺、逃避現實、精神消耗"
  },
  {
    id: 8,
    name: "裂鏡（Cracked Mirror）",
    image: "cards/card9.png",
    suggest: "破碎鏡中映出多重自我",
    upright: "自我探索、認知分裂、鏡像啟示",
    reversed: "自我否定、迷失身份"
  },
  {
    id: 9,
    name: "夜哭鳥（Night Cry）",
    image: "cards/card10.png",
    suggest: "黑夜中哭泣的鳥，被銀鏈綁住",
    upright: "傷痛釋放、脆弱的力量",
    reversed: "情緒束縛、孤立感"
  },
  {
    id: 10,
    name: "蠍影（Scorpion Veil）",
    image: "cards/card11.png",
    suggest: "巨蠍環繞人心，蠍尾伸入夢中",
    upright: "隱藏的本能、危險的誘惑",
    reversed: "毒害、毀滅、自我懷疑"
  },
  {
    id: 11,
    name: "無聲潮（Silent Tide）",
    image: "cards/card12.png",
    suggest: "靜默的潮水湧入一個空房間",
    upright: "潛意識湧現、寧靜中的力量",
    reversed: "淹沒、窒息感、遺忘重要之事"
  },
  {
    id: 12,
    name: "斷線者（Threadbreaker）",
    image: "cards/card13.png",
    suggest: "剪斷命運絲線的身影",
    upright: "重生、獨立、自我選擇",
    reversed: "不負責任、關係破裂"
  },
  {
    id: 13,
    name: "灰燼之月（Ashen Moon）",
    image: "cards/card14.png",
    suggest: "灰塵覆蓋的月輪，無光",
    upright: "失落、無神狀態、精神死亡",
    reversed: "虛無、自暴自棄"
  },
  {
    id: 14,
    name: "命環（Cycle Rune）",
    image: "cards/card15.png",
    suggest: "無限符文與月相組成的圓圈",
    upright: "命運循環、因果回應、下一輪啟示",
    reversed: "卡在循環、重蹈覆轍"
  },
  {
    id: 15,
    name: "反射之眼（Eye of Reflection）",
    image: "cards/card16.png",
    suggest: "水中浮現的第三眼",
    upright: "洞察他人、直覺、精神開啟",
    reversed: "過度解讀、疑神疑鬼"
  },
  {
    id: 16,
    name: "綴星書（Starbound Tome）",
    image: "cards/card17.png",
    suggest: "一本由星光編寫的書頁",
    upright: "指引、知識之靈、預言出現",
    reversed: "虛假知識、迷信"
  },
  {
    id: 17,
    name: "銀羽（Silver Feather）",
    image: "cards/card18.png",
    suggest: "掉落月羽，帶著溫柔訊息",
    upright: "溫柔啟示、靈性保護、與靈體連結",
    reversed: "脆弱無助、被誤導"
  },
  {
    id: 18,
    name: "夜旅人（The Nocturne）",
    image: "cards/card19.png",
    suggest: "蒙面旅人穿梭於星空與月影之間",
    upright: "旅行、過渡時期、未知之路",
    reversed: "迷失方向、過度漂泊"
  },
  {
    id: 19,
    name: "倒影雙生（Twin Reflection）",
    image: "cards/card20.png",
    suggest: "兩人對視，卻在鏡中彼此背對",
    upright: "關係、選擇、雙重命運",
    reversed: "背叛、自我對抗"
  },
  {
    id: 20,
    name: "夢鉤（Dreamhook）",
    image: "cards/card21.png",
    suggest: "勾住月亮一角的銀鉤",
    upright: "願望、連結超現實、潛力啟動",
    reversed: "執念、虛妄、強求不屬於你的東西"
  },
  {
    id: 21,
    name: "淚珠燈（Lamp of Tears）",
    image: "cards/card22.png",
    suggest: "眼淚化為光珠，懸掛在夜空中的燈",
    upright: "淨化情緒、悲傷中的真理、轉化力量",
    reversed: "停滯在傷痛、憂鬱成災"
  }
];
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

function showCardDetail(card, isReversed) {
  const modal = document.getElementById("card-modal");
  const modalImg = document.getElementById("modal-img");
  const cardTitle = document.getElementById("card-title");
  const cardDesc = document.getElementById("card-desc");

  // 設定圖片來源
  modalImg.src = card.image;
  modalImg.alt = card.name;

  // 顯示名稱與正逆位狀態
  const orientationText = isReversed ? "（逆位）" : "（正位）";
  cardTitle.textContent = `${card.name} ${orientationText}`;

  // 顯示圖像建議與正/逆位說明
  cardDesc.innerHTML = `
    <p><strong>圖像意象：</strong>${card.suggest}</p>
    <p><strong>${isReversed ? "逆位含義" : "正位含義"}：</strong>${isReversed ? card.reversed : card.upright}</p>
  `;

  modal.classList.remove("hidden");
}
function closeModal() {
  document.getElementById('card-modal').classList.add('hidden');
}
