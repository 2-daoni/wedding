export interface AccountDto {
  bankName: string
  accountNumber: string
}

export interface ParentDto {
  account: AccountDto
  name: string
  phoneNumber: string
}

export interface BrideDto {
  account: AccountDto
  name: string
  parents: Array<ParentDto>
  phoneNumber: string
}

export interface GroomDto {
  account: AccountDto
  name: string
  parents: Array<ParentDto>
  phoneNumber: string
}

export interface WeddingDto {
  attendCount: number
  bride: BrideDto
  date: string
  galleryImages: Array<string>
  groom: GroomDto
  id: number
  location: { lat: number; lng: number }
  message: { intro: string; invitation: string }
}
