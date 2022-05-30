import { ChangeEvent, Dispatch, FunctionComponent } from 'react'
import { Col, Form, Pagination, Row } from 'react-bootstrap'
import { pageSizes } from '../constants/pageSizes'
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
  const lastPage = Math.ceil(totalItems / pageSize)
  const onPreviousButtonClick = () => {
    dispatch({ type: ACTION_TYPES.SET_PAGE_NUMBER, payload: pageNumber - 1 })
  }

  const onPageClick = (pageNum: number) => {
    dispatch({ type: ACTION_TYPES.SET_PAGE_NUMBER, payload: pageNum })
  }

  const onNextButtonClick = () => {
    dispatch({ type: ACTION_TYPES.SET_PAGE_NUMBER, payload: pageNumber + 1 })
  }

  const onPageSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: ACTION_TYPES.SET_PAGE_SIZE,
      payload: parseInt(e.target.value),
    })
  }

  const onFirstPageClick = () => {
    dispatch({ type: ACTION_TYPES.SET_PAGE_NUMBER, payload: 1 })
  }

  const onLastPageClick = () => {
    dispatch({ type: ACTION_TYPES.SET_PAGE_NUMBER, payload: lastPage })
  }

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
    <Row className="rowStyle">
      <Col className="text-right" md={7}>
        <p>{`Showing ${pageNumber} to ${pageSize} of ${totalItems}`}</p>
      </Col>
      <Col md={3}>
        <Pagination>
          <Pagination.Prev
            disabled={pageNumber === 1}
            onClick={onPreviousButtonClick}
          />
          <Pagination.First
            disabled={pageNumber === 1}
            onClick={onFirstPageClick}
          />
          {pageRange(1, lastPage).map((pageNum) => (
            <Pagination.Item
              key={`${pageNum}-${pageNumber}`}
              onClick={() => onPageClick(pageNum)}
              active={pageNum === pageNumber}
            >
              {pageNum}
            </Pagination.Item>
          ))}
          <Pagination.Last
            disabled={pageNumber === lastPage}
            onClick={onLastPageClick}
          />
          <Pagination.Next
            disabled={pageNumber === lastPage}
            onClick={onNextButtonClick}
          />
        </Pagination>
      </Col>
      <Col md={2}>
        <Form.Select onChange={onPageSizeChange} value={pageSize}>
          {pageSizes.map((size) => (
            <option key={size}>{size}</option>
          ))}
        </Form.Select>
      </Col>
    </Row>
  )
}

export default PaginationComponent
