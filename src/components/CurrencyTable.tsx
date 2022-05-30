import { ICurrencyData } from '../types/ICurrencyData'
import { FunctionComponent, useMemo } from 'react'
import { Container, Table } from 'react-bootstrap'
import { ArrowDown, ArrowUp, Funnel } from 'react-bootstrap-icons'
// @ts-ignore
import { useTable, useSortBy } from 'react-table'

interface ITableViewProps {
  currencyData?: ICurrencyData[]
}

const CurrencyTable: FunctionComponent<ITableViewProps> = ({
  currencyData,
}) => {
  if (currencyData === undefined || currencyData.length === 0) {
    return <h1>Not found!</h1>
  }

  const data = useMemo(() => currencyData, [])
  const columns = useMemo(
    () => [
      {
        Header: 'Symbol Waluty',
        accessor: 'code',
      },
      {
        Header: 'Waluta',
        accessor: 'currency',
      },
      {
        Header: 'Waluta',
        accessor: 'mid',
      },
    ],
    [],
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy,
    )

  return (
    currencyData && (
      <Container className="p-1">
        <Table hover bordered {...getTableProps()}>
          <thead>
            {
              // @ts-ignore
              headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {/* @ts-ignore */}
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render('Header')}
                      <span style={{ float: 'right' }}>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <ArrowUp />
                          ) : (
                            <ArrowDown />
                          )
                        ) : (
                          <Funnel />
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              ))
            }
          </thead>
          <tbody {...getTableBodyProps()}>
            {/* @ts-ignore */}
            {rows.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {/* @ts-ignore */}
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
    )
  )
}

export default CurrencyTable
