# @packages/bot

Бот для сборки инфы по мрам и отправки сообщения в яндекс мессенджер
___
### Команды
- `npm run logs` - вывод pm2 логов по приложению бота
- `npm run stop` - остановит pm2 процесс бота 
- `npm run build` - соберет бота в dist с помощью tsc, после чего обработает алиасы в путях в собарнных файлах
- `npm run dev` - запустит pm2 процесс бота с вотчингом файлов проекта, после чего выведет логи pm2
___

### PM2 + env
Используется менеджер процессов, через который можно управлять процессом бота, его запуск, рестарт, стоп и т.д.

#### pmRunner.ts
В пакете бота присуствует раннер для pm2 - [pmRunner.ts](./pmRunner.ts), вызовы внутри пакета бота выполняются через него.

Внутри него контантой определяетя название приложения, а также подгружается .env файл внутри пакета, если такой есть. 

Пример [.env](../../.env.example) 
