import React from 'react';
import { Line } from 'react-chartjs-2';
const LineChart = () => {
    const ref = React.useRef("chart")
    const data = {
        labels: ['En', 'Feb', 'Mar', 'Abr', 'May', 'Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
        datasets: [
          {
            label: '# de ventas',
            data: [12, 19, 3, 30, 0, 0,0,0,0,0,0,0],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      }
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }
    return (
        <div>
        <h2>Ventas 2020</h2>
        <Line ref={ref} data={data} options={options}/>
      </div>
    );
}

export default LineChart;
