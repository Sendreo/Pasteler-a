import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import '../styles/table-cart.css'

export default function Cart({ cart, openCart, toggleCartDialog, updateQuantity, removeFromCart }) {
  return (
    <Dialog open={openCart} onClose={toggleCartDialog} style={{ textAlign: 'center' }} sx={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem' }}>
      <DialogTitle>Carrito de Compras</DialogTitle>
      <DialogContent>
        {cart.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
            <thead>
              <tr>
                <th style={{ padding: '10px', textAlign: 'center', borderBottom: '2px solid #ddd' }}>Nombre</th>
                <th style={{ padding: '10px', textAlign: 'center', borderBottom: '2px solid #ddd' }}>Precio</th>
                <th style={{ padding: '10px', textAlign: 'center', borderBottom: '2px solid #ddd' }}>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product._id}>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>{product.name}</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>${product.price}</td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>
                    <input
                      type="number"
                      min="1"
                      value={product.quantity}
                      onChange={(e) => updateQuantity(product._id, parseInt(e.target.value, 10))}
                      style={{
                        width: '50px',
                        textAlign: 'center',
                        marginRight: '10px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                      }}
                    />
                  </td>
                  <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>
                    <button
                      onClick={() => removeFromCart(product._id)}
                      style={{
                        background: '#f44336', // Rojo para eliminar
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '5px 10px',
                        cursor: 'pointer',
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleCartDialog} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>

  );
}
