import axios from 'axios'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useUserContext } from '../context/userContext'
import { ICurrencyData } from '../types/ICurrencyData'
import CurrencyTable from './CurrencyTable'
import Filter from './Filter'
import PaginationComponent from './PaginationComponent'

const API_URL = 'https://api.nbp.pl/api/exchangerates/tables/A/?format=json'

const App = () => {
  const [currencyData, setCurrencyData] = useState<ICurrencyData[]>([])
  const { theme, filterValue, pageNumber, pageSize } = useUserContext()

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(API_URL)
      const data = await response.data
      const currencies = data[0].rates
      setCurrencyData(currencies)
    }
    fetchData()
  }, [])

  const dataLength = currencyData.length

  return (
    <Container className={`${theme}-mt-10`}>
      <Filter />
      <CurrencyTable currencyData={currencyData} />
      <PaginationComponent
        pageNumber={pageNumber}
        pageSize={pageSize}
        totalItems={dataLength}
      />
    </Container>
  )
}

export default App
