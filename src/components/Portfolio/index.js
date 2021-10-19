import React from "react";
import { Card,Row,Col,Button } from 'react-bootstrap';

function Portfolio(profile) {
    return (
        <div class="portfolioContainer">
            <h1>My Projects</h1>
            <div class="rowOne">
                <Row xs={1} md={3} className="g-4">
                    {profile.PortfolioItems.map((PortfolioItem) => (<Col key={PortfolioItem.id}>
                            <Card className="customCard text-black">
                                <Card.Header>{PortfolioItem.title}</Card.Header>
                                <Card.Img class="portfolioImage" variant="top" src={PortfolioItem.imgurl} alt="" />
                                <Card.Body>
                                    {PortfolioItem.description}
                                        <div class="portfolioButtons">
                                            <Button variant="dark" href={PortfolioItem.githubLink} target="_blank" rel="noreferrer" className="fab fa-github fa-2x" style={{color: 'white', textDecoration: 'none', marginTop: '20px'}}></Button>
                                            <Button variant="dark" href={PortfolioItem.appLink} target="_blank" rel="noreferrer" className="fas fa-external-link-square-alt fa-2x" style={{color: 'white', textDecoration: 'none', marginLeft: '10px', marginTop: '20px'}}></Button>
                                        </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default Portfolio;