function balancedBraces(...args) {
  const res = args[0].split('');
  const chars = res.filter((e) => e === '(' || e === ')' || e === '{' || e === '}' || e === '[' || e === ']');
  const brackets = '[]{}()<>';
  const stack = [];
  for (const bracket of chars) {
    const bracketsIndex = brackets.indexOf(bracket);
    if (bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1);
    } else if (stack.pop() !== bracketsIndex) {
      return false;
    }
  }
  return stack.length === 0;
}

export {
  balancedBraces,
};
