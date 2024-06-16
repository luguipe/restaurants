import { MongoDataSource } from "apollo-datasource-mongodb";

import { MongoClient, ObjectId } from 'mongodb';


type ShoppingCartDocument = {                                                                                                                                             
    _id: ObjectId;                                                                                                                                                   
    userId: string;                                                                                                                                                
    items: Array<{                                                                                                                                                 
        _id: ObjectId;                                                                                                                                        
        quantity: number; 
        description: string; 
        price: number;                                                                                                                                        
    }>;               
    total: number;
    comment: string;   
    status: string;                                                                                                                                          
}

export class ShoppingCart extends MongoDataSource<ShoppingCartDocument> {                                                                                                                                     
    async getByUserId(userId: string) {                                                                                                                                        
        return this.collection.find({ userId });                                                                                                                                      
    }
    
    async getById(id: string) {                                                                                                                                                
        return this.collection.findOne({ _id: new ObjectId(id) });                                                                                                                                    
    }
                                                                                                                                                                                        
    async create(input: Omit<ShoppingCartDocument, '_id'>) {                                                                                                                                                    
        try {                                                                                                                                                                              
            const {insertedId} = await this.collection.insertOne(input as ShoppingCartDocument);
            return {...input, _id: insertedId};                                                                                                                                
        } catch (error) {                                                                                                                                                                  
            throw new Error("Failed to create shopping cart");                                                                                                                             
        }                                                                                                                                                                                  
    }   
    
    async update(_id: string, $set: Partial<ShoppingCartDocument>) {                                                                                                                                          
        // try {                                                                                                                                                                              
            return await this.collection.updateOne({ _id: new ObjectId(_id) }, { $set });                                                                                                          
        // } catch (error) {                                                                                                                                                                  
            // throw new Error("Failed to update shopping cart");                                                                                                                             
        // }                                                                                                                                                                                  
    }

    static createCollection(client: MongoClient) {
        return new ShoppingCart({modelOrCollection: client.db().collection("shoppingCart")});
    }
}