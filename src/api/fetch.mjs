import fetch from 'node-fetch';
import { encoding } from '../utils/encodingText.mjs';

export default {
  async getQuote() {
    const response = await fetch('https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=ru');
    const { quoteText, quoteAuthor } = await response.json();
    return quoteAuthor ? `${quoteText}\n<b>${quoteAuthor}</b>` : quoteText;
  },

  async getAdvice() {
    const response = await fetch('https://fucking-great-advice.ru/api/random');
    const data = await response.json();
    return data.text;
  },

  async getRand(typeId) {
    const response = await fetch(`http://rzhunemogu.ru/RandJSON.aspx?CType=${typeId}`);
    const data = await response.arrayBuffer();
    const buffer = Buffer.from(data);
    const encodingData = encoding(buffer);
    return encodingData.replace('{"content":"', '').replace('"}', '');
  },
};
