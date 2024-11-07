import {SalesClass} from '../services/methods/sales.class.js';


const getSales = async (req,res)=>{
    try {
        const sales = await SalesClass.AllSales()
        if(!sales){
            res.status(404).json({message:'Error al obtener las ventas'});
            return;
        }
        res.status(200).json(sales);
    } catch (error) {
        res.status(500).json({message:'Error interno del servidor: ' + error});
    }
}

const addSales = async(req,res)=>{
    try {
        const data = req.body;
        const newSale = await SalesClass.addSale(data);
        if(!newSale){
            res.status(404).json({message:'Error al obtener las ventas'});
            return;
        }
        res.status(200).json(newSale);
    } catch (error) {
        res.status(500).json({message:'Error interno del servidor: ' + error});
    }
}

const updateSale = async(req,res)=>{
    try {
        const id = req.params.id;
        const data = req.body;
        const updateSale = await SalesClass.updateSales(id,data);
        if (!updateSale) {
            res.status(404).json({message: 'Venta no encontrada para actualizar'});
            return;
        }
        res.status(200).json({message: 'Venta actualizada con éxito', data: updateSale});
        
    } catch (error) {
        res.status(500).json({message:'Error interno del servidor: ' + error});
    }
}

const deleteSale = async(req,res)=>{
    try {
        const id = req.params.id;
        const deleteSale = await SalesClass.deleteSales(id);
        if(!deleteSale){
            res.status(404).json({message:'Error al eliminar venta'});
            return;
        }
        res.status(200).json({message:'Eliminado con éxito.'});
    } catch (error) {
        res.status(500).json({message:'Error interno del servidor: ' + error});
    }
}

export {
    getSales,
    addSales,
    updateSale,
    deleteSale
}