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
                    'id' : '123', 
                    'name' : 'product1', 
                    'description' : 'product1',
                    'imgUri': 'https://cdn.pixabay.com/photo/2018/11/24/01/35/christmas-motif-3834860_960_720.jpg',
                    'productUri' : 'https://cdn.pixabay.com/photo/2018/11/24/01/35/christmas-motif-3834860_960_720.jpg',
                    'category' : '1'

                },
                {                    
                    'id' : '456', 
                    'name' : 'product2', 
                    'description' : 'product2',
                    'imgUri': 'https://cdn.pixabay.com/photo/2018/10/31/22/42/surprised-3786845_960_720.jpg',
                    'productUri' : 'https://cdn.pixabay.com/photo/2018/10/31/22/42/surprised-3786845_960_720.jpg',
                    'category' : '2'
                },
                {

                    'id' : '789', 
                    'name' : 'product3', 
                    'description' : 'product3',
                    'imgUri': 'https://cdn.pixabay.com/photo/2010/12/13/10/05/background-2277_960_720.jpg',
                    'productUri' : 'https://cdn.pixabay.com/photo/2010/12/13/10/05/background-2277_960_720.jpg',
                    'category' : '1'
                },                
                {
                    'id' : '1234', 
                    'name' : 'product4', 
                    'description' : 'product4',
                    'imgUri': 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'productUri' : 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'category' : '1'
                },
                {
                    'id' : '12345', 
                    'name' : 'product5', 
                    'description' : 'product5',
                    'imgUri': 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'productUri' : 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'category' : '1'
                },
                {
                    'id' : '1234', 
                    'name' : 'product6', 
                    'description' : 'product6',
                    'imgUri': 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'productUri' : 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'category' : '1'
                },
                {
                    'id' : '1234', 
                    'name' : 'product7', 
                    'description' : 'product7',
                    'imgUri': 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'productUri' : 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'category' : '1'
                },
                {
                    'id' : '1234', 
                    'name' : 'product8', 
                    'description' : 'product8',
                    'imgUri': 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'productUri' : 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'category' : '1'
                },
                {
                    'id' : '1234', 
                    'name' : 'product9', 
                    'description' : 'product9',
                    'imgUri': 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'productUri' : 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'category' : '1'
                },
                {
                    'id' : '1234', 
                    'name' : 'product10', 
                    'description' : 'product10',
                    'imgUri': 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'productUri' : 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'category' : '1'
                },
                {
                    'id' : '1234', 
                    'name' : 'product11', 
                    'description' : 'product11',
                    'imgUri': 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'productUri' : 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'category' : '1'
                },
                {
                    'id' : '1234', 
                    'name' : 'product12', 
                    'description' : 'product12',
                    'imgUri': 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'productUri' : 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'category' : '1'
                },
                {
                    'id' : '1234', 
                    'name' : 'product13', 
                    'description' : 'product13',
                    'imgUri': 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'productUri' : 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'category' : '1'
                },
                {
                    'id' : '1234', 
                    'name' : 'product14', 
                    'description' : 'product14',
                    'imgUri': 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'productUri' : 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'category' : '1'
                },
                {
                    'id' : '1234', 
                    'name' : 'product15', 
                    'description' : 'product15',
                    'imgUri': 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'productUri' : 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'category' : '1'
                },
                {
                    'id' : '1234', 
                    'name' : 'product16', 
                    'description' : 'product16',
                    'imgUri': 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'productUri' : 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'category' : '1'
                },
                {
                    'id' : '1234', 
                    'name' : 'product17', 
                    'description' : 'product18',
                    'imgUri': 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'productUri' : 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'category' : '1'
                },
                {
                    'id' : '1234', 
                    'name' : 'product19', 
                    'description' : 'product19',
                    'imgUri': 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'productUri' : 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'category' : '1'
                },
                {
                    'id' : '1234', 
                    'name' : 'product20', 
                    'description' : 'product20',
                    'imgUri': 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'productUri' : 'https://cdn.pixabay.com/photo/2015/12/09/01/02/colorful-abstract-background-1084082_960_720.jpg',
                    'category' : '1'
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
}