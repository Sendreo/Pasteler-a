import React, { useState } from 'react';
import Products from '../components/Products';
import data from '../services/data.json';
import SearchAppBar from '../components/SearchAppBar';
import Box from '@mui/material/Box';
import '../styles/style-product.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter((d) =>
    d.nombre.toLowerCase().includes(searchTerm.toLowerCase())
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
          gap: 2, 
          justifyContent: 'center', 
          padding: '20px' 
        }}
      >
        {filteredData.map((d) => (
          <Products key={d.id} products={d} />
        ))}
      </Box>
    </>
  );
};

export default Home;
