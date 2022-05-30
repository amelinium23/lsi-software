import { FunctionComponent } from 'react'
import { Container, Pagination } from 'react-bootstrap'

interface IPaginationProps {
  pageNumber: number
  pageSize: number
  totalItems: number
}

const PaginationComponent: FunctionComponent<IPaginationProps> = ({
  pageNumber,
  pageSize,
  totalItems,
}) => {
  return (
    <Container>
      <Pagination></Pagination>
    </Container>
  )
}

export default PaginationComponent
