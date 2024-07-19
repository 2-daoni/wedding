export function phoneNumber(number: string) {
  const phoneNumber =
    number?.length === 8
      ? number.replace(/(\d{4})(\d{4})/, '$1-$2')
      : number
          ?.replace(/[^0-9]/g, '')
          .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, '$1-$2-$3')
  return phoneNumber
}
