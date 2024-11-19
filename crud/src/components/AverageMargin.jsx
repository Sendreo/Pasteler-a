import { useState, useEffect } from 'react';
import { getMarginProduct } from '../services/methods/dashboard.js';

const AverageMargin = () => {
    const [avgMargin, setAvgMargin] = useState(null);

    useEffect(() => {
        const fetchAvgMargin = async () => {
            const data = await getMarginProduct();
            setAvgMargin(data?.avgMargin || 0);
        };

        fetchAvgMargin();
    }, []);

    if (avgMargin === null) return <h1>Cargando...</h1>;

    return (
        <div>
            <h2>Margen Promedio</h2>
            <p>{avgMargin.toFixed(2)} USD</p>
        </div>
    );
};

export default AverageMargin;
