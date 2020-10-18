import {Form, Row, Col, FormGroup, FormControl, FormLabel} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import React, {useState} from 'react'
import {useRouter} from "next/router";

const preventDefault = f => e => {
    e.preventDefault()
    f(e)
}
export default function LoginForm(){
    const router  = useRouter()
    const [input, setInput] = useState({})

    function  handleChange(evt){
        const value = evt.target.value
        setInput({
            ...input,
            [evt.target.name] : value
        });
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log(input)

        fetch('http://localhost:5000/login_data', {
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(input)
        }).then(router.push('/dashboard'));
    }

    return (
        <div id="login-form" style={{opacity:0, display:"none"}}>
            <Form onSubmit={handleSubmit}>
                <br/>
                <FormGroup>
                    <Row>
                        <Col>
                            <FormLabel htmlFor="formInputUser">Username</FormLabel>
                            <FormControl
                                onChange={handleChange}
                                className="mb-2 mr-sm-2"
                                name="username"
                                placeholder="Jane Doe"/>
                        </Col>
                        <Col>
                            <FormLabel htmlFor="formInputUni">University</FormLabel>
                            <FormControl
                                onChange={handleChange}
                                className="mb-2 mr-sm-2" 
                                name="university"
                                placeholder="My University" />
                        </Col>
                    </Row>
                    <br/>
                    <FormLabel htmlFor="formLocationInput">Location</FormLabel>
                    <Row>
                        <Col>
                            <FormControl 
                                onChange={handleChange}
                                className="mb-2 mr-sm-2" 
                                name="state"
                                placeholder="State"/>
                        </Col>
                        <Col>
                            <FormControl
                                onChange={handleChange}
                                className="mb-2 mr-sm-2"
                                name="city"
                                placeholder="City"/>
                        </Col>
                     </Row>
                    <br/>
                    <FormLabel htmlFor="formInputMajor">Major</FormLabel>
                    <FormControl
                        onChange={handleChange}
                        className="mb-2 mr-sm-2"
                        name="major"
                        placeholder="Location"/>
                    <br/>
                <Button variant="primary" type="submit" >
                    Login
                </Button>
            </FormGroup>
            </Form>
        </div>
    )
}