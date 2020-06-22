import React, { Component } from 'react'
import repData from '../data/DataJasonvs1.json'
import RepresentanteData from './RepresentanteData'
import {DataTable, TableHeader, Grid, Cell} from 'react-mdl';
import {Container, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';


class MainPay extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             repdata: []
        }
    }

    render() {

        const styleObj = {
            fontSize: 14,
            color: "white",
            textAlign: "left",
            paddingTop: "100px",
            fontweight: "bold",
        }

        const styleTableHeader = {
            fontSize: 12,
            color: 'white',
            textAlign: "center",
            // paddingTop: "100px",
            fontwieght: "bold",
            background: '#8B1B40'
        }

        const styleButtonChild = {
            fontSize: 12,
            color: 'white',
            textAlign: "center",
            // paddingTop: "100px",
            fontwieght: "bold",
            background: '#023167'
        }

        const styleButtonMonthly = {
            fontSize: 12,
            color: 'white',
            textAlign: "center",
            // paddingTop: "100px",
            fontwieght: "bold",
            background: '#FF8C00'
        }
        
        const styleButtonYearly = {
            fontSize: 12,
            color: 'white',
            textAlign: "center",
            // paddingTop: "100px",
            fontwieght: "bold",
            background: '#3CB371'
        }

        const repList =  repData.filter(repDataFilter => repDataFilter.NumeroDocumento === "1").map(rdata => 
            
            <div>
                {/* 2424E8 */}
                <Container className="bannerBackground" >  
                    <Form className="form" >
                        <Col>
                            <FormGroup>
                            <h1>Representante: {rdata.RepresentanteNombres} {rdata.RepresentanteApellidos} </h1>
                            <h1>CI: {rdata.NumeroDocumento} </h1>
                            </FormGroup>
                        </Col>
                    </Form>
                </Container>
                {rdata.Hijos.map((child, index) =>  
                <div>         
                    <Grid >
                        <Cell col={2}>
                        
                        <Button style={styleButtonChild} raised colored>
                            <span style= {styleObj}>Nombre Alumno: {child.HijoNombre} { child.HijoApellido } </span>
                            <p/>
                            <span style= {styleObj}>Seccion: { child.Seccion }  </span>
                            <p/>
                            <span style= {styleObj}>Nivel { child.Nivel } </span>
                            {/* {rubroList} */}
                            </Button>
                        </Cell>
                        <Cell col={4}>
                            <div>
                                <DataTable
                                    selectable
                                    shadow={2}
                                    rowKeyColumn="id"
                                    rows={[
                                        {id: 1001, tipo: child.Rubros[0].Tipo , valor: child.Rubros[0].ValorCuota},
                                        {id: 1002, tipo: child.Rubros[1].Tipo , valor: child.Rubros[1].ValorCuota},
                                        {id: 1003, tipo: child.Rubros[2].Tipo , valor: child.Rubros[2].ValorCuota},
                                        {id: 1004, tipo: child.Rubros[3].Tipo , valor: child.Rubros[3].ValorCuota}
                                    
                                    ]}
                                >
                                    {/* {if (id='1004') =>{} } */}
                                    <TableHeader style={styleTableHeader} name="tipo" tooltip=" ">Rubro</TableHeader>
                                    <TableHeader style={styleTableHeader} numeric name="valor" tooltip=" ">Valor</TableHeader>
                            
                                </DataTable>
                            </div>
                        </Cell>
                        <Cell col={4}>
                            <div>
                                <DataTable
                                    
                                    selectable
                                    shadow={0}
                                    rowKeyColumn="id"
                                    rows={[
                                        {id: 1001, tipo: child.Rubros[0].Tipo , valor: child.Rubros[0].Saldo},
                                        {id: 1002, tipo: child.Rubros[1].Tipo , valor: child.Rubros[1].Saldo},
                                        {id: 1003, tipo: child.Rubros[2].Tipo , valor: child.Rubros[2].Saldo},
                                        {id: 1004, tipo: child.Rubros[3].Tipo , valor: child.Rubros[3].Saldo}
                                    
                                    ]}
                                >
                                    <TableHeader style={styleTableHeader} name="tipo" tooltip=" ">Rubro</TableHeader>
                                    <TableHeader style={styleTableHeader} numeric name="valor" tooltip=" ">Valor</TableHeader>
                            
                                </DataTable>
                            </div>
                        </Cell>
                        <Cell col={2}>
                            <div>
                                <p/>
                                <Button style={styleButtonMonthly} className='smallButton'> Mensual</Button>
                                <p/>
                                <Button style={styleButtonYearly} className='smallButton'>Anual</Button>
                            </div>
                        </Cell>
                    </Grid>
                </div>
                )}
            </div> 
        );

        return (
            <div>
               <Button colored='#FF6347' >test</Button>
                <Container className="conteinerBackground" >  
                    <Form className="form" >
                        <Col>
                            <FormGroup color="#240C0C">
                            {repList}
                            </FormGroup>
                        </Col>
                    </Form>
                </Container>
                
            </div>
        )
    }
}

export default MainPay
