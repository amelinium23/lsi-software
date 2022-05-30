import {
  Col,
  Container,
  InputGroup,
  Row,
  Button,
  FormControl,
} from 'react-bootstrap'
import { useState, ChangeEvent } from 'react'

const Filter = () => {
  const [date, setDate] = useState('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
  }
  const onClick = () => {}

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
          <FormControl type="date" value={date} onChange={onChange} />
        </Col>
      </Row>
    </Container>
  )
}

export default Filter
