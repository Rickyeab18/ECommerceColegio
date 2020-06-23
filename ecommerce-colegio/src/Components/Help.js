import React from 'react'
import {Container, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';

export default function Help() {

    const styleHelp = {
        fontSize: 12,
        color: '#8B1B40',
        fontwieght: "bold",
        //background: '#023167'
        //  background: 'url(/btn_child.jpg) center / cover'
    }

    return (
        <div>
           <p />
            <Container className="conteinerHelpBackground" >  
                    <Form className="form" >
                        <Col>
                            <FormGroup style={styleHelp} color="#240C0C">
                                <h1>AYUDA</h1>
                                <p />
                                <spam>En este portal usted podra realizar el pago de la maticulacion y colegiatura.</spam>
                                <p />
                                <h1>Contactanos:</h1>
                                <p />
                                <spam>tesoreia@jengling.edu.ec</spam>
                                <p />
                                <spam>secretaria@jengling.edu.ec</spam>
                            </FormGroup>
                        </Col>
                    </Form>
                </Container>
        </div>
    )
}
