import React, { Component } from 'react';
import RepresentanteData from './RepresentanteData';
import {DataTable, TableHeader, Grid, Cell, Navigation} from 'react-mdl';
import {Container, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import repData from '../data/DataJasonvs1.json';

class ChildPayment extends Component {
    
    constructor(props) {
        super(props)
        // alert(props.id)
        this.state = {
             type: '',
             monthStatus: true,
             yearStatus: false
        }
        this.setState({
            type: this.props.type
        })
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
            fontSize: 14,
            color: 'white',
            fontwieght: "bold",
            //background: '#023167'
            background: 'url(/btn_child.jpg) center / cover'
        }

        const styleButtonMonthly = {
            fontSize: 16,
            color: 'white',
            textAlign: "center",
            // paddingTop: "100px",
            fontwieght: "bold",
            background: '#FF8C00'
        }
        
        const styleButtonYearly = {
            fontSize: 16,
            color: 'white',
            textAlign: "center",
            // paddingTop: "100px",
            fontwieght: "bold",
            background: '#3CB371'
        }
        
        const styleButtonPlacetoPay = {
            fontSize: 14,
            color: 'white',
            fontwieght: "bold",
            //background: '#023167'
            background: 'url(/btn_placetopay.jpg) center / cover'
        }

        const repList =  repData.filter(repDataFilter => repDataFilter.NumeroDocumento === "1").map(rdata => 
            
            <div key={rdata.NumeroDocumento} >
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
                {rdata.Hijos.filter(childFilter => childFilter.HijoNombre === "Arturo Perez").map((child, index) =>
                <div key={child.HijoNombre} > 
                    <Grid >
                        <Cell col={4}>
                        <Button className='childButton' style={styleButtonChild} raised colored>
                            <span id='alumnName' style= {styleObj}>Nombre Alumno: {child.HijoNombre} { child.HijoApellido } </span>
                            <p/>
                            <span style= {styleObj}>Seccion: { child.Seccion }  </span>
                            <p/>
                            <span style= {styleObj}>Nivel { child.Nivel } </span>
                            {/* {rubroList} */}
                            </Button>
                        </Cell>
                        <Cell col={4} hidden={this.state.monthStatus}>
                                <div>
                                    <Button id={child.HijoNombre} style={styleButtonMonthly} className='smallButton'
                                             onClick={(e) => this.handleMensualInput(e,'value')}
                                           // onClick={()=>{window.location = '/ChildPayment' }}
                                    > 
                                    Mensual</Button>
                                    <p/>
                                </div>
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
                        <Cell col={4} hidden={this.state.yearStatus}>
                                <div>    
                                <Button style={styleButtonYearly} className='smallButton'
                                        onClick={(e) => this.handleYearInput(e,'value')}
                                >Anual</Button>
                                <p/>
                                </div>
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
                        <Cell col={4} hidden={this.state.yearStatus}>
                                <div>    
                                <Button style={styleButtonPlacetoPay} 
                                className='placetopayButton'
                                        onClick={(e) => this.handleYearInput(e,'value')}
                                >Anual</Button>
                                <p/>
                                </div>
                        </Cell>
                    </Grid>
                </div>
                )}
            </div> 
        );

    return (    
            <div>
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

export default ChildPayment
