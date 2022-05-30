import { createContext, useContext } from 'react'

const UserContext = createContext({
  theme: 'light',
  filterValue: '',
  pageNumber: 1,
  pageSize: 10,
})

export const useUserContext = () => useContext(UserContext)
