import React, { useState } from 'react'
import {  Table, TableContainer, } from "./styles";



import Chart from 'react-apexcharts'
const data = {
  options: {
    chart: {
      id: 'apexchart-exemple',
    },
    xaxis: {
      data: [1991, 1992, 1993, 1994]
    }
  },
  series: [
    {
      name: 'data',
      data: [5,10, 15,20]
    },
    {
      name: 'demanda',
      data: [5,10, 15,20]
    },
    {
      name: 'capacidade',
      data: [5,10, 15,20]
    },
    {
      name: 'atendimento',
      data: [5,10, 15,20]
    },
    {
      name: 'atendimento planejado',
      data: [5,10, 15,20]
    },
    {
      name: 'atendimento realizado',
      data: [5,10, 15,20]
    },
    {
      name: 'desvio',
      data: [5,10, 15,20]
    },
  ],
 
}
const ChartTable = () => {

  return (
    <> 
      <TableContainer>
      <Chart
        options={data.options} 
        series={data.series}
        type="bar" 
        width={500}
        height={320} />
     </TableContainer>
     
       <TableContainer>
         <Table>
          <tbody>
            <tr>
              <td width="50%">Data</td>
              <td width="50%">Demanda</td>
              <td width="50%">Atendimento Planejado</td>
              <td width="50%">Capacidade</td>
            </tr>
            <tr>
              <td>Dados</td>
              <td>Dados 2</td>
              <td>Dados 3</td>
              <td>Dados 3</td>
            </tr>
            <tr>
              <td>Dados</td>
              <td>Dados 2</td>
              <td>Dados 3</td>
              <td>Dados 4</td>
            </tr>
            <tr>
              <td>Dados 3</td>
              <td>Dados</td>
              <td>Dados 2</td>
              <td>Dados 4</td>
            </tr>
            <tr>
              <td>Dados 3</td>
              <td>Dados</td>
              <td>Dados 2</td>
              <td>Dados 4</td>
            </tr>
          </tbody>
        </Table>
     </TableContainer>
    </>

  )
}

export default ChartTable