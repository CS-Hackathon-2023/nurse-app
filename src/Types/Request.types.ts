export interface IRequest {
  requestId: string
  userId: string
  requestType: string
  requestDetail: string
  status: string
  severity: string
  ward: string
}

export interface IUser {
  userId: string
  name: string
  age: number
  clientId: string
  room: string
  ward: string
}

export interface ICard {
  requestId: string
  userId: string
  name: string
  age: number
  clientId: string
  ward: string
  room: string
  requestType: string
  requestDetail: string
  status: string
  severity: string
}
