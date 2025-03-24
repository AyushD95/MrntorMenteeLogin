import express from "express"
import menteeRoute from "./routes/user.js"
import cors from 'cors'
import 'dotenv/config' 
import mongoConnect from "./db.js";
import profileRoute from "./routes/profile.js"


const app= express();
const PORT=1201;


app.use(cors({
    origin: "http://localhost:5176", 
    methods: ["GET", "POST", "PUT", "DELETE"],
  }));

app.use(express.urlencoded({ extended: false}));
app.use(express.json());



app.use("/api/mentee",menteeRoute)
app.use("/profile",profileRoute)


mongoConnect(process.env.MONGO_URL)



app.listen(PORT,()=> console.log(`Server started at ${PORT}`))