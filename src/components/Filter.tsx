import {
  Col,
  Container,
  InputGroup,
  Row,
  Button,
  FormControl,
} from 'react-bootstrap'
import { useState, ChangeEvent, FunctionComponent } from 'react'

interface IFilterProps {
  onFilter?: (date: string) => void
  filterValue?: string
}

const Filter: FunctionComponent<IFilterProps> = ({ onFilter, filterValue }) => {
  const [date, setDate] = useState(filterValue || '')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
  }
  const onClick = () => {
    setDate('')
  }

  return (
    <Container className="mt-10">
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
