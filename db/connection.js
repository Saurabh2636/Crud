const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/olympic',{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(()=>{
    console.log('connection establish')
}).catch((err)=>{
    console.log(err)
})