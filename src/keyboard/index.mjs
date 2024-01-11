import { keyboardButtons } from './buttons.mjs';
import { chunk } from '../utils/chunkArray.mjs';

const names = [
  keyboardButtons.quote,
  keyboardButtons.advice,
  ...keyboardButtons.rand,
].map((button) => button.title);

export const keyboard = chunk(names, 2);
export { keyboardButtons };
