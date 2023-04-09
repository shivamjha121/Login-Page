const mongoose = require('mongoose');
const uri = "mongodb+srv://foodapp:foodapp%40123@cluster0.r8driyc.mongodb.net/foodapp?retryWrites=true&w=majority"

async function db() {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((result) => {
        console.log('MongoDB Connected');

    })
        .catch((err) => {
            console.log('MongoDB Connection Error: ' + err);
        });

} 


module.exports = db;