import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import DayPicker from 'react-datepicker'

interface Props {
  date: Date
}

const Calendar = ({ date }: Props) => {
  return (
    <div className="pt-[40px] px-[8px]">
      <DayPicker
        renderCustomHeader={() => {
          return (
            <div className="text-center text-[20px] font-[600]">
              - {format(date, 'yyyy년 M월')} -
            </div>
          )
        }}
        inline
        locale={ko}
        selected={date}
        startDate={new Date()}
      />
    </div>
  )
}

export default Calendar
