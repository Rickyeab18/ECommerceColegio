import React, { Component } from 'react'
import PostDate from './PostData'
import PostData from './PostData'

class LandingPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             ciruc: '',
             text: "",
             repData: []
        }
    }

    addData(){
        this.setState({repData: [...this.state.repData, '' ]})
    }

    searchData(){

    }

    corrienteData(){

    }

    diferidoData(){

    }

    handleCirucChange = event => {
        this.setState({
            ciruc: event.target.value
        })
    }

    handleFieldChange(e,index){
        this.state.repData[index] = e.target.value

        this.setState({repData: this.state.repData})
    }

    render() {
        return (
            <div>
                <div>
                       <h1>Consulta de Obligaciones</h1>

                    <div>
                        <form style={{margin: '3.25rem'}}>
                            <label>CI/RUC</label>
                            <input style={{margin: '0.5rem'}}
                                type='text' 
                                value={this.state.ciruc} 
                                onChange={this.handleCirucChange}
                            />
                        
                        {/*  <TextField 
                                hintText="Ingrese su numero de identificacion"
                                floatingLabelText="CI/RUC"
                                onChange={this.handleCirucChange}
                                value={this.state.ciruc}
                            /> */}
                        
                            <button style={{margin: '.5rem'}} onClick={(e)=>this.corrienteData(e)}>Corriente</button>
                            <button style={{margin: '.5rem'}} onClick={(e)=>this.diferidoData(e)}>Diferido</button>
                            </form>
                    </div>

                    {
                        this.state.repData.map((repField, index)=>{
                            return(
                                <div key={index} style={{margin: '.5rem'}}>

                                    <input onChange={(e)=>this.handleFieldChange(e, index)} value={repField} />
                                </div>
                            )
                        })
                    }
                    <hr />
                    <button style={{margin: '1rem'}} onClick={(e)=>this.addData(e)}>Add Field</button>

                    <hr />
                </div>
                <div>
                    <h1>{this.state.ciruc}</h1>
                    <PostData ci = {this.state.ciruc}/>
                </div> 
            </div>
            
        )
    }
}

export default LandingPage
