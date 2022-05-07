const express= require('express');
const cors = require ('cors');
require("./config/mongoose.config")
const app = express();
const PORT = 8000;


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

require('./routes/jokes.routes')(app);

app.listen(PORT, ()=>{
    console.log (`SERVER IS RUNNING ON ${PORT}`)
});
