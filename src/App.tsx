import { useEffect } from 'react'
import { client } from '@/shared/api/client'

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await client.GET('/playlists')

      return response.data
    }

    fetchData().then((data) => console.log(data))
  }, [])

  return <h1>Hello</h1>
}

export default App
