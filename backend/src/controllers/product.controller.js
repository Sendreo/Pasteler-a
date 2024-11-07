import {Product} from '../services/methods/products.class.js';


const getProducts = async (req,res)=>{
    try {
        const products = await Product.allProducts()
        if(!products){
            res.status(404).json({message:'Error al obtener productos'});
            return;
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message:'Error interno del servidor: ' + error});
    }
}

const addProduct = async(req,res)=>{
    try {
        const data = req.body;
        const newProduct = await Product.addProduct(data);
        if(!newProduct){
            res.status(404).json({message:'Error al añadir productos'});
            return;
        }
        res.status(201).json({message:'Agregado con éxito: ' + newProduct});
    } catch (error) {
        res.status(500).json({message:'Error interno de servidor: ' + error});
    }
}

const updateProduct = async(req,res)=>{
    try {
        const data = req.body;
        const id = req.params.id;
        const updateProduct = await Product.modifyProduct(id,data);
        if(!updateProduct){
            res.status(404).json({message:'Error al modificar el producto'});
            return;
        }
        res.status(200).json({message:'Modificado con éxito: ' + updateProduct});
    } catch (error) {
        res.status(500).json({message:'Error interno del servidor: ' + error});
    }
}

const deleteProduct = async(req,res)=>{
    try {
        const id = req.params.id;
        const deleteProduct = await Product.deleteProducts(id);
        if(!deleteProduct){
            res.status(404).json({message:'Error al eliminar producto'});
            return;
        }
        res.status(200).json({message:'Eliminado con éxito.'})
    } catch (error) {
        res.status(500).json({message:'Error interno del servidor: ' + error});
    }
}


export {
    getProducts,
    updateProduct,
    addProduct,
    deleteProduct
}