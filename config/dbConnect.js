const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // console.log('connecting to the database')

        //connect to the database
        await mongoose.connect('mongodb+srv://shivanshsharma2704:69shiv@cluster0.nrmlhay.mongodb.net/shiv?retryWrites=true&w=majority&appName=Cluster0');
    }catch(err){
        console.log('Error while connecting database: ', err);
    }
}

module.exports = connectDB;

