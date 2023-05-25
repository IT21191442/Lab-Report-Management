//assign/import packages or dependencies these const variables
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

require("dotenv").config();



const PORT = process.env.PORT || 8072; //assign availbale port or 8072 for connect server

app.use(cors());
app.use(bodyParser.json());


const URL = process.env.MONGODB_URL;//assighn database url(.env file url)
//databe connection
mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
   
    
});

const connection  = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection success!");
})

const reportRouter = require("./routes/reports.js");
const bloodreportRouter = require("./routes/bloodreports.js");
const labitemsinventory = require("./routes/labitemsinventory");
app.use("/images", express.static("images"));


http://localhost:8072/report  
//module.exports = studentRouter;
app.use("/report", reportRouter);//load the reports file inside the route folder
app.use("/bloodreport", bloodreportRouter);
app.use("/labitemsinventory", labitemsinventory);

app.listen(PORT, () =>{
    console.log(`Server is up and running on port Number: ${PORT}`)
})