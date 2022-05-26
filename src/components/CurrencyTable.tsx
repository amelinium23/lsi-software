import { ICurrencyData } from '../types/ICurrencyData'
import { FunctionComponent } from 'react'
import { Container, Table } from 'react-bootstrap'

interface ITableViewProps {
  currencyData: ICurrencyData[]
}

const CurrencyTable: FunctionComponent<ITableViewProps> = ({
  currencyData,
}) => {
  if (currencyData === null) {
    return <h1>Not good</h1>
  }
  const headers = Object.keys(currencyData[0]).map(
    (key) => key.charAt(0).toUpperCase() + key.slice(1),
  )

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currencyData &&
            currencyData.map((currency) => (
              <tr key={currency.code}>
                <td>{currency.code}</td>
                <td>{currency.currency}</td>
                <td>{currency.mid}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default CurrencyTable
