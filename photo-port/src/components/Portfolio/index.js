import React from "react";
import { Card,Row,Col,Button } from 'react-bootstrap';

function Portfolio(profile) {
    return (
        <div class="portfolioContainer">
            <h1>My Projects</h1>
            <div class="rowOne">
                <Row xs={1} md={3} className="g-4">
                    {profile.PortfolioItems.map((PortfolioItem) => (<Col key={PortfolioItem.id}>
                            <Card className="bg-dark text-white">
                                <div className="text-center">
                                    <Card.Img class="portfolioImage" variant="top" src={PortfolioItem.imgurl} style={{ width: "70%" }} alt="" />
                                </div>
                                <Card.Body>
                                    <Card.ImgOverlay>
                                        <blockquote className="blockquote mb-0">
                                            <p class="portfolioTitle">
                                                {' '}{PortfolioItem.title}{' '}
                                            </p>
                                            <footer className="blockquote-footer" class="portfolioDescription">
                                                {PortfolioItem.description}
                                            </footer>
                                        </blockquote>
                                    </Card.ImgOverlay>
                                    <Card.Footer>
                                        <Button variant="light" href={PortfolioItem.githubLink} target="_blank" rel="noreferrer" className="fab fa-github fa-2x" style={{color: 'black', textDecoration: 'none', marginTop: '20px'}}></Button>
                                        <Button variant="light" href={PortfolioItem.appLink} target="_blank" rel="noreferrer" className="fas fa-external-link-square-alt fa-2x" style={{color: 'black', textDecoration: 'none', marginLeft: '10px', marginTop: '20px'}}></Button>
                                    </Card.Footer>
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