// code to connect the express app to mongodb
const mongoose= require('mongoose');

const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://root:example@db:27017/', 
        {
            useNewUrlParser:true, 
            useUnifiedTopology:true
        });
        console.log("MongoDB Connected");
    }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
