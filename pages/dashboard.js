import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import {Row, Col, Carousel, Navbar, Card} from 'react-bootstrap'
import React, {useState, useEffect} from 'react'
import utils from '../styles/utils.module.css'

export default function Dashboard({name = "Matthew"}){
    return (
        <div fluid className={utils.mainstuff}>
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
                        <h1>Welcome to your participant portal {name}</h1>
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
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="#"
                                alt="slide 1"
                                />
                                <Carousel.Caption>
                                    <h3>Something here</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="#"
                                    alt="slide 1"
                                />
                                <Carousel.Caption>
                                 <h3>You are a major</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="#"
                                    alt="slide 1"
                                />
                                <Carousel.Caption>
                                <h3>You have no friends</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col>

                    </Col>
                    <Col>

                    </Col>
                </Row>
                </div>
                <Container className="justify-content-center">
                    <Row>
                        <h3>Data Will do all over down here</h3>
                    </Row>
                </Container>
            </body>
        </div>
    )
}