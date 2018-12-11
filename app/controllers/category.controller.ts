
import { Router, Request, Response } from 'express';
import { CategoryDao } from '../models/CategoryDao'
import { Config } from '../config';
import { MongoClient, Db } from 'mongodb';

// Connection URL
const client = new MongoClient(Config.url);
// Database Name
const dbName = Config.databaseId;   
let db : Db;
let categoryProvider : CategoryDao;

const router: Router = Router();

client.connect(function(err : any) {
    console.log("Category collection is online.");
  db = client.db(dbName);
  categoryProvider = new CategoryDao(db, Config.categoryCollection);    
});

router.post('/',  async (req: Request, res: Response) => {
     res.send("category created!.");
})

router.get('/:id', async (req: Request, res: Response) => {
  let { id } = req.params;
  console.log('product id ' + id);
  let result = await categoryProvider.getCategory(id);
  res.send(result);
});

router.get('/', async (req: Request, res: Response) => {
  let { id } = req.params;
  console.log('product id ' + id);
  let result = await categoryProvider.getAllCategory();
  res.send(result);
});

export const CategoryController: Router = router;