const express=require('express');
const connectDB=require('./db/db');
const Prd=require('./models/product');
//const ExpEntr=require('./models/expence');

const app=express();
app.use(express.json());

connectDB();

app.get('/products', async (req, res)=>{
    try{
        const products = await Prd.find();
        res.json(products);
    }
    catch(err){
        res.status(500).send(err.message);
    }
});

app.get('/products/:id', async (req, res)=>{
    try{
        const product = await Prd.findById(req.params.id);
        if(!product) throw new Error('Product Not Found');
        res.json(product);
    }
    catch(err){
        res.status(500).send(err.message);
    }
});

app.post('/products', async(req, res)=>{
    try{
        const {name,price}=req.body;
        const product = new Prd({name,price});
        await product.save();
        res.json({success:true});
    }
    catch(err){
        res.status(500).send(err.message);
    }
});

app.put('/products/:id', async(req, res)=>{
    try{
        const product = await Prd.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!product) throw new Error('Product Not Found');
        res.json({success:true});
    }
    catch(err){
        res.status(500).send(err.message);
    }
});

app.delete('/products/:id', async(req, res)=>{
    try{
        const product = await Prd.findByIdAndDelete(req.params.id);
        if(!product) throw new Error('Product Not Found');
        res.json({success:true});
    }
    catch(err){
        res.status(500).send(err.message);
    }
});


const port =5000;

app.listen(port,()=>{
    console.log("API Server Started on port 5000");
});