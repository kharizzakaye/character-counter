import React from 'react'
import Card from 'react-bootstrap/Card';

const CardComponent = ( { cardTitle, count } : { cardTitle: string, count: number } ) => {
  return (
    <Card>
        <Card.Body>
            <Card.Title>{count}</Card.Title>

            <Card.Text>
                {cardTitle}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default CardComponent