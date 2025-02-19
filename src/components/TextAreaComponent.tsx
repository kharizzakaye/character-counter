import React from 'react'
import Form from 'react-bootstrap/Form';

type Props = {}

const TextAreaComponent = (props: Props) => {
  return (
    <>
        <h1>Analyze your text in real-time.</h1>

        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={4} />
            </Form.Group>
        </Form>
    </>
  )
}

export default TextAreaComponent