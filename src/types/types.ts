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

export interface LocationDto {
  address: string
  lat: number
  link: string
  lng: number
  name: string
  waytocome: {
    bus: Array<string>
    metro: Array<string>
  }
}

export interface WeddingDto {
  attendCount: number
  bride: BrideDto
  date: string
  galleryImages: Array<string>
  groom: GroomDto
  id: number
  location: LocationDto
  message: { intro: string; invitation: string }
}
