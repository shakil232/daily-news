
import React from 'react';
import './News.css';
import {Card, Button} from 'react-bootstrap'

const News = (props) => {
    
    const {title, author, description } = props.article
    return (
        <div className="mt-3">
            <Card className="mt-4">
                <Card.Header>{author}</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text> { description } </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
           
        </div>

    );
};

export default News;