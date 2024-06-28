import { MongoDataSource } from "apollo-datasource-mongodb";

import { ObjectId, MongoClient } from "mongodb";

type MenuItemDocument = {                                                                                                                                             
    _id: ObjectId;                                                                                                                                                   
    restaurantId: string;  
    name: string; 
    description: string; 
    price: number;                                                                                                                                                  
    active: boolean;                                                                                                                                         
}

export class MenuItem extends MongoDataSource<MenuItemDocument> {  
    async getByRestaurantId(restaurantId: string) {                                                                                                                                        
        return this.collection.find({ restaurantId });                                                                                                                                      
    }
    
    async getById(id: string) {                                                                                                                                                
        // return this.collection.findOne({ _id: id });  
        return {
            _id: "666ea71ee28437c493a99f81",
            restaurantId: "666ea71ee28437c493a99f83",
            name: "Farofa",
            description: "Que delicia de farofa",
            price: 10.00,
            active: true
        }                                                                                                                                  
    }
                                                                                                                                                                                         
    async create(input: MenuItemDocument) {                                                                                                                                                    
        try {                                                                                                                                                                              
            const {insertedId} = await this.collection.insertOne(input);
            return {...input, _id: insertedId};                                                                                                                                
        } catch (error) {                                                                                                                                                                  
            throw new Error("Failed to create menu item");                                                                                                                             
        }                                                                                                                                                                                  
    }   
    
    async update(_id: ObjectId, input: Partial<MenuItemDocument>) {                                                                                                                                          
        try {                                                                                                                                                                              
            return await this.collection.updateOne({ _id }, { $set: input });                                                                                                          
        } catch (error) {                                                                                                                                                                  
            throw new Error("Failed to update menu item");                                                                                                                             
        }                                                                                                                                                                                  
    }

    static createCollection(client: MongoClient) {
        return new MenuItem({modelOrCollection: client.db().collection("menuItem")});
    }
}