export function chunk<T = string>(array: T[], size = 1) {
  size = Math.max(Number(size), 0);
  const length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  let index = 0;
  let resIndex = 0;
  const result = new Array(Math.ceil(length / size));

  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size));
  }
  return result;
}

export function shuffle<T = string>(array: T[]) {
  array.sort(() => Math.random() - 0.5);
}
