function dropElements(elements, predicate) {
  return elements.filter(item => (predicate(item)));
}
export { dropElements };
