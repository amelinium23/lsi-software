import { CurrencyData } from '../types/CurrencyData'
import { Action, State } from './types/State'

export const initialState = {
  theme: 'light',
  filterValue: '',
  pageNumber: 1,
  pageSize: 10,
  currencyData: [] as CurrencyData[],
  errorMessage: '',
}

export enum ACTION_TYPES {
  SET_THEME = 'SET_THEME',
  SET_FILTER_VALUE = 'SET_FILTER_VALUE',
  SET_PAGE_NUMBER = 'SET_PAGE_NUMBER',
  SET_PAGE_SIZE = 'SET_PAGE_SIZE',
  SET_CURRENCY_DATA = 'SET_CURRENCY_DATA',
  SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE',
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
      if (
        state.pageNumber >=
        Math.ceil(
          state.currencyData ? state.currencyData?.length / state.pageSize : 1,
        )
      ) {
        return { ...state, pageNumber: 1, pageSize: pageSize }
      }
      return { ...state, pageSize: pageSize }
    case ACTION_TYPES.SET_CURRENCY_DATA:
      return { ...state, currencyData: action.payload }
    case ACTION_TYPES.SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload }
    default:
      return state
  }
}
