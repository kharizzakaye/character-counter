import React from 'react'
import HeaderComponent from './HeaderComponent'
import TextAreaComponent from './TextAreaComponent'
import { Container } from 'react-bootstrap'

type Props = {}

const MainComponent = (props: Props) => {
    return (
        <>
            <Container>
                <HeaderComponent />
                <TextAreaComponent />
            </Container>
        </>
    )
}

export default MainComponent