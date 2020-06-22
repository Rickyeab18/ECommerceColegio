import React from 'react'
import {DataTable, TableHeader} from 'react-mdl';

export default function RubroData({rubro}) {
    return (
        <div>
            {/* <span>Rubro: {rubro.Tipo}  </span>
            <span>Valor a Pagar: { rubro.ValorCuota } </span> 
            <span>Saldo: { rubro.Saldo }</span>  */}

            <DataTable
                selectable
                shadow={0}
                rowKeyColumn="id"
                rows={[
                    {id: 1001, tipo: rubro.Tipo , valor: rubro.ValorCuota, price: 2.90},
                    /* {id: 1002, material: 'Plywood (Birch)', quantity: 50, price: 1.25},
                    {id: 1003, material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35} */
                ]}
            >
                <TableHeader name="tipo" tooltip=" ">Rubro</TableHeader>
                <TableHeader numeric name="valor" tooltip=" ">Valor</TableHeader>
                {/* <TableHeader numeric name="price" cellFormatter={(price) => `\$${price.toFixed(2)}`} tooltip="Price pet unit">Price</TableHeader> */}
            </DataTable>


        </div>
    )
}
