import fetch from 'node-fetch';
import { encoding } from '../utils/encodingText.js';
import list from './list.js';

export default {
  async getList() {
    const randomIndex = Math.floor(Math.random() * list.length);
    const randomItem = list[randomIndex];
    const number = `<b>[${randomIndex + 1}/${list.length}]</b>`;
    const text = `${randomItem}\n\n${number}`;
    return Promise.resolve(text);
  },

  async getCat() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const [data] = await response.json();
    return data.url;
  },

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
