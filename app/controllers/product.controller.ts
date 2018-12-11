
import { Router, Request, Response } from 'express';
import { ProductDao } from '../models/ProductDao'
import { Config } from '../config';
import { MongoClient, Db } from 'mongodb';

var multer = require('multer')
var upload = multer({
  dest: 'uploads/'
});

// Connection URL
const client = new MongoClient(Config.url);
// Database Name
const dbName = Config.databaseId;   
let db : Db;
let photoProvider : ProductDao;

const router: Router = Router();
var multerUploader = upload.single('image');

client.connect(function(err : any) {
  console.log("Connected successfully to db server");
  db = client.db(dbName);
  photoProvider = new ProductDao(db, Config.photoCollection);  
  
});

router.post('/',  async (req: Request, res: Response) => {
  
  let response = await multerUploader(req, res, function(err : any) {
    
    if (!err) {
      let objectJson : any = res.json();           
      console.log(req.file);  
      let fname = req.file.filename; 
      let path = req.file.destination;
      
      //console.log(req.body);
      
      if (req.body.username && req.body.description)
      {      
        const photoInfo = { 
          username : req.body.username,
          description : req.body.description, 
          //url : objectJson.req.file.url
        }       
      }      
    }
    else { 
      console.log(err);
    }
  });
  
  res.send("product uploaded.");
})

router.get('/:id', async (req: Request, res: Response) => {
  let { id } = req.params;
  console.log('product id ' + id);
  let result = await photoProvider.getProductId(id);
  res.send(result);
});


export const ProductController: Router = router;