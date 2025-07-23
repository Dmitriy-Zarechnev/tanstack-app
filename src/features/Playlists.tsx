import { useQuery } from '@tanstack/react-query'
import { client } from '@/shared/api/client'

export const Playlists = () => {
  const query = useQuery({
    // Ключ помогает идентифицировать запрос и не дублировать запросы во всём приложении
    queryKey: ['playlists'],

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
