import { useEffect, useState } from 'react'
import { WeddingDto } from './types/types'

function App() {
  //1. wedding 데이터 호출

  const [wedding, setWedding] = useState<WeddingDto>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    fetch('http://localhost:8888/wedding22')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log('data', data)
        setWedding(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log('error', error)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error!!!</div>
  }

  return (
    <div className="App">
      {wedding?.bride.name}
      {wedding?.message.intro}
      {wedding?.message.invitation}
    </div>
  )
}

export default App
