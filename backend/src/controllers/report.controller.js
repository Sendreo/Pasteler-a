import {ReportClass} from '../services/methods/report.class.js';

const addReport = async(req,res)=>{
    try {
        const data = req.body;
        const newReport = await ReportClass.newReport(data);
        if(!newReport){
            res.status(404).json({message:'Error al añadir el reporte'});
            return;
        }
        res.status(201).json({message:'Reporte guardado con éxito: ' + newReport});
    } catch (error) {
        res.status(500).json({message:'Error interno del servidor: ' + error});
    }
}

const allReports = async(req,res)=>{
    try {
        const reports = await ReportClass.allReport();
        if(!reports){
            res.status(404).json({message:'Error al mostrar reportes'});
            return;
        }
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({messsage:'Error interno del servidor: ' + error});
    }
}

const updateReport = async(req,res)=>{
    try {
        const data = req.body;
        const id = req.params.id;
        const updateReport = await ReportClass.updateReport(id, data);
        if(!updateReport){
            res.status(404).json({message:'Error al actualizar reporte'});
            return;
        }
        res.status(200).json({message:'Reporte actualizado: ' + updateReport});
    } catch (error) {
        res.status(500).json({message:'Error interno del servidor: ' + error});
    }
}

const deleteReport = async(req,res)=>{
    try {
        const id = req.params.id;
        const deleteReport = await ReportClass.deleteReport(id);
        if(!deleteReport){
            res.status(404).json({message:'Error al eliminar el reporte'});
            return;
        }
        res.status(200).json({message:'Eliminado con éxito'});
    } catch (error) {
        res.status(500).json({message:'Error interno del servidor: ' + error});
    }
}

export {
    addReport,
    deleteReport,
    updateReport,
    allReports
}