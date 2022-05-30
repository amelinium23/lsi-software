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
    <Container className="mt-4">
      <Pagination></Pagination>
    </Container>
  )
}

export default PaginationComponent
