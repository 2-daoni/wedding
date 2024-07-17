export function getDayOfWeek(currentDate: string) {
  const daysOfWeek = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ]

  // 입력받은 날짜 문자열을 Date 객체로 변환
  const date = new Date(currentDate)

  // Date 객체에서 요일을 숫자로 가져옴
  const dayIndex = date.getDay()

  // 요일 숫자를 문자열로 변환하여 반환
  return daysOfWeek[dayIndex]
}
