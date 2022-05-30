import axios from 'axios'
import {
  Col,
  Container,
  InputGroup,
  Row,
  Button,
  FormControl,
} from 'react-bootstrap'
import { ChangeEvent, FunctionComponent, Dispatch, SetStateAction } from 'react'
import { ACTION_TYPES } from '../state/Reducer'
import { Action } from '../state/types/State'
import { API_URL_WITH_DATE } from '../constants/urls'

interface IFilterProps {
  dispatch: Dispatch<Action<string>>
  filterValue?: string
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

const Filter: FunctionComponent<IFilterProps> = ({
  dispatch,
  filterValue,
  setIsLoading,
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    fetchDataFromDay(e.target.value)
    dispatch({ type: ACTION_TYPES.SET_FILTER_VALUE, payload: e.target.value })
  }

  const fetchDataFromDay = async (date: string) => {
    try {
      setIsLoading(true)
      const response = await axios.get(API_URL_WITH_DATE(date))
      const data = await response.data[0].rates
      dispatch({ type: ACTION_TYPES.SET_CURRENCY_DATA, payload: data })
    } catch (error) {
      const err = error as Error
      dispatch({ type: ACTION_TYPES.SET_ERROR_MESSAGE, payload: err.message })
    } finally {
      setIsLoading(false)
    }
  }

  const onClick = () => {
    fetchDataFromDay('')
    dispatch({ type: ACTION_TYPES.SET_FILTER_VALUE, payload: '' })
  }

  return (
    <Container className="mt-2">
      <Row>
        <Col md={10}>
          <InputGroup>
            <Button variant="outline-primary" onClick={onClick}>
              Clear filter
            </Button>
          </InputGroup>
        </Col>
        <Col md={2}>
          <FormControl
            placeholder="Place date that you want currencies from"
            type="date"
            value={filterValue}
            onChange={onChange}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Filter
