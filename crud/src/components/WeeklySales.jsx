import { Bar } from 'react-chartjs-2'
import { useState, useEffect } from 'react'
import { getWeeklySales } from '../services/methods/dashboard'

const WeeklySales = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
      const fetchWeeklySales = async () => {
          const data = await getWeeklySales();
          if (data) {
              const labels = data.map(item => `Semana ${item._id.week} (${item._id.year})`);
              const values = data.map(item => item.totalEarnings);

              setChartData({
                  labels,
                  datasets: [
                      {
                          label: 'Ganancias Semanales',
                          data: values,
                          backgroundColor: 'rgba(54, 162, 235, 0.6)',
                          borderColor: 'rgba(54, 162, 235, 1)',
                          borderWidth: 1,
                      },
                  ],
              });
          }
      };

      fetchWeeklySales();
  }, []);

  return (
    <> 
    {!chartData ? <h1>Cargando...</h1> : <Bar data={chartData}/>}
    </>
  )
}

export default WeeklySales