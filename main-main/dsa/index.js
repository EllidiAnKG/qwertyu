const express = require('express')
const app = express()
const cors = require("cors")

const port = "3000"

const posts = require("./posts.json")
const jsonParser = express.json()

app.use(cors())
 
app.get("/", (req, res) => {
   res.send("This my API")
})

app.get("/api/posts/fake", jsonParser, (req, res) => {
    res.json({
        data: req.query
    })
})


app.get("/api/posts", jsonParser, (req, res) => {
    res.json({
        code: 200,
        data: posts
    })
})

app.post("/api/posts", jsonParser, (req, res) => {
    console.log(req.body)
    res.json(req.body)
}) 

app.listen(port, () => {
    console.log("Server started on 3000 port")
})
