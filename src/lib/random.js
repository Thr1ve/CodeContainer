
export function getRandomChar() {
  const chars = 'ABCDEFJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*() ';
  const n = Math.floor(Math.random() * chars.length);
  return chars[n];
}

export function getRandomCharLine(length) {
  let line = '';
  for (let i = 0; i < length; i++) {
    line += getRandomChar();
  }
  return line;
}

export function getRandomCharParagraph(nLines, lineLength) {
  let arr = [];
  for (let i = 0; i < nLines; i++) {
    arr.push(getRandomCharLine(lineLength));
  }
  return arr.join('\n');
}

export function randomCharGrid(size, height) {
  return Array.from({ length: (height || size) })
    .map(() => Array.from({ length: size })
      .map(() => getRandomChar())
    );
}

export function randomNumberBetween(min, max, inclusiveMax = false) {
  if (max < min) {
    console.error('max must be greater than min');
    return;
  }
  return Math.floor(Math.random() * (max - min + (inclusiveMax ? 1 : 0))) + min;
}
