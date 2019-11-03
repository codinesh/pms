import React, { CSSProperties, useEffect, useState } from 'react'
import { AppContext, AppDispatch } from '../store/BillsContext'
import {
  InputGroup,
  FormControl,
  Card,
  CardColumns,
  Form,
  Button
} from 'react-bootstrap'
import { IBill } from '../Interfaces/AppInterface'

const App: React.FC = () => {
  const { bills } = React.useContext(AppContext)
  const dispatch = React.useContext(AppDispatch)

  let [state, setState] = useState<IBill>({
    id: '0',
    amount: 0,
    date: new Date()
  })

  let billStyle: CSSProperties = {
    minHeight: '5vh',
    width: '100vw'
  }

  useEffect(() => {}, [billStyle])

  return (
    <div>
      <Form onSubmit={(e: React.FormEvent) => e.preventDefault()}>
        <Card
          border='secondary'
          style={{ marginBottom: 15 }}
          onClick={() => {
            dispatch({ type: 'ADD_BILL', payload: { amount: state.amount } })
          }}>
          <Form.Group controlId='tes'>
            <InputGroup className='mb-3'>
              <InputGroup.Prepend>
                <InputGroup.Text>₹</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id='test'
                value={state.amount + ''}
                aria-label='Bill Amount'
                onChange={() => {
                  setState({ ...state, amount: 100 })
                }}
              />
            </InputGroup>
          </Form.Group>
          <InputGroup className='mb-3'>
            <InputGroup.Prepend>
              <InputGroup.Text>₹</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              id='test'
              value={state.amount + ''}
              aria-label='Bill Amount'
              onChange={() => {
                setState({ ...state, amount: 100 })
              }}
            />
          </InputGroup>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Card>
      </Form>

      <CardColumns
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
        {bills.map(bill => (
          <Card
            key={bill.id}
            bg='dark'
            text='white'
            style={{
              width: '18rem'
              //margin: '5px'
            }}>
            <Card.Body>
              <Card.Title>Dark Card Title</Card.Title>
              <Card.Text>
                <div>
                  <p>{bill.id}</p>
                  <p>{bill.amount}</p>
                  <p>{bill.date.toLocaleDateString()} </p>
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        ))}
      </CardColumns>
    </div>
  )
}

export default App
