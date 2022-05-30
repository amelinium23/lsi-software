import { ICurrencyData } from '../types/ICurrencyData'
import { FunctionComponent } from 'react'
import { Container, Table } from 'react-bootstrap'

interface ITableViewProps {
  currencyData?: ICurrencyData[]
}

const CurrencyTable: FunctionComponent<ITableViewProps> = ({
  currencyData,
}) => {
  if (currencyData === undefined || currencyData.length === 0) {
    return <h1>Not found!</h1>
  }

  return (
    currencyData && (
      <Container>
        <Table hover bordered>
          <thead>
            <tr>
              <th>Symbol waluty</th>
              <th>Waluta</th>
              <th>Kurs wality</th>
            </tr>
          </thead>
          <tbody>
            {currencyData.map((currency) => (
              <tr key={currency.code}>
                <td>{currency.code}</td>
                <td>{currency.currency}</td>
                <td>{currency.mid}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    )
  )
}

export default CurrencyTable
