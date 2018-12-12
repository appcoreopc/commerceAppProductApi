import express, { Request, Response }  from 'express';
import { ProductController } from './controllers/product.controller';
import { CategoryController } from './controllers/category.controller';
import * as bodyParser from "body-parser";
import { ApolloServer, gql } from 'apollo-server-express';
import { ProductDao } from './models/ProductDao';
import { DataFactory }  from './models/DataFactory';
import { Config } from './config';
import { MongoClient, Db } from 'mongodb';
import { CategoryDao } from './models/CategoryDao';

const app: express.Application = express();
const port: number = 3000;
const typeDefs = gql`

# This "Book" type can be used in other type declarations.
type Book {
  title: String
  author: String
}

type Category {
  id : String
  name : String, 
  description : String
}

type Product {
  id : String, 
  title : String,
  name : String, 
  sku : String, 
  description : String, 
  price : Float,
  currency : Int,
  imageUrl : String 
  category : String, 
  tag : String  
}

type RelatedProduct { 
  id : String, 
  uri : String, 
  imageUri : String,
  description : String
  rating : Float
}

type Query {
  products : [Product], 
  books : [Book],
  categories : [Category],
  relatedProducts : [RelatedProduct]
}
`;

// Connection URL
const client = new MongoClient(Config.url);
// Database Name
const dbName = Config.databaseId;   
let db : Db;
let productProvider : ProductDao;
let categoryProvider : CategoryDao;

client.connect(function(err : any) {
  console.log("Connected successfully to db server-MAIN");
  db = client.db(dbName);
  productProvider = new ProductDao(db, Config.photoCollection);  
  categoryProvider = new CategoryDao(db, Config.categoryCollection);
});

const resolvers = {    Query: {  
  products : async () => await productProvider.getProducts(),    
  books : async () => await DataFactory.getProductCollection().then(a => a.getProducts()),
  categories : async () => await categoryProvider.getAllCategory(), 
 },
};  

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     
  extended: true
})); 

app.get('/', async (req: Request, res: Response) => { 
  let current = new Date();
  res.send("hello...." + current.getTime());


  productProvider.insertFake();






});

app.use('/product', ProductController);

app.use('/category', CategoryController);

app.listen(process.env.PORT||3000, () => {
  console.log(`Listening at http://localhost:${port}/${server.graphqlPath}`);
});
