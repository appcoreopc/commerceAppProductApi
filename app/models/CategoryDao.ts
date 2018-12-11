import { Db } from 'mongodb';

export class CategoryDao { 
    
    collectionId : string;    
    database : any = null;
    container : any = null;
    clientDb : Db;
    
    constructor(clientDb : Db, collectionId : string )
    { 
        this.clientDb = clientDb;         
        this.collectionId = collectionId;    
    }    

    async getCategory(category : string ) {           
        let self = this;          
        const collection = self.clientDb.collection(self.collectionId);             
        var result = await collection.find({name : category}).toArray();        
        return result;     
    }

    async getAllCategory() {           
        let self = this;          
        const collection = self.clientDb.collection(self.collectionId);             
        var result = await collection.find().toArray();        
        return result;     
    }
}