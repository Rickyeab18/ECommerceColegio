import React from 'react'
import RubroData from './RubroData'
import {DataTable, TableHeader} from 'react-mdl';

export default function ChildData({child}) {

    /* const rubroList = child.Rubros.map((rubro, index) => <RubroData key={rubro.Tipo} rubro={rubro} /> 
    ) */

    return (
        <div>
            <span>Nombre Alumno: {child.HijoNombre} " " { child.HijoApellido } </span>
            <span>Seccion: { child.Seccion } </span>
            <span>Nivel: { child.Nivel } </span>
            {/* {rubroList} */}
            <div>
            <DataTable
                selectable
                shadow={0}
                rowKeyColumn="id"
                rows={[
                    {id: 1001, tipo: child.Rubros[0].Tipo , valor: child.Rubros[0].ValorCuota, price: 2.90},
                    {id: 1002, tipo: child.Rubros[1].Tipo , valor: child.Rubros[1].ValorCuota, price: 2.90},
                    {id: 1003, tipo: child.Rubros[2].Tipo , valor: child.Rubros[2].ValorCuota, price: 2.90}
                  
                ]}
            >
                <TableHeader name="tipo" tooltip=" ">Rubro</TableHeader>
                <TableHeader numeric name="valor" tooltip=" ">Valor</TableHeader>
        
            </DataTable>

            </div>
        </div>
    )
}
