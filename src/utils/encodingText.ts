import iconv from 'iconv-lite';

export const encoding = (text: Buffer, from = 'win1251', to = 'utf8') => {
  const { encode, decode } = iconv;
  return encode(decode(text, from), to).toString();
};
