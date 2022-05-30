import { CurrencyData } from '../../types/CurrencyData'

export type State = {
  theme: string
  filterValue: string
  pageNumber: number
  pageSize: number
  activePage: number
  currencyData?: CurrencyData[]
}

export type Action<T> = {
  type: string
  payload: T | T[]
}
