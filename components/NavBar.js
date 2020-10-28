import {Nav, Button} from "react-bootstrap";

export default function MyNav(){
    return (
        <Nav fill variant="pills" style={{paddingTop:"15px"}}>
            <Nav.Item>
                <Button><h3>Fuck</h3></Button>
            </Nav.Item>
            <Nav.Item>
                <Button><h3>You</h3></Button>
            </Nav.Item>
            <Nav.Item>
                <Button><h3>Bitch</h3></Button>
            </Nav.Item>
        </Nav>

    )
}