import React from "react";
import { Card,Row,Col,Button } from 'react-bootstrap';

// import proOne from '../../assets/large/ChefsWay_Icon.png';
// import proTwo from '../../assets/large/budget.png';
// import proThree from '../../assets/large/COVID.png';
// import proFour from '../../assets/large/GEDC-icon.png';
// import proFive from '../../assets/large/Healthy-icon.png';
// import proSix from '../../assets/large/OKA-icon.png';


function Portfolio(profile) {
    return (
        <div class="portfolioContainer">
            <h1>My Projects</h1>
            <div class="rowOne">
                <Row xs={1} md={3} className="g-4">
                    {profile.portfolioItems.map((portfolioItem) => (<Col key={portfolioItem.id}>
                            <Card className="bg-dark text-white">
                                <div className="text-center">
                                    <Card.Img variant="top" src={portfolioItem.imgurl} style={{ width: "80%" }} alt="" />
                                </div>
                                <Card.ImgOverlay>
                                    <Card.Body>
                                        <Card.Title>{portfolioItem.title}</Card.Title>
                                        <Card.Text>{portfolioItem.description}</Card.Text>
                                    </Card.Body>
                                </Card.ImgOverlay>
                                <Card.Footer >
                                    <Card.Link><a href={portfolioItem.githubLink} target="_blank" className="fab fa-github fa-2x" style={{color: 'white', textDecoration: 'none'}}></a></Card.Link>
                                    <Card.Link><a href={portfolioItem.appLink} target="_blank" className="fas fa-external-link-square-alt fa-2x" style={{color: 'white', textDecoration: 'none'}}></a></Card.Link>
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