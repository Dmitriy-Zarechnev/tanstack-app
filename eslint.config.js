import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import pluginQuery from '@tanstack/eslint-plugin-query'

export default [
  ...pluginQuery.configs['flat/recommended'],
  {
    ignores: ['dist', 'node_modules', '**/*.d.ts', '**/*.config.js'], // Игнорируемые файлы и папки
  },
  {
    files: ['**/*.{ts,tsx}'], // Файлы для проверки
    plugins: {
      '@typescript-eslint': tseslint, // Плагин для TypeScript
      'react-hooks': reactHooks, // Плагин для React Hooks
      'react-refresh': reactRefresh, // Плагин для React Refresh
      prettier, // Плагин для Prettier
    },
    languageOptions: {
      ecmaVersion: 2020, // Версия ECMAScript
      sourceType: 'module', // Использование модулей
      globals: {
        ...globals.browser, // Глобальные переменные браузера
        ...globals.node, // Глобальные переменные Node.js (если нужно)
      },
      parser: tsParser, // Парсер для TypeScript
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Поддержка JSX
        },
      },
    },
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      // Базовые правила ESLint
      ...js.configs.recommended.rules,

      // Правила для TypeScript
      ...tseslint.configs.recommended.rules,

      // Правила для React Hooks
      ...reactHooks.configs['recommended-latest'].rules,

      // Правила для React Refresh
      ...reactRefresh.configs.vite.rules,

      // Кастомные правила
      'react-hooks/rules-of-hooks': 'error', // Проверка правил Hooks
      'react-hooks/exhaustive-deps': 'warn', // Проверка зависимостей Hooks
      'react-refresh/only-export-components': 'warn', // Проверка экспортов компонентов
      'no-unused-vars': 'off', // Отключаем базовое правило ESLint
      '@typescript-eslint/no-unused-vars': 'warn', // Используем правило для TypeScript
      '@typescript-eslint/no-explicit-any': 'warn', // Предупреждение об использовании `any`
      'prettier/prettier': ['error', {}, { usePrettierrc: true, fix: true }], // Проверка форматирования Prettier
    },
  },
]
