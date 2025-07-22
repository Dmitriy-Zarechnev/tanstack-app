import { useQuery } from '@tanstack/react-query'
import { client } from '@/shared/api/client'

function App() {
  const query = useQuery({
    // Ключ помогает идентифицировать запрос и не дублировать запросы во всём приложении
    queryKey: ['playlists'],

    // Отключение нового запроса при устарении данных
    staleTime: Infinity,

    // Минимальное время, когда данные будут зачищены при неиспользовании
    gcTime: 10 * 1000,

    // Если данные устарели, не делать новый запрос при монтировании
    refetchOnMount: false,

    // Если данные устарели, не делать новый запрос при возвращении на вкладку
    refetchOnWindowFocus: false,

    // Запрос за playlists
    queryFn: () => client.GET('/playlists'),
  })

  return (
    <ul>
      {query.data?.data?.data.map((el) => {
        return <li key={el.id}>{el.attributes.title}</li>
      })}
    </ul>
  )
}

export default App
