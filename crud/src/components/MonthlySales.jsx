import {Bar} from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import {getMothlySales} from '../services/methods/dashboard.js';

const MonthlySales = () => {
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => { 
        const fetchMonthlySales = async () => {
            try {
                const data = await getMothlySales(); // Llama a tu función para obtener datos
                if (data && data.length > 0) {
                    const labels = data.map(item => item._id); // Por ejemplo, "2024-01", "2024-02"
                    const values = data.map(item => item.totalEarnings); // Valores de ganancias
                    setChartData({
                        labels,
                        datasets: [
                            {
                                label: 'Ganancias Mensuales',
                                data: values,
                                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                                borderColor: 'rgba(75, 192, 192, 1)',
                                borderWidth: 1,
                            },
                        ],
                    });
                } else {
                    console.error("Datos insuficientes para mostrar el gráfico.");
                }
            } catch (error) {
                console.error("Error al obtener datos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMonthlySales();
    }, []);
  return (
    <>
        {loading == true ? <h1>Cargando...</h1> : <Bar data={chartData} />}
    </>
  )
}

export default MonthlySales