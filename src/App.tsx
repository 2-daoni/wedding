import { useEffect, useState } from 'react'
import Loading from './components/shared/Loading'
import { WeddingDto } from './types/types'
import './index.css'
import Error from './components/Error'
import Header from './components/section/Header'
import Video from './components/section/Video'
import ImageGallery from './components/section/ImageGallery'
import Intro from './components/section/Intro'
import Calendar from './components/section/Calendar'
import Map from './components/section/Map'

function App() {
  //1. wedding 데이터 호출

  const [wedding, setWedding] = useState<WeddingDto>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    fetch('http://localhost:8888/wedding')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log('data', data)
        setWedding(data)
        setTimeout(() => {
          setLoading(false)
        }, 700)
      })
      .catch((error) => {
        console.log('error', error)
        setError(true)
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 700)
      })
  }, [])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  if (wedding) {
    const {
      date,
      id,
      location,
      attendCount,
      bride,
      galleryImages,
      groom,
      message,
    } = wedding

    return (
      <div className="py-[60px] px-[20px]">
        <Header data={date} />
        <Video />
        <ImageGallery data={galleryImages} />
        <Intro
          data={{
            groom: groom,
            bride: bride,
            date: date,
            location: location.name,
            message: message,
          }}
        />
        <Calendar date={new Date(date)} />
        <Map data={location} />
      </div>
    )
  }

  return <div>No data</div>
}

export default App
