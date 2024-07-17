import moment from 'moment'
import { getDayOfWeek } from '../../utils/days'

interface Props {
  data: any
}

const Header = ({ data }: Props) => {
  return (
    <div className="text-center">
      <p className="text-[30px]">
        {moment(data).format('YYYY-MM-DD')} ({getDayOfWeek(data)}){' '}
      </p>
      <p className="text-[24px]">{moment(data).format('HH:mm')}</p>
    </div>
  )
}

export default Header
