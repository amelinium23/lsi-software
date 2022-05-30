import { CurrencyData } from '../types/CurrencyData'
import { Action, State } from './types/State'

export const initialState = {
  theme: 'light',
  filterValue: '',
  pageNumber: 1,
  pageSize: 10,
  currencyData: [] as CurrencyData[],
}

export enum ACTION_TYPES {
  SET_THEME = 'SET_THEME',
  SET_FILTER_VALUE = 'SET_FILTER_VALUE',
  SET_PAGE_NUMBER = 'SET_PAGE_NUMBER',
  SET_PAGE_SIZE = 'SET_PAGE_SIZE',
  SET_CURRENCY_DATA = 'SET_CURRENCY_DATA',
}

export const reducer = (state: State, action: Action<any>): State => {
  switch (action.type) {
    case ACTION_TYPES.SET_THEME:
      return { ...state, theme: `${action.payload}` }
    case ACTION_TYPES.SET_FILTER_VALUE:
      return { ...state, filterValue: `${action.payload}` }
    case ACTION_TYPES.SET_PAGE_NUMBER:
      let pageNumber =
        typeof action.payload === 'string'
          ? parseInt(action.payload)
          : action.payload
      return { ...state, pageNumber: pageNumber }
    case ACTION_TYPES.SET_PAGE_SIZE:
      let pageSize =
        typeof action.payload === 'string'
          ? parseInt(action.payload)
          : action.payload
      return { ...state, pageSize: pageSize }
    case ACTION_TYPES.SET_CURRENCY_DATA:
      return { ...state, currencyData: action.payload }
    default:
      return state
  }
}
