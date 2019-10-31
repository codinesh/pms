import { History, Location } from 'history'
import { match, StaticContext } from 'react-router'

export interface IGlobalInfo {
  UserId: string
  ProfileImageUri: string
  UserDisplayName: string
  Email: string
}

export interface IBill {
  id: string
  date: Date
  amount: number
}

export interface HistoryProps {
  history?: History
  location?: Location
  match?: match
  staticContext?: StaticContext
}
