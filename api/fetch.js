import axios from 'axios';
import { encoding } from '../utils/encodingText.js';

export default {
  getQuote() {
    return axios({
      method: 'get',
      url: 'https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=ru',
    }).then((response) => response.data)
      .then(({ quoteText, quoteAuthor }) => quoteAuthor ? `${quoteText}\n<b>${quoteAuthor}</b>` : quoteText);
  },
  getAdvice() {
    return axios({
      method: 'get',
      url: 'https://fucking-great-advice.ru/api/random',
    }).then((response) => response.data.text);
  },
  getRand(typeId) {
    return axios({
      method: 'get',
      url: `http://rzhunemogu.ru/RandJSON.aspx?CType=${typeId}`,
      responseType: 'arraybuffer',
    }).then(({ data }) => encoding(data))
      .then((text) => text.replace('{"content":"', '').replace('"}', ''));
  },
};
