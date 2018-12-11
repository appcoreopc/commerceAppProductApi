import { Db } from 'mongodb';

export interface IPhotoInfo { 
    username : string, 
    url : string, 
    description : string
}

export class ProductDao { 
    
    collectionId : string;
    database : any = null;
    container : any = null;
    clientDb : Db;
    
    constructor(clientDb : Db, collectionId : string )
    { 
        this.clientDb = clientDb;         
        this.collectionId = collectionId;    
    }    

    async insertFake() { 
        
        let self = this;  
        return new Promise(function(resolve, reject) {      
            const collection = self.clientDb.collection(self.collectionId);       
            
            collection.insertMany([
                
                {
                    'username' : 'jeremy', 
                    'url' : 'testimage1.jpg', 
                    'description' : 'desc1'
                },
                {
                    'username' : 'jeremy', 
                    'url' : 'testimage2..jpg', 
                    'description' : 'desc2'
                },
                {
                    'username' : 'jeremy', 
                    'url' : 'testimage2.jpg', 
                    'description' : 'desc3'
                }
                
            ], function(err: any, result: any) {
                
                if (err) 
                reject(true);
                
                console.log("Inserted 3 documents into the collection");
                resolve(result);
            });
        });
    }
    
    async getProductId(productId : string ) {  
        let self = this;      
        const collection = self.clientDb.collection(self.collectionId); 
        console.log(self.collectionId);
        let result = await collection.find({id : productId}).toArray();
        return result;     
    }

    async getProducts() {          
        let self = this;      
        const collection = self.clientDb.collection(self.collectionId);         
        let result = await collection.find({}).toArray();
        console.log(result);
        return result;     
    }

    // Todo : refactor into another class //
    async getProductCategory(category : string ) {           
        let self = this;          
        const collection = self.clientDb.collection(self.collectionId);             
        var result = await collection.find({category : category}).toArray();        
        return result;     
    }

    // Todo : refactor into another class //
    async getAllCategory() {           
        let self = this;          
        const collection = self.clientDb.collection(self.collectionId);             
        var result = await collection.find().toArray();        
        return result;     
    }

    async getPhoto(photoId : string ) {          
        let self = this;          
        const collection = self.clientDb.collection(self.collectionId);             
        var result = await collection.find({id : photoId}).toArray();        
        return result;     
    }
    
    async insertPhotoInfo(photoJsonData : IPhotoInfo) {
        
        let self = this;          
                
        const collection = self.clientDb.collection(self.collectionId);   
            
        let result =  await collection.insertMany([            
        {
                    'username' : photoJsonData.username, 
                    'url' : photoJsonData.url, 
                    'description' : photoJsonData.description
        }
       ]); 

       return result;         
    }
}