import { version } from 'package-json';

import { COMMANDS } from '@src/constants';

export const infoMenu = [
    ['about_me', COMMANDS.aboutMe],
    ['all_teams', COMMANDS.aboutAll],
];

export function getBotInfo() {
    return (
        `<b>Agile Cat \u{1F638}\n\nТекущая версия: ${version}</b>\n\n` +
        '<i>Что такое Agile Cat?</i>\n\n' +
        'Это программа-бот, который мониторит чат и помогает привлекать ревьюверов со стрима и не только.\n\n' +
        'Программа позволяет не искать себе второго ревьювера по ЛС-ам, а с помощью простой команды делает это за вас. Бот разрабатывает и поддерживает @progryx. По всем вопросам доработки или проблемах пишите в ЛС.\n' +
        'Как использовать бота?\n\n' +
        '\u{1F525}\u{1F525}\u{1F525}<b>ВАЖНО!</b>\u{1F525}\u{1F525}\u{1F525}\n' +
        'В связи с политикой безопасности Telegram, боты не умеют первыми писать пользователю. \n' +
        'Данный бот очень тесно взаимодействует с вашими ЛС, отправляя уведомления о ваших действиях (запись удалена, обновлена и т.д.).\n' +
        'Поэтому, для работы с ботом необходимо проинициализировать ваш диалог с ним. Зайти в ЛС бота \n' +
        '(@AgileCatBot) и нажмите кнопку "Запустить". Бот ответит вам, что его ЛС только для уведомлений, это нормально. После этой процедуры вы сможете пользоваться ботом.\n\n' +
        '<i>После инициализации бота в ЛС, если вы не являетесь администратором группы, начинайте с п. 4</i>\n\n' +
        '\u{0031}\u{20E3}  Добавьте бота в желаемую группу и назначьте администратором. Бот должен уметь читать, удалять, изменять сообщения, но лучше назначить ему все права.\n\n' +
        '\u{0032}\u{20E3}  Запустите бота, бот попросит у вас ключ активации. Получить ключ можно у @progryx. Введите ключ активации, бот напишет вам в ЛС, что бот готов к работе или что ключ введен неверно. В таком случае напишите мне же (@progryx), будем разбираться.\n\n' +
        '\u{0033}\u{20E3}  После активации (делается администратором группы), администратор должен создать желаемые группы. Перейдите в настройки групп (главное меню - выбрать команду - Добавить команду) и добавьте столько групп, сколько вам угодно. После создания групп, выберите созданную группу, нажав по названию группы. После этого, все участники группы, смогут выбрать свою группу.\n\n' +
        '\u{0034}\u{20E3}  Выберите вашу команду в стриме, чтобы бот понимал, кого тегать.\n\n' +
        '<b>Возможности бота:</b>\n\n' +
        '\u{1F535}  Если вы хотите, чтобы ваш ПР отревьювили ДВА человека:\n' +
        '    - напишите в чат: !https://ССЫЛКА_НА_ПР\n' +
        '    - выберите в меню или в списке команд команду /review. Бот распознает ее, и напишет вам сообщение, на которые вы должны ответить, прислав ссылку на ПР без модификаций (Пример: https://test.ru)\n\n' +
        '\u{1F535}  Если вы хотите, чтобы вас отревьювил еще один человек:\n' +
        '   - напишите в чат: @https://ССЫЛКА_НА_ПР\n' +
        '   - введите команду /change и точно так же в реплай (ответ) бота вставьте ссылку на ПР без модификаций\n\n' +
        '\u{1F535}  Если вы хотите, чтобы вас отревьювила определенная команда разработки, выберите пункт меню "Ревью определенной командой". На ваш ПР тегнется вся выбранная команда\n\n' +
        '\u{1F535}  Если вы хотите посмотреть информацию о себе, обо всех командах или о какой-либо группе, например узнать, в какой вы текущей группе, запустите команду /info и выберите соответствующий пункт\n\n' +
        '\u{1F535}  Когда вы уходите в отпуск, запустите бота и выберите в меню "Режим отпуска". Выберите желаемую дату окончания отпуска. Бот не будет вас упоминать в течение всего времени отпуска. После этого срока бот автоматически добавляет вас обратно в выборку по ревьюверам. Также режим можно отключить в стандартном режиме, выбрав соответствующий пункт меню в любой момент.\n\n' +
        '\u{1F528}<b>FAQ по устранению ошибок:</b>\n\n' +
        '\u{1F525}  Если у вас не получается выбрать команду, причина может быть в том, что вы не проинициализировали бота у него в ЛС. Боты устроены таким образом, что не могут без вашего согласия отправлять вам сообщения. Поэтому нужно зайти в ЛС бота и нажать кнопку "Начать"'
    );
}
