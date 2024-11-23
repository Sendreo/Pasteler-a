import { useState, useEffect } from 'react';
import Products from '../components/Products';
import { getProducts } from '../api/methods/products.api.js';
import SearchAppBar from '../components/SearchAppBar';
import Box from '@mui/material/Box';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // Estado para el carrito


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

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item._id === product._id);

    if (existingProduct) {
      // Si el producto ya está en el carrito, incrementar la cantidad
      const updatedCart = cart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // Si el producto no está en el carrito, agregarlo con cantidad 1
      setCart([...cart, { ...product, quantity: 1 }]);
    } // Añade el producto al carrito
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product._id === productId ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  // Elimina un producto del carrito
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product._id !== productId));
  };

  const filteredData = products.filter((d) =>
    d.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Navbar MUI */}
      <SearchAppBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} cart={cart} updateQuantity={updateQuantity}
        removeFromCart={removeFromCart} />

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
          <Products key={d._id} products={d} addToCart={addToCart} />
        ))}
      </Box>
    </>
  );
};

export default Home;
