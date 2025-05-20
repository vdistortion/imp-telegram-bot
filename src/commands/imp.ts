import type { CommandContext, Context } from 'grammy';
import createDebug from 'debug';
import { commands } from '../core';
import { homepage } from '../../package.json';
import { replyWithPhotoGroup } from '../utils/reply';

const debug = createDebug('bot:imp_command');

export const imp = () => async (ctx: CommandContext<Context>) => {
  debug('Triggered "imp" command');
  await replyWithPhotoGroup(
    ctx,
    ['avatar.jpg', 'hellboy.jpg'],
    `
@ImpTelegramBot

Name:
😈 ImpBot 😈

About:
Бот отправляет погоду и котиков 🐈
А ещё цитаты и ценные советы 🤭

Commands:
${commands.start.command} - ${commands.start.description}
${commands.cat.command} - ${commands.cat.description}
${commands.quote.command} - ${commands.quote.description}
${commands.flags.command} - ${commands.flags.description}
${commands.help.command} - ${commands.help.description}
${commands.stop.command} - ${commands.stop.description}

Description:
Команды:
/${commands.start.command} — ${commands.start.description}
/${commands.cat.command} — ${commands.cat.description}
/${commands.quote.command} — ${commands.quote.description}
/${commands.help.command} — ${commands.help.description}
/${commands.stop.command} — ${commands.stop.description}
${commands.location.description}

Исходный код:
${homepage}`,
  );
};
