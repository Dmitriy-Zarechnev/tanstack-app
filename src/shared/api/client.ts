import createClient from 'openapi-fetch'
import type { paths } from './schema'

// Используем для запросов
export const client = createClient<paths>({
  baseUrl: 'https://musicfun.it-incubator.app/api/1.0/',
  headers: {
    'api-key': '',
  },
})
