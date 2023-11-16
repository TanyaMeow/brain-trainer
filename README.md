# Тренажер мозга

Это приложение-игра, предназначенная для улучшения памяти, внимания и скорости мышления.
После настройки игры в главном экране, и после клика 'Начать!', начинается игра, в которой генерируются задачи исходя из сложности, и выбранных математических операций.
Вы должны решить множество задач за выбранное время! После истечения времени, или при принудительном завершении игры, ведется подсчет ваших результатов, которые отображаются на главном экране.

```
Ссылка на работающее приложение: (тут будет ссылка)
```

#### Доступный функционал приложения:

- Настройка игры:
    - Выбор времени и сложности игры
    - Выбор математических операций
- Игра:
    - Поле с числами
    - Показ верного решения
    - Проверка результата
    - Переключение между полями ввода чисел

#### Используемый стек технологий:

- Vue 3
- Библиотека mathjs
- CSS
- TypeScript

### Загрузка проекта

```sh
npm install
```

### Компиляция и горячая перезагрузка для разработки

```sh
npm run dev
```

### Проверка типов, компиляция и минимизация для производства

```sh
npm run build
```

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).