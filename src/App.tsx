import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://musicfun.it-incubator.app/api/1.0/playlists', {
        headers: {
          'api-key': '',
        },
      })

      return response.json()
    }

    fetchData().then((data) => console.log(data))
  }, [])

  return <h1>Hello</h1>
}

export default App
