import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

type Props = {}

const HeaderComponent = (props: Props) => {
  return (
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Character Counter
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default HeaderComponent;