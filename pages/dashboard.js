import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import {Row, Col, Carousel, Navbar, Card} from 'react-bootstrap'
import React, {useState, useEffect} from 'react'
import utils from '../styles/utils.module.css'

export default function Dashboard(){

    return (
        <div className={utils.mainstuff}>
            <Head>
                <title>Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                    crossOrigin="anonymous"
                />
            </Head>
            <header>
                <Navbar bg="light" variant="lightbox" expand="lg" className={utils.bar}>
                    <Navbar.Brand href="#">TAMU-Datathon</Navbar.Brand>
                </Navbar>
            </header>
            <body className={utils.dash_body}>

                <br/>
                <Card>
                    <Card.Header color="blue">
                    <Row className="justify-content-center">
                        <h1>Welcome to your participant portal Jessica!</h1>
                    </Row>
                    </Card.Header>
                    <Card.Body>
                    <Row className="justify-content-center align-content-center">
                        <h3>We are so excited that you are interested in joining us!</h3>
                    </Row>
                        <Row className="justify-content-center align-content-center">
                         <br/>
                         <blockquote className="blockquote mb-0">
                            <h6>
                                {' '}
                                Based upon some of the information you gave us, we have collected some information that
                            we think would give you the absolute best experience possible at the Texas A&M Datathon!{' '}
                            </h6>
                         </blockquote>
                        </Row>
                    </Card.Body>
                </Card>
                <br/>
                <br/>
                <div className={utils.myContainer}>
                <Row>
                    <Col>
                        <Card className="justify-content-center">
                            <h1>What we know about you!</h1>
                        </Card>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="blue.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>You are a Computer Science and Engineering Major!</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="blue.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>You have competed in quite a few datathons and data science experience!</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="blue.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>You are interested in Tech and you have a PhD at just 20 years old! That is quite impressive!</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col className="justify-content-center">
                        <Card>
                            <h1>Workshops for you!</h1>
                        </Card>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="matrix.jpg"
                                    alt="slide 1"
                                />
                                <Carousel.Caption>
                                    <h3>Getting a Job in Data Science</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="other.jpg"
                                    alt="slide 1"
                                />
                                <Carousel.Caption>
                                    <h3>Machine Learning: Start Here</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="code2.jpg"
                                    alt="slide 1"
                                />
                                <Carousel.Caption>
                                    <h3>Model Interpretability</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                </div>
                <Container className="justify-content-center">

                </Container>
            </body>
        </div>
    )
}