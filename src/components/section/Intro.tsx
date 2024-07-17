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
    message: { intro: string; invitation: string }
  }
}

const Intro = ({ data }: Props) => {
  const { groom, bride, date, location, message } = data
  return (
    <div className="text-center space-y-[8px]">
      <p className="text-[24px]">
        {bride.name} 🩷 {groom.name}
      </p>
      <p>{format(parseISO(date), 'yyyy년 M월 d일 eeee', { locale: ko })}</p>
      <p>{location}</p>
      <div className="pt-[20px]">
        <p>🌷</p>
        <p className="whitespace-pre-line">{message.intro}</p>
      </div>
      <div className="pt-[40px]">
        <p>💌</p>
        <p className="whitespace-pre-line">{message.invitation}</p>
      </div>
    </div>
  )
}

export default Intro
