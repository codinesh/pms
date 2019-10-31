import React, { useEffect } from 'react'
import '../assets/styles/App.css'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  useEffect(() => {
    console.log('header loaded...')
  }, [])
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Link to='/home' className='nav-link'>
              Home
            </Link>
            <Link to='/bill' className='nav-link'>
              Bill
            </Link>
            <Link to='/about' className='nav-link'>
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
