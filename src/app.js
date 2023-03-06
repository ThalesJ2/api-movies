import express from "express";
import route from "./routes/routes.js";
const app = express();


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(route);


app.get("/",(req,res)=>{
    return res.json({});
})

export default app;
