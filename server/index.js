import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './Routes/routes.js';
import Connection from './Database/db.js';
// import DefaultData from './DefaultData.js';

const app = express();

dotenv.config();

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', routes);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const PORT = process.env.PORT;

Connection(USERNAME, PASSWORD);
 
app.listen(PORT, async () => {
    try{
       await console.log("server running");
    }
    catch(err){
        console.log("Error on Server", err)
    }
});

// DefaultData();