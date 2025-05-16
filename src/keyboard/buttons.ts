import { Markup } from 'telegraf';
import type { KeyboardButton } from '@telegraf/types/markup';

type ButtonsType = Record<
  'cat' | 'quote' | 'advice' | 'flags',
  Record<'command' | 'text' | 'description', string>
>;

export const buttons: ButtonsType = {
  cat: { command: 'cat', text: '🐈🐾🐾🐾', description: 'Запросить котика' },
  quote: { command: 'quote', text: '🗯 Крутая цитата 🗯', description: 'Цитата' },
  advice: { command: 'advice', text: '🔞 Отмочить 🔞', description: '' },
  flags: { command: 'flag_connect', text: '🏴 Флаги 🏳️', description: 'Флаги' },
};

const getButtons = (buttons: string[][]): KeyboardButton[][] =>
  buttons.map((row) => row.map((button) => Markup.button.text(button)));

export const getKeyboard = (advice?: boolean): KeyboardButton[][] => {
  return getButtons([
    advice ? [buttons.advice.text, buttons.quote.text] : [buttons.quote.text],
    [buttons.cat.text],
  ]);
};
