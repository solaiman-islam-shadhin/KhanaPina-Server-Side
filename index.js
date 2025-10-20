import express from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@assignmetn-10.is3vjll.mongodb.net/?retryWrites=true&w=majority&appName=Assignmetn-10`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// server side work start from here

const Foods = client.db("KhanaPina").collection("Foods");
const PurchasedFoods = client.db("KhanaPina").collection("FoodPurchases");

app.get('/foods', async (req, res) => {
    const result = await Foods.find().toArray();
    res.send(result);
})
app.get('/foods/:id',async(req,res)=>{
const id=req.params.id;
const query={_id: new ObjectId(id)};
const result =await Foods.findOne(query);
res.send(result);
})
app.post('/foods', async (req, res) => {
    const food = req.body;
    const result = await Foods.insertOne(food);
    res.send(result);
})


// notify section


await client.connect();
await client.db("admin").command({ ping: 1 });
console.log("Pinged your deployment. You successfully connected to MongoDB!");

app.get('/', (req, res) => {
    res.send('KHAAAAAAAAANNNNNAAA    PIIIIIINAAAAAA!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})