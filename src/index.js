const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

let server;
// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port
mongoose.connect(`${config.mongoose.url}`)
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
})

app.listen(config.port, ()=>{
    console.log("server started");
})

