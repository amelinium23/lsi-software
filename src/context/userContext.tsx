import { createContext, useContext } from 'react'

const changeState = (state: object, key: string, value: string): object => {
  return { ...state, [key]: value }
}

const initialState = createContext({
  theme: 'light',
  filterValue: '',
  pageNumber: 1,
  pageSize: 10,
  changeState: changeState,
})

export const useUserContext = () => useContext(initialState)
