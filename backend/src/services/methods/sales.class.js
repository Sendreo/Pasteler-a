import {Sales} from '../models/Sales.js';
import {Products} from '../models/products.js'

export class SalesClass {
    static async addSale(data){
        const newSale = new Sales(data);
        await newSale.save();
        return newSale;
    }
    static async AllSales(){
        return Sales.find();
    }
    static async updateSales(id,data){
        return Sales.findByIdAndUpdate(id, data, {new:true});
    }
    static async deleteSales(id){
        return Sales.findByIdAndDelete(id);
    }
    static async monthlySales(){
        return Sales.aggregate([
            {
                $group: {
                    _id: { $dateToString: { format: '%Y-%m', date: '$dateTime' } },
                    totalEarnings: { $sum: '$total' },
                    salesCount: { $sum: 1 }
                }
            },
            { $sort: { _id: 1 } } 
        ]);
    }
    static async weeklySales(){
        return Sales.aggregate([
            {
                $group: {
                    _id: {
                        week: { $isoWeek: '$dateTime' },
                        year: { $year: '$dateTime' }
                    },
                    totalEarnings: { $sum: '$total' },
                    salesCount: { $sum: 1 }
                }
            },
            { $sort: { '_id.year': 1, '_id.week': 1 } } 
        ]);
    }
    static async mostSalesProducts(){
        return Sales.aggregate([
            {
                $group: {
                    _id: '$product', 
                    totalSold: { $sum: '$quantity' },  
                    totalEarnings: { $sum: '$total' } 
                }
            },
            { $sort: { totalSold: -1 } },  
            { $limit: 10 }  
        ]).then(async (topProducts) => {
            return await Promise.all(
                topProducts.map(async (product) => {
                    if (product._id === null) {
                        return { ...product, name: "Producto no disponible" };  
                    }
                    try {
                        const productInfo = await Products.findById(product._id).lean();
                        if (!productInfo) {
                            return { ...product, name: "Producto no encontrado" };
                        }
                        return { 
                            ...product, 
                            name: productInfo.name, 
                            ...productInfo  
                        };
                    } catch (error) {
                        console.error("Error al obtener la información del producto: ", error);
                        return { ...product, name: "Error al obtener nombre" };  
                    }
                })
            );
        });
    }
    
    
    static async salesTrends(){
        return Sales.aggregate([
            {
                $group: {
                    _id: { $dateToString: { format: '%Y-%m-%d', date: '$dateTime' } },
                    dailyEarnings: { $sum: '$total' },
                    dailySales: { $sum: 1 }
                }
            },
            { $sort: { _id: 1 } } 
        ]);
    }
    static async paymentMethods(){
        return Sales.aggregate([
            {
                $group: {
                    _id: '$paymentMethod',
                    total: { $sum: 1 }
                }
            }
        ]);
    }
}