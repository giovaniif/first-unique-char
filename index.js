function firstUniqueChar (word = '') {
  const chars = word.split('');

  // Pegar todos os caracteres repetidos
  const repeatedChars = chars.filter((key, index, self) => {
    const repeated = self.indexOf(key);

    return repeated !== index;
  });

  if (repeatedChars.length === 0) {
    return -1;
  }

  // Excluir do array de caracteres todos que se repetem
  const excludeRepeatedCharsFromArray = chars.filter(char => {
    return !repeatedChars.includes(char);
  });

  const firstChar = excludeRepeatedCharsFromArray.join('')[0];

  return word.indexOf(firstChar);
}

const index = firstUniqueChar('javascript');
console.log('Index', index);
