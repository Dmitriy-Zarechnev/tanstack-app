import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Создали instance класса QueryClient
const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Добавили провайдер QueryClientProvider, чтобы комопненты имели доступ к queryClient */}
    <QueryClientProvider client={queryClient}>
      <App />

      {/* Devtools для отслеживания состояния данных */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
)
