import {getTopSuppliers} from '../services/methods/dashboard.js';
import {useState, useEffect} from 'react';
import { Pie } from 'react-chartjs-2';

const TopSuppliers = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchTopSuppliers = async () => {
            const data = await getTopSuppliers();
            if (data) {
                const labels = data.map(item => item.name);
                const values = data.map(item => item.productsCount);

                setChartData({
                    labels,
                    datasets: [
                        {
                            label: 'Productos por Proveedor',
                            data: values,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                            ],
                            borderWidth: 1,
                        },
                    ],
                });
            }
        };

        fetchTopSuppliers();
    }, []);

  return (
    <>
    {!chartData ? <h1>Cargando...</h1> : <Pie data={chartData}/>}
    </>
  )
}

export default TopSuppliers