import { useEffect, useRef } from 'react'
import { LocationDto } from '../../types/types'

interface Props {
  data: LocationDto
}

const Map = ({ data }: Props) => {
  const { lat, link, lng, name, waytocome, address } = data
  const mapRef = useRef<any>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false`
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(lat, lng)

        const options = {
          center: position,
          level: 3,
        }

        const market = new window.kakao.maps.Marker({ position })
        const map = new window.kakao.maps.Map(mapRef.current, options)
        market.setMap(map)
      })
    }
  }, [data])
  return (
    <div className="mt-[40px] space-y-[20px]">
      <section>
        <span className="text-[22px] font-[700]">🚏 오시는길</span>
        <p>{name}</p>
        <p>{address}</p>
      </section>
      <section className="relative flex justify-center items-center">
        <div id="map" className="w-full h-[300px]" ref={mapRef} />
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-[16px] z-[1000] bg-white border rounded-full px-[16px] mx-auto"
        >
          길찾기
        </a>
      </section>
      <section>
        <span className="text-[18px] font-[600]">🚇 지하철</span>
        <p>{waytocome.metro}</p>
        <span className="text-[18px] font-[600] mt-[8px]">🚍 버스</span>
        <ul className="pl-[4px]">
          {waytocome.bus.map((item) => (
            <li>- {item}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Map
