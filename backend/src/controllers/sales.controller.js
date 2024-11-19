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

const monthlySales = async (req,res)=>{
    try{
        const monthlyEarnings = await SalesClass.monthlySales();
        if(!monthlyEarnings){
            res.status(404).json({message:'Datos insuficientes para el Dashboard'})
        }
        res.status(200).json(monthlyEarnings)
    }
    catch(error){
        res.status(500).json({message: "Error interno del servidor: " + error})
    }
}

const weeklySales = async(req,res)=>{
    try {
        const weeklyEarnings = await SalesClass.weeklySales();
        if(!weeklyEarnings){
            res.status(404).json({message:'No hay datos suficientes para construir el Dashboard'})
            return;
        }
        res.status(200).json(weeklyEarnings)
    } catch (error) {
        res.status(500).json({message:'Errror interno del servidor'})
    }
}

const mostSalesProducts = async(req,res)=>{
    try {
        const topProducts = await SalesClass.mostSalesProducts();
        if(!topProducts){
            res.status(404).json({message:'Sin datos de productos vendidos'});
            return;
        }
        res.status(200).json(topProducts);
    } catch (error) {
        res.status(500).json({message:'Error interno de servidor: ' + error})
    }
}

const salesTrends = async (req, res) => {
    try {
        const trends = await SalesClass.salesTrends();
        if (trends.length === 0) {
            res.status(404).json({ message: 'No hay datos para mostrar tendencias.' });
            return;
        }
        res.status(200).json(trends);
    } catch (error) {
        res.status(500).json({ message: 'Error interno de servidor: ' + error });
    }
};

const paymentMethods = async (req, res) => {
    try {
        const methods = await SalesClass.paymentMethods();
        res.status(200).json(methods);
    } catch (error) {
        res.status(500).json({ message: 'Error interno de servidor: ' + error });
    }
};


export {
    getSales,
    addSales, 
    updateSale,
    deleteSale,
    monthlySales,
    weeklySales,
    mostSalesProducts,
    salesTrends,
    paymentMethods
}