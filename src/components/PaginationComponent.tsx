import { FunctionComponent } from 'react'
import { Col, Container, Pagination, Row } from 'react-bootstrap'

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
    <Container className="mt-1 mb-1">
      <Row>
        <Col className="text-right" md={10}>
          <p>{`Showing ${pageSize} of ${totalItems}`}</p>
        </Col>
        <Col md={2} style={{ alignItems: 'flex-end' }}>
          <Pagination>
            <Pagination.Prev />

            <Pagination.Next />
          </Pagination>
        </Col>
      </Row>
    </Container>
  )
}

export default PaginationComponent
