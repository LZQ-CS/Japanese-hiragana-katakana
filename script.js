const kanaData = [
  {
    row: 'あ行',
    hiragana: ['あ', 'い', 'う', 'え', 'お'],
    katakana: ['ア', 'イ', 'ウ', 'エ', 'オ'],
    romaji: ['a', 'i', 'u', 'e', 'o']
  },
  {
    row: 'か行',
    hiragana: ['か', 'き', 'く', 'け', 'こ'],
    katakana: ['カ', 'キ', 'ク', 'ケ', 'コ'],
    romaji: ['ka', 'ki', 'ku', 'ke', 'ko']
  },
  {
    row: 'さ行',
    hiragana: ['さ', 'し', 'す', 'せ', 'そ'],
    katakana: ['サ', 'シ', 'ス', 'セ', 'ソ'],
    romaji: ['sa', 'shi', 'su', 'se', 'so']
  },
  {
    row: 'た行',
    hiragana: ['た', 'ち', 'つ', 'て', 'と'],
    katakana: ['タ', 'チ', 'ツ', 'テ', 'ト'],
    romaji: ['ta', 'chi', 'tsu', 'te', 'to']
  },
  {
    row: 'な行',
    hiragana: ['な', 'に', 'ぬ', 'ね', 'の'],
    katakana: ['ナ', 'ニ', 'ヌ', 'ネ', 'ノ'],
    romaji: ['na', 'ni', 'nu', 'ne', 'no']
  },
  {
    row: 'は行',
    hiragana: ['は', 'ひ', 'ふ', 'へ', 'ほ'],
    katakana: ['ハ', 'ヒ', 'フ', 'ヘ', 'ホ'],
    romaji: ['ha', 'hi', 'fu', 'he', 'ho']
  },
  {
    row: 'ま行',
    hiragana: ['ま', 'み', 'む', 'め', 'も'],
    katakana: ['マ', 'ミ', 'ム', 'メ', 'モ'],
    romaji: ['ma', 'mi', 'mu', 'me', 'mo']
  },
  {
    row: 'や行',
    hiragana: ['や', '', 'ゆ', '', 'よ'],
    katakana: ['ヤ', '', 'ユ', '', 'ヨ'],
    romaji: ['ya', '', 'yu', '', 'yo']
  },
  {
    row: 'ら行',
    hiragana: ['ら', 'り', 'る', 'れ', 'ろ'],
    katakana: ['ラ', 'リ', 'ル', 'レ', 'ロ'],
    romaji: ['ra', 'ri', 'ru', 're', 'ro']
  },
  {
    row: 'わ行',
    hiragana: ['わ', '', '', '', 'を'],
    katakana: ['ワ', '', '', '', 'ヲ'],
    romaji: ['wa', '', '', '', 'wo']
  },
  {
    row: 'ん',
    hiragana: ['ん'],
    katakana: ['ン'],
    romaji: ['n']
  }
];

const grid = document.querySelector('.kana-grid');

function createKanaCell(content, className) {
  const cell = document.createElement('div');
  cell.classList.add('kana-cell', className);
  cell.innerHTML = content;
  return cell;
}

function generateKanaTable() {
  kanaData.forEach(rowData => {
    // Add row header
    grid.appendChild(createKanaCell(rowData.row, 'row-header'));
    
    // Add hiragana cells
    rowData.hiragana.forEach((hiragana, i) => {
      if (hiragana) {
        const content = `
          <div class="kana hiragana">${hiragana}</div>
          <div class="kana katakana">${rowData.katakana[i]}</div>
          <div class="romaji">${rowData.romaji[i]}</div>
        `;
        grid.appendChild(createKanaCell(content, 'kana-data'));
      } else {
        grid.appendChild(createKanaCell('', 'empty-cell'));
      }
    });
  });
}

generateKanaTable();
