import axios, { AxiosError } from 'axios'
import { useEffect, useReducer, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { API_URL } from '../constants/urls'
import { ACTION_TYPES, initialState, reducer } from '../state/Reducer'
import { State } from '../state/types/State'
import CurrencyTable from './CurrencyTable'
import ErrorModal from './ErrorModal'
import Filter from './Filter'
import PaginationComponent from './PaginationComponent'

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [
    { theme, filterValue, pageNumber, pageSize, currencyData, errorMessage },
    dispatch,
  ] = useReducer(reducer, initialState as State)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(API_URL)
        const data = await response.data
        const currencies = data[0].rates
        dispatch({ type: ACTION_TYPES.SET_CURRENCY_DATA, payload: currencies })
      } catch (error) {
        const err = error as Error
        dispatch({
          type: ACTION_TYPES.SET_ERROR_MESSAGE,
          payload: err.message,
        })
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const startIndex = (pageNumber - 1) * pageSize || 0
  const endIndex = pageNumber * pageSize || pageSize
  const dataLength = currencyData?.length || 0
  const realData = currencyData?.slice(startIndex, endIndex)

  return (
    <Container>
      {isLoading ? (
        <Container className="d-flex justify-content-center">
          <Spinner animation="border" variant="dark" />
        </Container>
      ) : (
        <Container className={`${theme}`}>
          <Filter
            filterValue={filterValue}
            dispatch={dispatch}
            setIsLoading={setIsLoading}
          />
          <CurrencyTable currencyData={realData} />
          <PaginationComponent
            dispatch={dispatch}
            pageNumber={pageNumber}
            pageSize={pageSize}
            totalItems={dataLength}
          />
        </Container>
      )}
      <ErrorModal dispatch={dispatch} errorMessage={errorMessage} />
    </Container>
  )
}

export default App
