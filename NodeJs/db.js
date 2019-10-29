const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/CrudDB', (err) => {
    if(!err){
        console.log("MongoDB connection succeeded");
    } else {
        console.log('Error in connection: ' + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;