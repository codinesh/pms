import { IGlobalInfo, IBill } from '../Interfaces/AppInterface'

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
  | { type: 'ADD_BILL'; payload: string }
  | {
      type: 'UPDATE_SITE_URL'
      payload: { fetchSiteUrl: string; fetchSiteTitle: string }
    }

export const appReducer = (state: AppContextProps, action: Action) => {
  console.log('reducer')
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
    case 'UPDATE_SITE_URL':
      return {
        ...state,
        fetchSiteUrl: action.payload.fetchSiteUrl,
        fetchSiteTitle: action.payload.fetchSiteTitle
      }
    case 'ADD_BILL':
      return {
        ...state,
        bills: []
      }
    default:
      return state
  }
}
