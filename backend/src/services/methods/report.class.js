import {Report} from '../models/report.js';

export class ReportClass {
    static async newReport(data){
        const report = new Report(data);
        await report.save();
        return report;
    }
    static async updateReport(id,data){
        return Report.findByIdAndUpdate(id, data, {new:true});
    }
    static async allReport(){
        return Report.find();
    }
    static async updateReport(id,data){
        return Report.findByIdAndUpdate(id, data, {new:true});
    }
    static async deleteReport(id){
        return Report.findByIdAndDelete(id);
    }
}