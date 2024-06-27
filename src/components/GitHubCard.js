import React from "react"
import Card from "react-bootstrap/Card"
import IMG from './IMG.jpg'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={IMG} />
        <Card.Body>
            <Card.Title>laoloser</Card.Title>
            <Card.Text>
            I make videogame content on Youtube.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard