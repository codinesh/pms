import React, { CSSProperties, useEffect } from 'react'
import { useGlobalState, useDispatch } from '../store/BillsContext'

const App: React.FC = () => {
  const { bills } = useGlobalState()
  const dispatch = useDispatch()

  let billStyle: CSSProperties = {
    backgroundColor: 'orange',
    minHeight: '5vh',
    marginBottom: '10px'
  }

  useEffect(() => {
    billStyle = { ...billStyle, backgroundColor: 'red' }
    console.log('effect')
  })

  return (
    <div>
      <div key={0} style={billStyle}>
        <p>create</p>
        <p>{billStyle.backgroundColor}</p>
        <p>{} </p>
      </div>
      {bills.map(bill => (
        <div key={bill.id} style={billStyle}>
          <p>{bill.id}</p>
          <p>{bill.amount}</p>
          <p>{bill.date.toLocaleString()} </p>
        </div>
      ))}

      <input
        type='button'
        onClick={() => {
          // console.log('clicking...')
          // dispatch({ type: 'ADD_BILL', payload: 'test' })
          // console.log('clicking done...')
        }}
        value='Add'
      />
    </div>
  )
}

export default App
