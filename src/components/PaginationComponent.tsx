import { Dispatch, FunctionComponent } from 'react'
import { Col, Container, Pagination, Row } from 'react-bootstrap'
import { ACTION_TYPES } from '../state/Reducer'
import { Action } from '../state/types/State'

interface IPaginationProps {
  pageNumber: number
  pageSize: number
  totalItems: number
  dispatch: Dispatch<Action<number>>
}

const PaginationComponent: FunctionComponent<IPaginationProps> = ({
  pageNumber,
  pageSize,
  totalItems,
  dispatch,
}) => {
  const onPreviousButtonClick = () => {
    dispatch({ type: ACTION_TYPES.SET_PAGE_NUMBER, payload: pageNumber-- })
  }

  const onPageClick = (pageNum: number) => {
    dispatch({ type: ACTION_TYPES.SET_PAGE_NUMBER, payload: pageNum })
  }

  const onNextButtonClick = () => {
    dispatch({ type: ACTION_TYPES.SET_PAGE_NUMBER, payload: pageNumber++ })
  }

  const lastPage = Math.ceil(totalItems / pageSize)

  const pageRange = (from: number, to: number): number[] => {
    if (to < from) return []
    return (
      Array.from({ length: (to - from + 1) as number })
        .fill(from)
        // @ts-ignore
        .map((x: number, y: number) => x + y)
    )
  }

  return (
    <Container className="mt-1 mb-1">
      <Row>
        <Col className="text-right" md={10}>
          <p>{`Showing ${pageNumber} to ${pageSize} of ${totalItems}`}</p>
        </Col>
        <Col md={2} style={{ alignItems: 'flex-end' }}>
          <Pagination>
            {pageNumber === 1 ? null : (
              <Pagination.Prev onClick={onPreviousButtonClick} />
            )}
            {pageRange(1, lastPage).map((pageNum) => (
              <Pagination.Item
                key={`${pageNum}-${activePage}`}
                onClick={() => onPageClick(pageNum)}
                active={pageNum === pageNumber}
              >
                {pageNum}
              </Pagination.Item>
            ))}
            {pageNumber === lastPage ? null : (
              <Pagination.Next onClick={onNextButtonClick} />
            )}
          </Pagination>
        </Col>
      </Row>
    </Container>
  )
}

export default PaginationComponent
