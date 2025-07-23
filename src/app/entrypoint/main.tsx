import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/reset.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Import the generated route tree
import { routeTree } from '../routes/routeTree.gen'
import { createRouter, RouterProvider } from '@tanstack/react-router'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Создали instance класса QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Установка времени устаревания данных
      staleTime: Infinity,

      // Минимальное время, когда данные будут зачищены при неиспользовании
      gcTime: 10 * 1000,

      // Если данные устарели, не делать новый запрос при монтировании
      refetchOnMount: false,

      // Если данные устарели, не делать новый запрос при возвращении на вкладку
      refetchOnWindowFocus: false,

      // Не делать новый запрос при возвращении соединения
      refetchOnReconnect: false,
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Добавили провайдер QueryClientProvider, чтобы комопненты имели доступ к queryClient */}
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

      {/* Devtools для отслеживания состояния данных */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
)
