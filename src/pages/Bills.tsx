import React, { CSSProperties, useEffect, useState } from 'react'
import { AppContext, AppDispatch } from '../store/BillsContext'
import { InputGroup, FormControl, Row, Container, Card } from 'react-bootstrap'
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
    backgroundColor: 'orange',
    minHeight: '5vh',
    marginBottom: '10px'
  }

  useEffect(() => {}, [billStyle])

  return (
    <div>
      <div key={0} style={billStyle}>
        <Card
          bg='dark'
          text='white'
          style={{ width: '18rem' }}
          onClick={() => {
            dispatch({ type: 'ADD_BILL', payload: { amount: state.amount } })
          }}>
          <Card.Body>
            <Card.Title>add bill</Card.Title>
          </Card.Body>
        </Card>

        <Container>
          <Row>
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

            <br />
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Bill Description</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                as='textarea'
                style={{ minHeight: '40px' }}
                aria-label='With textarea'
              />
            </InputGroup>
          </Row>
        </Container>
      </div>
      {bills.map(bill => (
        <div key={bill.id} style={billStyle}>
          <p>{bill.id}</p>
          <p>{bill.amount}</p>
          <p>{bill.date.toLocaleDateString()} </p>
        </div>
      ))}
    </div>
  )
}

export default App
