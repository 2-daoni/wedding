import { useEffect, useState } from 'react'
import { WeddingDto } from './types/types'

function App() {
  //1. wedding 데이터 호출

  const [wedding, setWedding] = useState<WeddingDto>()

  useEffect(() => {
    fetch('http://localhost:8888/wedding')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log('data', data)
        setWedding(data)
      })
      .catch((error) => {
        console.log('error', error)
      })
  }, [])

  return (
    <div className="App">
      {wedding?.bride.name}
      {wedding?.message.intro}
      {wedding?.message.invitation}
    </div>
  )
}

export default App
