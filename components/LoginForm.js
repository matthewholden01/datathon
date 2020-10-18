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
                                as="select"
                                onChange={handleChange}
                                className="mb-2 mr-sm-2" 
                                name="university"
                                placeholder="My University"
                                defaultValue="Texas A&M">
                                <option>Texas A&M</option>
                                <option>Other</option>
                            </FormControl>
                        </Col>
                    </Row>
                    <br/>
                    <FormLabel htmlFor="formLocationInput">Skills</FormLabel>
                    <Row>
                        <Col>
                            <FormControl
                                onChange={handleChange}
                                className="mb-2 mr-sm-2" 
                                name="skills"
                                placeholder="skills"
                                defaultValue="Excel"
                                as="select">
                                <option>Excel</option>
                                <option>Python</option>
                                <option>Tableau</option>
                                <option>Tensorflow</option>
                                <option>R</option>
                                <option>SQL</option>
                                <option>Keras</option>
                                <option>Pandas</option>
                                <option>NumPy</option>
                                <option>Scikit-learn</option>
                                <option>MATLAB</option>
                                <option>Cloud</option>
                            </FormControl>
                        </Col>
                        <Col>
                            <FormLabel>Classification</FormLabel>
                            <FormControl
                                onChange={handleChange}
                                className="mb-2 mr-sm-2"
                                name="class"
                                placeholder="Classification"
                                defaultValue="Fr"
                                as="select">
                                <option>Fr</option>
                                <option>So</option>
                                <option>Jr</option>
                                <option>Sr</option>
                                <option>Ma</option>
                                <option>PhD</option>
                                <option>O</option>
                            </FormControl>
                        </Col>
                     </Row>
                    <br/>
                    <Row>
                        <Col>
                            <FormLabel htmlFor="formInputMajor">Age</FormLabel>
                            <FormControl
                                onChange={handleChange}
                                className="mb-2 mr-sm-2"
                                name="age"
                                placeholder="Ahe"
                                defaultValue="18-20"
                                as="select">
                                <option>18-20</option>
                                <option>20-22</option>
                                <option>22-25</option>
                                <option>25-30</option>
                                <option>30-50</option>
                            </FormControl>
                        </Col>
                        <Col>
                            <FormLabel>Years of Experience</FormLabel>
                            <FormControl
                                 onChange={handleChange}
                                 className="mb-2 mr-sm-2"
                                 name="experience"
                                 placeholder="experience"
                                 defaultValue="1"
                                 as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </FormControl>
                        </Col>
                    </Row>
                    <br/>
                    <FormLabel htmlFor="formInputMajor">Major</FormLabel>
                    <FormControl
                        onChange={handleChange}
                        className="mb-2 mr-sm-2"
                        name="major"
                        defaultValue="Computer Science & Engineering"
                        placeholder="Location"
                        as="select">
                        <option>Computer Science & Engineering</option>
                        <option>Statistics</option>
                        <option>Data Science and Analytics</option>
                        <option>Management Information Systems</option>
                        <option>Industrial and/or Systems Engineering</option>
                        <option>Other</option>
                    </FormControl>
                <Button variant="primary" type="submit" >
                    Login
                </Button>
            </FormGroup>
            </Form>
        </div>
    )
}