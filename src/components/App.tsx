import axios from 'axios'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { ICurrencyData } from '../types/ICurrencyData'
import CurrencyTable from './CurrencyTable'

const API_URL = 'https://api.nbp.pl/api/exchangerates/tables/A/?format=json'

const App = () => {
  const [currencyData, setCurrencyData] = useState<ICurrencyData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(API_URL)
      const data = await response.data
      const currencies = data[0].rates
      setCurrencyData(currencies)
    }
    fetchData()
  }, [])

  return (
    <Container>
      <CurrencyTable currencyData={currencyData} />
    </Container>
  )
}

export default App
