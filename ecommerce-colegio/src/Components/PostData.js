import React, { Component } from 'react'
import repData from '../data/DataJasonvs1.json'
import RepresentanteData from './RepresentanteData'

class PostData extends Component {
    
    render() {
        const repList =  repData.filter(repDataFilter => repDataFilter.NumeroDocumento === this.props.ci).map(rdata => 
            <RepresentanteData key={rdata.NumeroDocumento} rdata={rdata} />
        );

        return <div>
            {repList}
        </div>
        
    }
}

export default PostData
