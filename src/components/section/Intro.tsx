import moment from 'moment'
import { BrideDto, GroomDto } from '../../types/types'
import { format, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'

interface Props {
  data: {
    groom: GroomDto
    bride: BrideDto
    date: string
    location: string
  }
}

const Intro = ({ data }: Props) => {
  const { groom, bride, date, location } = data
  return (
    <div className="text-center">
      <p className="text-[24px]">
        {bride.name} 🩷 {groom.name}
      </p>
      <p>{format(parseISO(date), 'yyyy년 M월 d일 eeee', { locale: ko })}</p>
      <p>{location}</p>
    </div>
  )
}

export default Intro
