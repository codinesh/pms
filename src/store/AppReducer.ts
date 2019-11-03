import { IGlobalInfo, IBill } from '../Interfaces/AppInterface'
import { AppContext } from './BillsContext'

export interface AppContextProps {
  appState: IGlobalInfo
  bills: IBill[]
}

export const initialState: AppContextProps = {
  appState: {
    UserId: '',
    ProfileImageUri: '',
    UserDisplayName: '',
    Email: ''
  },
  bills: [
    {
      id: 'One',
      date: new Date('30/10/2019'),
      amount: 12345
    },
    {
      id: 'Two',
      date: new Date('30/10/2019'),
      amount: 1345
    }
  ]
}

export type Action =
  | { type: 'FETCH_APP_DATA'; payload: IGlobalInfo }
  | { type: 'ADD_BILL'; payload: { amount: number } }
  | {
      type: 'UPDATE_SITE_URL'
      payload: { fetchSiteUrl: string; fetchSiteTitle: string }
    }

export const appReducer = (
  state: AppContextProps,
  action: Action
): AppContextProps => {
  switch (action.type) {
    case 'FETCH_APP_DATA':
      return {
        ...state,
        appState: {
          UserId: action.payload.UserId,
          ProfileImageUri: action.payload.ProfileImageUri,
          UserDisplayName: action.payload.UserDisplayName,
          Email: action.payload.Email
        }
      }
    case 'ADD_BILL':
      return {
        ...state,
        bills: [
          ...state.bills,
          {
            id: 'three',
            date: new Date('30/10/2019'),
            amount: action.payload.amount
          }
        ]
      }
    default:
      return state
  }
}
