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
                                    <Card.Img class="portfolioImage" variant="top" src={PortfolioItem.imgurl} style={{ width: "80%" }} alt="" />
                                </div>
                                <Card.ImgOverlay>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                            <p>
                                                {' '}{PortfolioItem.title}{' '}
                                            </p>
                                            <footer className="blockquote-footer">
                                                {PortfolioItem.description}
                                            </footer>
                                        </blockquote>
                                    </Card.Body>
                                </Card.ImgOverlay>
                                <Card.Footer >
                                    <Card.Link href={`${PortfolioItem.githubLink}`} target="_blank" className="fab fa-github fa-2x" style={{color: 'white', textDecoration: 'none'}}></Card.Link>
                                    <Card.Link href={PortfolioItem.appLink} target="_blank" className="fas fa-external-link-square-alt fa-2x" style={{color: 'white', textDecoration: 'none'}}></Card.Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default Portfolio;