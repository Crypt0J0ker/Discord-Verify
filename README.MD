## Установка зависимостей

Перед началом использования проекта, убедитесь, что у вас установлен Node.js и npm. Затем выполните команду:

```bash
npm install
```

## Запуск слушателя событий на сервере Joker_Click

Для запуска слушателя событий на сервере Joker_Click, выполните следующую команду в терминале:

```bash
npm run start
```

После запуска слушателя событий в консоли будут логироваться все события с назначением и удалением ролей на сервере. Ниже приведен пример лога:

```bash
Logged in as Bot_2#2858                      \ 
Cached all members of guild: Joker_Click      - запуск
guildMemberUpdate event triggered            /
Old Roles: 1240403991075225772                      \
New Roles: 1240407369477918900,1240403991075225772   - лог назначения роли пользователю после прохождения верификации
User theboss_93970 has been verified.               /
```

## Проверка наличия верифицированной роли у пользователя

Для проверки наличия верифицированной роли у пользователя, выполните следующую команду, указав ID необходимого пользователя (19-значное числовое значение):

```bash
npm run check-role 1242226276643766444
```

После выполнения команды, в консоли будет выведено сообщение:

```bash
User has the Verified role
```   
Если у пользователя нет верифицированной роли, то будет выведено сообщение:

```bash
User does not have the Verified role
```