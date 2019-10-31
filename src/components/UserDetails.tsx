import React, { CSSProperties } from 'react'

interface IUserDetails {
  name: String
}

const style: CSSProperties = {
  marginRight: '1em',
  display: 'flex',
  flexDirection: 'row'
}

const onlineindicator: CSSProperties = {
  color: 'green',
  backgroundColor: 'green',
  minHeight: '12px',
  maxHeight: '12px',
  maxWidth: '12px',
  borderRadius: 6
}

const UserDetails = (props: IUserDetails) => {
  return (
    <div style={style}>
      <p style={onlineindicator}></p>
      <p>{props.name}</p>
    </div>
  )
}

export default UserDetails
