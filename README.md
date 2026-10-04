# Дърворезби — React SPA

SoftUni ReactJS — Regular Exam Project

## Визуален дизайн

За визията на проекта използвам дизайна на моя реален сайт
[darvorezbi.com](https://darvorezbi.com) — онлайн магазин за ръчно изработени
дърворезби. Дизайн системата (палитра „Орех и слонова кост“, типография
Playfair Display + Manrope, разстояния, сенки) е пренесена от WordPress темата
в чисти CSS файлове, без зависимост от WordPress.

Стиловете са организирани така:

| Файл | Какво съдържа |
|---|---|
| `src/styles/fonts.css` | `@font-face` за self-hosted шрифтовете (`public/fonts/`) |
| `src/styles/tokens.css` | Дизайн токени — CSS променливи `--dr-*` (цветове, шрифтове, разстояния) |
| `src/styles/base.css` | Минимален reset, базова типография, accessibility |
| `src/components/header/Header.css` | Стилове на хедъра (`#dh`, `.dh-*`) |
| `src/pages/home/Home.css` | Начална страница (`.drh-*`) |
| `src/pages/details/Details.css` | Страница с детайли за изделие (`.pd-*`) |

Глобалните стилове се импортират веднъж в `main.jsx`; всеки компонент
импортира собствения си CSS файл.

## Статус

✅ Избран визуален дизайн и подготвени стиловете.
🚧 Следва: React частта — routing и layout, автентикация, каталог и детайли,
CRUD операции, бекенд и deploy.

## Инсталация и стартиране

```bash
npm install
npm run dev
```

Приложението тръгва на `http://localhost:5173`.
