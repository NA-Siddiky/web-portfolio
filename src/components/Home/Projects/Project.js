import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Project({ pr }) {
  const { name, img, teach, link, github, desc } = pr;
  return (
    <Card style={{ width: '500px', margin: '20px' }} class=' shadow rounded'>
      <Card.Img variant="top" height="200px" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{teach}</Card.Title>
        <Card.Text>
          {desc.substring(0, 250)}
        </Card.Text>
        <div className='d-flex justify-content-between'>
          <Button target='_blank' variant="primary" href={link}>Visit Site</Button>
          <Button target='_blank' variant="primary" href={github}>View Code</Button>
        </div>

      </Card.Body>
    </Card>
  )
}

export default Project
