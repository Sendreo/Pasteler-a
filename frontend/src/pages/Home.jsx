import { useState, useEffect } from 'react';
import Products from '../components/Products';
import { getProducts } from '../api/methods/products.api.js';
import SearchAppBar from '../components/SearchAppBar';
import Box from '@mui/material/Box';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProducts();
  }, []);

  const filteredData = products.filter((d) =>
    d.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Navbar MUI */}
      <SearchAppBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Sección de productos */}
      <Box 
        sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 3.5, 
          justifyContent: 'center', 
          padding: '20px' 
        }}
      >
        {filteredData.map((d) => (
          <Products key={d._id} products={d} />
        ))}
      </Box>
    </>
  );
};

export default Home;
