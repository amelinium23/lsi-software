import {
  Col,
  Container,
  InputGroup,
  Row,
  Button,
  FormControl,
} from 'react-bootstrap'
import { useState, ChangeEvent, FunctionComponent, Dispatch } from 'react'
import { ACTION_TYPES } from '../state/Reducer'
import { Action } from '../state/types/State'

interface IFilterProps {
  onFilter: Dispatch<Action<string>>
  filterValue?: string
}

const Filter: FunctionComponent<IFilterProps> = ({ onFilter, filterValue }) => {
  const [date, setDate] = useState(filterValue || '')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onFilter({ type: ACTION_TYPES.SET_FILTER_VALUE, payload: e.target.value })
    setDate(e.target.value)
  }

  const onClick = () => {
    onFilter({ type: ACTION_TYPES.SET_FILTER_VALUE, payload: '' })
    setDate('')
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
            placeholder=""
            type="date"
            value={date}
            onChange={onChange}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Filter
