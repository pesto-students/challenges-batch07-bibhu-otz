function duplicateLetters(str) {
  const counts = {};
  let ch; let index; let len; let count;
  for (index = 0, len = str.length; index < len;index++) {
    ch = str.charAt(index);
    count = counts[ch];
    counts[ch] = count ? count + 1 : 1;
  }
  let max = 0;
  for (ch in counts) {
    if (max < counts[ch]) max = counts[ch];
  }
  if (max > 1) return max;
  return false;
}

export {
  duplicateLetters,
};
