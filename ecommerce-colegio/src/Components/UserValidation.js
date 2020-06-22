import React, { Component } from 'react'
import {Layout, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton} from 'react-mdl'
import uI from './UI'

class UserValidation extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             ciruc: '',
             
        }
    }

    handleStart = event => {
      uI()
    }

    render() {
        return (
            <div>
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                    <CardText>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                        <form style={{margin: '3.25rem'}}>
                            <label>CI/RUC</label>
                            <input style={{margin: '0.5rem'}}
                                type='text' 
                                value={this.state.ciruc} 
                                onChange={this.handleCirucChange}
                            />
                            <button style={{margin: '.5rem'}} onClick={(e)=>this.corrienteData(e)}>Corriente</button>
                            <button style={{margin: '.5rem'}} onClick={(e)=>this.handleStart(e)}>Diferido</button>
                        </form>
                    </CardText>
                    <CardActions border>
                        <Button colored onClick={()=> uI()} >Get Started </Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
        )
    }
}

export default UserValidation
