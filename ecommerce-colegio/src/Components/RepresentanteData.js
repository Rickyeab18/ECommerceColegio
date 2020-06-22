import React from 'react'
import ChildData from './ChildData'

export default function RepresentanteData({rdata}) {

   const childlist = rdata.Hijos.map((child, index) => <ChildData key={child.HijoNombre} child={child}/>
      )

    return (
        <div>
            <span> CI: {rdata.NumeroDocumento} </span>
            <span>Nombre: {rdata.RepresentanteNombres}</span>
            {childlist}
        </div>
    )
}
