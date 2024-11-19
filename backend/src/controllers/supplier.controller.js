import {SuppliersClass} from '../services/methods/suppliers.class.js';


const getSuppliers = async(req,res)=>{
    try {
        const suppliers = await SuppliersClass.allSuppliers();
        if(!suppliers){
            res.status(404).json({message:'Error al obtener proveedores'});
            return;
        }
        res.status(200).json(suppliers);
    } catch (error) {
        res.status(500).json({message:'Error interno del servidor: ' + error});
    }
}

const addSuppliers = async(req,res)=>{
    try {
        const data = req.body;
        const newSupplier = await SuppliersClass.newSupplier(data);
        if(!newSupplier){
            res.status(404).json({message:'Error al añadir proveedores'});
            return;
        }
        res.status(201).json({message:'Proveedor añadido con éxito: ' + newSupplier});
    } catch (error) {
        res.status(500).json({message:'Error interno del servidor: ' + error});
    }
}

const updateSuppliers = async(req,res)=>{
    try {
        const data = req.body;
        const id = req.params.id;
        const updateSupplier = await SuppliersClass.updateSuppliers(id,data);
        if(!updateSupplier){
            res.status(404).json({message:'Error al actualizar proveedores'});
            return;
        }
        res.status(200).json({message:'Actuazliado con éxito: ' + updateSupplier});
    } catch (error) {
        res.status(500).json({message:'Error interno del servidor: ' + error});
    }
}

const deleteSuppliers = async(req,res)=>{
    try {
        const id = req.params.id;
        const deleteSupplier = await SuppliersClass.deleteSuppliers(id);
        if(!deleteSupplier){
            res.status(404).json({message:'Error al eliminar proveedores'});
            return;
        }
        res.status(200).json({message:'Proveedor eliminado con éxito'});
    } catch (error) {
        res.status(500).json({message:'Error interno del servidor: ' + error});
    }
}

const topSuppliers = async (req, res) => {
    try {
        const suppliers = await SuppliersClass.topSuppliers()
        if (suppliers.length === 0) {
            res.status(404).json({ message: 'No hay proveedores registrados.' });
            return;
        }
        res.status(200).json(suppliers);
    } catch (error) {
        res.status(500).json({ message: 'Error interno de servidor: ' + error });
    }
};


export {
    getSuppliers,
    addSuppliers,
    updateSuppliers,
    deleteSuppliers,
    topSuppliers
}