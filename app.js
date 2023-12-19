const express = require("express");
const app = express();
const path = require("path");
const port = 3030;

app.use(express.static('public'))

app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, "./views/home.html"));
   });
   app.get('/ofertas',(req,res) => {
     res.sendFile(path.join(__dirname,'./views/ofertas.html'))
   })
   app.get('/Ayuda',(req,res) => {
     res.sendFile(path.join(__dirname,'./views/Ayuda.html'))
   })
   app.get('/tiendasOficiales',(req,res) => {
     res.sendFile(path.join(__dirname,'./views/tiendasOficiales.html'))
   })
   app.get('/Vender',(req,res) => {
     res.sendFile(path.join(__dirname,'./views/vender.html'))
   })
   app.get('/Ingresas',(req,res) => {
     res.sendFile(path.join(__dirname,'./views/ingresas.html'))
   })
   app.get('/cuenta',(req,res) => {
     res.sendFile(path.join(__dirname,'./views/cuenta.html'))
   })
   app.get('/compras',(req,res) => {
     res.sendFile(path.join(__dirname,'./views/compras.html'))
   }) 


app.listen(port,() => console.log(`http://localhost:${port}`))