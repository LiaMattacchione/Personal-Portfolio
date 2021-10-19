import React, { Component } from 'react';
import { Button,Card,Accordion,Row,Col,ListGroup } from 'react-bootstrap';
    
class Resume extends Component {

    render() {

        return (
            <div class="resumeContainer">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Education</Accordion.Header>
                            <Accordion.Body>
                                <Row xs={1} md={3} className="g-4">
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>Coding Bootcamp Certificate</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">November 2021</Card.Subtitle>
                                                <Card.Text>University of Toronto</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>Master of Professional Kinesiology</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">June 2021</Card.Subtitle>
                                                <Card.Text>University of Toronto</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>Bachelor of Kinesiology</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">June 2017</Card.Subtitle>
                                                <Card.Text>University of Toronto</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Skills</Accordion.Header>
                            <Accordion.Body>
                                <Row xs={1} md={3} className="g-4">
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>Language Skills</Card.Title>
                                                <ListGroup variant="flush">
                                                    <ListGroup.Item>English - Fluent</ListGroup.Item>
                                                    <ListGroup.Item>Italian - Fluent</ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>Computer Skills</Card.Title>
                                                    <ListGroup variant="flush">
                                                        <ListGroup.Item>HTML / CSS / JavaScript / PHP</ListGroup.Item>
                                                        <ListGroup.Item>MongoDB / Express(.js) / React(.js) / Node(.js)</ListGroup.Item>
                                                        <ListGroup.Item>GitHub / Heroku</ListGroup.Item>
                                                        <ListGroup.Item>InVision Studio</ListGroup.Item>
                                                        <ListGroup.Item>WordPress</ListGroup.Item>
                                                        <ListGroup.Item>Word / Excel / PowerPoint / MacOS equivalents </ListGroup.Item>
                                                        <ListGroup.Item>Photoshop / Adobe Premier / GarageBand</ListGroup.Item>
                                                    </ListGroup>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>Interpersonal Skills</Card.Title>
                                                    <ListGroup variant="flush">
                                                        <ListGroup.Item>Detail Oriented</ListGroup.Item>
                                                        <ListGroup.Item>Multitasker</ListGroup.Item>
                                                        <ListGroup.Item>Highly Organized</ListGroup.Item>
                                                    </ListGroup>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Employment Experience</Accordion.Header>
                            <Accordion.Body>
                                <div class="employmentContainer">
                                    <Row xs={1} md={2} className="g-4">
                                        <Col>
                                            <Card>
                                                <Card.Body>
                                                    <Card.Title>Independent Contractor</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">THE GERIATRIC EMERGENCY DEPARTMENT COLLABORATIVE</Card.Subtitle>
                                                    <Card.Subtitle className="mb-2 text-muted">April 2021- November 2021</Card.Subtitle>
                                                    <Card.Text>
                                                    Performed quality assurance on staging WordPress website ensuring links, layouts, and document formats are themed 
                                                    appropriately and functional. Alongside co-workers create, adjust and maximize layout of the GEDC website as content
                                                    is updated. Create landing page layouts for private healthcare events including video and audio edition of webinars, 
                                                    editing of chat notes and overarching themes, and maximizing SEO. Create social media content in alignment with GEDC
                                                    initiatives and share existing resources via “Med Twitter”. Created and manage GEDC LinkedIn page to increase b2b 
                                                    opportunities with private healthcare organizations across America and Canada. Utilize social media analytics to 
                                                    examine viewership data and identify potential website changes as well as releasing specific content to maximize
                                                    viewership statistics.
                                                    </Card.Text>
                                                    <blockquote className="blockquote mb-0">
                                                        <footer className="blockquote-footer">
                                                            Employer: Lorraine Trecroce
                                                        </footer>
                                                    </blockquote>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Body>
                                                    <Card.Title>Independent Contractor</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">HEALTHY DEBATE</Card.Subtitle>
                                                    <Card.Subtitle className="mb-2 text-muted">December 2020- November 2021</Card.Subtitle>
                                                    <Card.Text>
                                                    Read, analyze and categorize over 1500 articles, opinion pieces and podcasts in order to 
                                                    appropriately label and tag on the website back-end to maximize user searches. Utilized 
                                                    WordPress, website development software, to update and tag all content into categories. 
                                                    Alongside co-workers to create, adjust and maximize layout of the Healthy Debate website. 
                                                    Using Google Analytics, examine viewership data and identify potential website layout 
                                                    changes as well as releasing written content to maximize viewership statistics. Create 
                                                    social media content calendars in alignment with Healthy Debate material and produce and
                                                    release social media posts on all platforms. Tracking and reconciling P-Card receipts
                                                    against business account charges.
                                                    </Card.Text>
                                                    <blockquote className="blockquote mb-0">
                                                        <footer className="blockquote-footer">
                                                            Employer: Dr. Seema Marwaha
                                                        </footer>
                                                    </blockquote>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>

                                <div class="employmentContainer">
                                    <Row xs={1} md={2} className="g-4">
                                        <Col>
                                            <Card>
                                                <Card.Body>
                                                    <Card.Title>Project Coordinator</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">ONTARIO KINESIOLOGY ASSOCIATION</Card.Subtitle>
                                                    <Card.Subtitle className="mb-2 text-muted">October 2020- January 2021</Card.Subtitle>
                                                    <Card.Text>
                                                    Leading the KEEN project to ensure project plans and tasks progress in a timely manner. 
                                                    Assess project risks and issues and provide solutions in order to develop project strategic 
                                                    direction. Create new written and video content, finalize existing content through, and 
                                                    utilize HTML to create, update and advance the KEEN website and content. Utilize external 
                                                    web development software, In1touch, to manage and develop new streams within KEEN, and 
                                                    examine membership analytics to assess project outcome achievement to help direct future
                                                     project objectives. Assist the Board of Directors to evaluate and update professional
                                                      documents submitted to Ontario Health. Manage project social media accounts including 
                                                      Facebook, LinkedIn, and Instagram. Coordinate with university placement contacts to 
                                                      accept student placements. Manage the activities of co-op, internship and placement 
                                                      students. Prepare appropriate presentation material including strategic direction and 
                                                      plans, for meetings with the Board of Directors and external stakeholders to discuss
                                                       project progressions, future goals and direction. 
                                                    </Card.Text>
                                                    <blockquote className="blockquote mb-0">
                                                        <footer className="blockquote-footer">
                                                            Employer: Stuart Moulton, Steven Fischer)
                                                        </footer>
                                                    </blockquote>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Internship/Volunteer Experience</Accordion.Header>
                            <Accordion.Body>
                                <div class="employmentContainer">
                                    <Row xs={1} md={2} className="g-4">
                                        <Col>
                                            <Card>
                                                <Card.Body>
                                                    <Card.Title>Project Coordinator / Guest Editor</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">THE YOUNG CANADIANS ROUNDTABLE ON HEALTH</Card.Subtitle>
                                                    <Card.Subtitle className="mb-2 text-muted">June 2021- December 2021</Card.Subtitle>
                                                    <Card.Text>
                                                    Created a youth special series that focused on highlighting and sharing youth experiences throughout 
                                                    the COVID-19 pandemic, how it has affected themselves, their family and/or community. Through the 
                                                    YCRH form a collaborative partnership with Healthy Debate and The Sandbox Project to broadcast this 
                                                    project via Healthy Debate’s platform. The purpose of the project is to highlight the youth experience
                                                     and utilize journalism to acknowledge youth experiences and provide guidance to the readers on how 
                                                     society should proceed in supporting youth and all that they will bring come September 2021. Work
                                                      alongside YCRH executives and members of The Sandbox Project to create and submit grant and 
                                                      project proposals. Create and finalize all documentation regarding budget, parent consent forms
                                                       and project summaries necessary for distribution. With The Sandbox Project contact affiliate youth 
                                                       organizations for youth call-out of multi-media content sharing of COVID-19 experiences. 
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Body>
                                                    <Card.Title>Committee Member</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">THE YOUNG CANADIANS ROUNDTABLE ON HEALTH</Card.Subtitle>
                                                    <Card.Subtitle className="mb-2 text-muted">April 2021- Present</Card.Subtitle>
                                                    <Card.Text>
                                                    Participate in the communications working group contributing and managing content release on 
                                                    social media platforms including Instagram and Twitter. Work alongside committee members on YCRH
                                                     initiatives that focuses on supporting and improving the health and well-being of youth across Canada.
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>

                                <div class="employmentContainer">
                                    <Row xs={1} md={2} className="g-4">
                                        <Col>
                                            <Card>
                                                <Card.Body>
                                                    <Card.Title>Student Kinesiologist</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">BLACK CREEK COMMUNITY HEALTH CENTRE</Card.Subtitle>
                                                    <Card.Subtitle className="mb-2 text-muted">April 2020- May 2020</Card.Subtitle>
                                                    <Card.Text>
                                                    Worked within the Kinesiology department, created a new program (The Home Exercise Program) 
                                                    and laid the foundations for a future program (The Peer Led Exercise and Health Education Program).
                                                     Liaised with Kinesiologists regarding program and content in accordance with client needs as well
                                                      as the Strategic Direction Plan of the Black Creek Community Health Centre. The relationship 
                                                      agreement between the Central Health Local Integration Network and associated community health 
                                                      centres were examined to ensure program feasibility and identified potential barriers.
                                                       Documents that were to be provided to clients were written clearly and concisely to 
                                                       maximize understanding and limit the potential language barrier. 
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}

export default Resume;