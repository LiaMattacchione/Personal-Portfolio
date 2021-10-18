import React, { Component } from "react";
import { CardGroup,Card,Row,Col,Grid } from 'react-bootstrap';

import proOne from '../../assets/large/ChefsWay_Icon.png';
import proTwo from '../../assets/large/budget.png';
import proThree from '../../assets/large/COVID.png';
import proFour from '../../assets/large/GEDC-icon.png';
import proFive from '../../assets/large/Healthy-icon.png';
import proSix from '../../assets/large/OKA-icon.png';

class Portfolio extends Component {
    render() {
        return (
            <div class="portfolioContainer">
                <h1>My Projects</h1>
                <div class="rowOne">
                    <Row xs={1} md={3} className="g-4">
                        <Col>
                            <Card className="bg-dark text-white">
                                <Card.Header>ChefsWay</Card.Header>
                                <div className="text-center">
                                    <Card.Img variant="top" src={proOne} style={{ width: "56%" }} alt="" />
                                </div>
                                <Card.ImgOverlay>
                                    <Card.Body>
                                        <Card.Header> </Card.Header>
                                        <Card.Title>An easy to use app to join a cooking network to share your delicious creations.</Card.Title>
                                    </Card.Body>
                                </Card.ImgOverlay>
                                <Card.Footer >
                                    <Card.Link href="https://github.com/BootcampProject/ChefsWay" target="_blank" className="fab fa-linkedin-in fa-2x" style={{color: 'white', textDecoration: 'none'}}></Card.Link>
                                    <Card.Link href="https://chefsway.herokuapp.com/" target="_blank" className="fas fa-external-link-square-alt fa-2x" style={{color: 'white', textDecoration: 'none'}}></Card.Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="bg-dark text-white">
                                <Card.Header>Budget Tracker</Card.Header>
                                <div className="text-center">
                                    <Card.Img variant="top" src={proTwo} style={{ width: "60%" }} alt="" />
                                </div>
                                <Card.ImgOverlay>
                                    <Card.Body>
                                        <Card.Header> </Card.Header>
                                        <Card.Title>A simple application that allows you to track your expenses on and offline.</Card.Title>
                                    </Card.Body>
                                </Card.ImgOverlay>
                                <Card.Footer>
                                    <Card.Link href="https://github.com/LiaMattacchione/PWA-BudgetTracker" target="_blank" className="fab fa-linkedin-in fa-2x" style={{color: 'white', textDecoration: 'none'}}></Card.Link>
                                    <Card.Link href="https://budget-tracker-lia.herokuapp.com/" target="_blank" className="fas fa-external-link-square-alt fa-2x" style={{color: 'white', textDecoration: 'none'}}></Card.Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="bg-dark text-white">
                                <Card.Header>Staying Current with COVID</Card.Header>
                                <div className="text-center">
                                    <Card.Img variant="top" src={proThree} style={{ width: "100%" }} alt="" />
                                </div>
                                <Card.ImgOverlay>
                                    <Card.Body>
                                        <Card.Header> </Card.Header>
                                        <Card.Title>Stay current with the COVID-19 panedmic with news, stats and scientific studies.</Card.Title>
                                    </Card.Body>
                                </Card.ImgOverlay>
                                <Card.Footer>
                                    <Card.Link href="https://github.com/LiaMattacchione/Current_COVID19" target="_blank" className="fab fa-linkedin-in fa-2x" style={{color: 'white', textDecoration: 'none'}}></Card.Link>
                                    <Card.Link href="https://bootcampproject.github.io/Group5-COVID-Coders/" target="_blank" className="fas fa-external-link-square-alt fa-2x" style={{color: 'white', textDecoration: 'none'}}></Card.Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div class="rowOne">
                    <Row xs={1} md={3} className="g-4">
                        <Col>
                            <Card className="bg-dark text-white">
                                <Card.Header>The Geriatric Emergency Department Collaborative</Card.Header>
                                <div className="text-center">
                                    <Card.Img variant="top" src={proFour} style={{ width: "70%" }} alt="" />
                                </div>
                                <Card.ImgOverlay>
                                    <Card.Body>
                                        <Card.Header> </Card.Header>
                                        <Card.Title>Nationwide collaborative dedicated to improving the quality of care for older people in Emergency Departments with the goal of reducing harm and improving healthcare outcomes.</Card.Title>
                                    </Card.Body>
                                </Card.ImgOverlay>
                                <Card.Footer>
                                    <Card.Link href="https://gedcollaborative.com/" target="_blank" className="fas fa-external-link-square-alt fa-2x" style={{color: 'white', textDecoration: 'none'}}></Card.Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="bg-dark text-white">
                                <Card.Header>Healthy Debate</Card.Header>
                                <div className="text-center">
                                    <Card.Img variant="top" src={proFive} style={{ width: "71%" }} alt="" />
                                </div>
                                <Card.ImgOverlay>
                                    <Card.Body>
                                        <Card.Header> </Card.Header>
                                        <Card.Title>Publishes journalism about health care in Canada.</Card.Title>
                                    </Card.Body>
                                </Card.ImgOverlay>
                                <Card.Footer>
                                    <Card.Link href="https://healthydebate.ca/" target="_blank" className="fas fa-external-link-square-alt fa-2x" style={{color: 'white', textDecoration: 'none'}}></Card.Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="bg-dark text-white">
                                <Card.Header>Kinesiology Evidence and Engagement Network</Card.Header>
                                <div className="text-center">
                                    <Card.Img variant="top" src={proSix} style={{ width: "67%" }} alt="" />
                                </div>
                                <Card.ImgOverlay>
                                    <Card.Body>
                                        <Card.Header> </Card.Header>
                                        <Card.Title>A practice-based research network, to serve as a hub to support collaboration between front-line Kinesiologists and academic researchers.</Card.Title>
                                    </Card.Body>
                                </Card.ImgOverlay>
                                <Card.Footer>
                                    <Card.Link href="https://oka.on.ca/" target="_blank" className="fas fa-external-link-square-alt fa-2x" style={{color: 'white', textDecoration: 'none'}}></Card.Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }

}

export default Portfolio;