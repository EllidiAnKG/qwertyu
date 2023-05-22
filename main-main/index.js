const express = require("express")
const bodyParser = require ("body-parser")
const cors = require("cors")

const sqlite3 = require('sqlite3')
const{open} = require('sqlite')
app.use(cors())

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
let db = new sqlite3.Database("./db/finder.db")

open({
    filename: "./db/finder.db",
    driver: sqlite3.Database
}).then((db)=>{
    app.get('/people', async(req, res)=>{
        const people = await db.all("SELECT * FROM People")
        res.json(people)
    })
    app.get('/team', async(req, res)=>{
        const people = await db.all("SELECT * FROM Team")
        res.json(people)
    })
    app.get('/people/lk', async(req, res)=>{
        const people = await db.all("SELECT * FROM LK")
        res.json(people)
    })
    app.get('/game', async(req, res)=>{
        const people = await db.all("SELECT * FROM Game")
        res.json(people)
    })
    app.get('/tournirs', async(req, res)=>{
        const people = await db.all("SELECT * FROM Tournirs")
        res.json(people)
    })
    app.get('/user', async(req, res)=> {
    })

    app.listen(3000,()=>{
        console.log("rabotaet"+3000)
    })

})

db.run("INSERT INTO People(name, nickname, gender) VALUES('name','nickname','gender')",(err) => {
	if(err) {
		return console.log(err.message); 
	}
	console.log('DOBAVILI-Name');
})
db.run("DELETE FROM People WHERE name= 'name'",(err) => {
	if(err) {
		return console.log(err.message); 
	}
	console.log('delete zxc');
})









// expres nodemon sqlite sqlite3 установить