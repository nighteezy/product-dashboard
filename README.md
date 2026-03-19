# Product Dashboard

Дашборд для управления товарами с авторизацией, поиском, сортировкой и пагинацией.

## Технологии

- **React 19** + **TypeScript**
- **Vite 8** — сборка
- **React Router** — маршрутизация
- **React Query** — работа с API
- **Zustand** — состояние авторизации
- **styled-components** — стили
- **React Hook Form** + **Zod** — формы и валидация
- **Axios** — HTTP-запросы
- **react-hot-toast** — уведомления

## Возможности

- Авторизация (логин с сохранением сессии)
- Список товаров с таблицей
- Поиск по товарам с debounce
- Сортировка по названию, вендору, артикулу, рейтингу, цене
- Пагинация
- Добавление товара (модальное окно)
- Адаптивная вёрстка
- Error Boundary для обработки ошибок

## Начало работы

### Установка

```bash
npm install
```

### Переменные окружения

Создайте файл `.env` на основе `.env.example`:

```bash
cp .env.example .env
```

| Переменная   | Описание                    | По умолчанию      |
|-------------|-----------------------------|-------------------|
| `VITE_API_URL` | Базовый URL API            | `https://dummyjson.com` |

### Запуск

```bash
# Режим разработки
npm run dev

# Сборка
npm run build

# Превью production-сборки
npm run preview

# Линтинг
npm run lint
```

## Структура проекта

```
src/
├── api/              # API-слой (axios, запросы, React Query)
├── assets/           # Статические ресурсы
├── components/       # Общие компоненты (FormField, ErrorBoundary)
├── features/         # Фичи (auth: хук, схема, хранилище)
├── hooks/            # Кастомные хуки (useDebounce)
├── pages/            # Страницы
│   ├── LoginPage/    # Страница входа
│   └── ProductsPage/ # Страница товаров
│       └── components/
│           ├── FilterDropdown/   # Фильтр/сортировка
│           ├── Modal/           # Модальное окно
│           ├── NotFound/        # Пустое состояние
│           ├── ProductsTable/   # Таблица товаров
│           └── Search/          # Поиск
└── styles/           # Глобальные стили, токены
```

## Алиасы импортов

- `api` → `src/api`
- `components` → `src/components`
- `features` → `src/features`
- `hooks` → `src/hooks`
- `pages` → `src/pages`
- `styles` → `src/styles`
- `assets` → `src/assets`
- `src` → `src`

Внутри модулей используются относительные пути (`./`, `../`).

## API

По умолчанию используется [DummyJSON](https://dummyjson.com):

- `GET /products` — список товаров
- `GET /products/search?q=...` — поиск
- `POST /auth/login` — авторизация
