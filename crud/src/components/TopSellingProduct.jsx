import { useState, useEffect } from 'react';
import { getTopProducts } from '../services/methods/dashboard.js';

const TopSellingProduct = () => {
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        const fetchTopProduct = async () => {
            const data = await getTopProducts();
            setProductData(data[0]); // Supone que es un solo producto
        };

        fetchTopProduct();
    }, []);

    if (!productData) return <h1>Cargando...</h1>;

    return (
        <div>
            <h2>Producto Más Vendido</h2>
            <p>Total Vendido: {productData.totalSold}</p>
            <p>Ganancias Totales: {productData.totalEarnings} USD</p>
        </div>
    );
};

export default TopSellingProduct;
