import {Inventory} from '../models/inventory.js';

export class InventoryClass {
    static async addInventory(data){
        const newInventory = new Inventory(data);
        await newInventory.save();
        return newInventory;
    }
    static async allInventorys(){
        return Inventory.find().populate('suppliers', 'name');
    }
    static async updateInventory(id, data){
        return Inventory.findByIdAndUpdate(id, data, {new:true});
    }
    static async deleteInventory(id){
        return Inventory.findByIdAndDelete(id);
    }
}