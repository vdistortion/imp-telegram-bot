import fetch from 'node-fetch';
import { encoding } from '../utils/encodingText.mjs';

export default {
  getQuote() {
    return fetch('https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=ru')
      .then((response) => response.json())
      .then(({ quoteText, quoteAuthor }) => quoteAuthor ? `${quoteText}\n<b>${quoteAuthor}</b>` : quoteText);
  },
  getAdvice() {
    return fetch('https://fucking-great-advice.ru/api/random')
      .then((response) => response.json())
      .then((data) => data.text);
  },
  getRand(typeId) {
    return fetch(`http://rzhunemogu.ru/RandJSON.aspx?CType=${typeId}`)
      .then((response) => response.arrayBuffer())
      .then((data) => Buffer.from(data))
      .then((data) => encoding(data))
      .then((text) => text.replace('{"content":"', '').replace('"}', ''));
  },
};
