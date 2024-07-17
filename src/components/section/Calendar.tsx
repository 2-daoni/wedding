import { ko } from 'date-fns/locale'
import DayPicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'

interface Props {
  date: Date
}

const Calendar = ({ date }: Props) => {
  return (
    <div>
      <DayPicker inline locale={ko} selected={date} startDate={new Date()} />
    </div>
  )
}

export default Calendar
