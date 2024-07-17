import { useState } from 'react'
import React from 'react'

interface Props {
  data: any
}

const ImageGallery = ({ data }: Props) => {
  console.log('data', data)
  const [showSwiper, setShowSwiper] = useState<boolean>(false)
  return (
    <div className="py-[60px]">
      <span className="text-[20px] font-[700]">📷 사진첩</span>
      <div className="grid-cols-3 grid gap-[4px] mt-[16px]">
        {data.map((item: string) => (
          <div
            className="w-full h-[120px] overflow-hidden cursor-pointer"
            onClick={() => {
              setShowSwiper(true)
            }}
          >
            <img
              src={`${item}.jpg`}
              alt="wedding"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
