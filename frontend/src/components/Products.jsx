import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Products({ products }) {
  const { name, description, image } = products;
  
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        alt="Producto"
        sx={{
          width: '100%', // Ocupa todo el ancho del contenedor
          height: '200px', // Mantiene una altura fija
          objectFit: 'contain', // Asegura que la imagen se vea completa
        }}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* Botón Comprar en azul */}
        <Button
          size="small"
          sx={{
            color: 'white',
            backgroundColor: '#1976d2', // Azul
            '&:hover': { backgroundColor: '#115293' }, // Azul oscuro en hover
          }}
        >
          Comprar
        </Button>

        {/* Botón Agregar al carrito en verde */}
        <Button
          size="small"
          sx={{
            color: 'white',
            backgroundColor: '#388e3c', // Verde
            '&:hover': { backgroundColor: '#2e7d32' }, // Verde oscuro en hover
          }}
        >
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
}
