
require('dotenv').config()
const express = require("express");
// const http = require("http");

const bookRouter = require("./routes/bookRouter")
const userRouter = require("./routes/userRouter")
const experienceRouter = require("./routes/experienceRouter")
const freindsRouter = require("./routes/freindsRouter")
const productsRouter = require("./routes/productsRouter")
const purchase_detailsRouter = require("./routes/purchase_detailsRouter")
const purchaseRouter = require("./routes/purchaseRouter")
const authRoutes=require("./routes/authRouter")

const cookieParser = require('cookie-parser')
const app = express();
const cors = require('cors')
const path = require('path')
app.use('/', express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(cookieParser())
app.use(cors())


app.use("/books", bookRouter)
app.use("/users", userRouter)
app.use("/experiences", experienceRouter)
app.use("/freinds", freindsRouter)
app.use("/products", productsRouter)
app.use("/purchase_details", purchase_detailsRouter)
app.use("/purchases", purchaseRouter)
app.use('/',authRoutes)


app.use((req, res)=>{
    res.send("oooooooooops Error!💥 you are realy stuped😤")
})

app.listen(process.env.PORT, ()=>{
    console.log(`✔ app running on port ${process.env.PORT} ✔ 😂`);
})