import { Table, TableContainer } from './styles'
import Chart from 'react-apexcharts'

const data = {
  options: {
    chart: {
      id: 'apexchart-exemple',
    },
    xaxis: {
      categories: ['01/02/2022', '01/03/2022', '01/04/2022', '01/05/2022'],
    },
  },
  series: [
    {
      name: 'data',
      data: [5, 20, 10, 15],
    },
  ],
}
const ChartTable = () => {
  return (
    <>
      <TableContainer>
        <Table>
          <tbody>
            <tr>
              <td width="50%">Data</td>
              <td width="50%">Demanda</td>
              <td width="50%">Capacidade</td>
              <td width="50%">Atendimento Planejado</td>
              <td width="50%">Atendimento Realizado</td>
              <td width="50%">Desvio</td>
            </tr>
            <tr>
              <td>01/02/2022</td>
              <td>50</td>
              <td>40</td>
              <td>35</td>
              <td>35</td>
              <td>5</td>
            </tr>
            <tr>
              <td>01/03/2022</td>
              <td>60</td>
              <td>40</td>
              <td>40</td>
              <td>20</td>
              <td>20</td>
            </tr>
            <tr>
              <td>01/04/2022</td>
              <td>80</td>
              <td>70</td>
              <td>50</td>
              <td>60</td>
              <td>10</td>
            </tr>
            <tr>
              <td>01/05/2022</td>
              <td>30</td>
              <td>50</td>
              <td>30</td>
              <td>35</td>
              <td>15</td>
            </tr>
          </tbody>
        </Table>
      </TableContainer>
      <TableContainer>
        <Chart
          options={data.options}
          series={data.series}
          type="bar"
          width={500}
          height={320}
        />
      </TableContainer>
    </>
  )
}

export default ChartTable
