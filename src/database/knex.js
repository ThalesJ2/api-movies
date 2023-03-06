import knex from "knex";
import dotenv from "dotenv";
dotenv.config();

const connection = knex({
    client:"mysql2",
    connection:{
        host : "localhost",
        port : 3306,
        user : "root",
        password : "993366pe",
        database : "cinema"
    }

});

connection.raw("select 1").then(()=>{})
.catch((err)=>{console.log(err);});

export default connection;