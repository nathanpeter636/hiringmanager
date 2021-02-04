const express = require('express')

const mySQL = require('mysql')
const app = express();


const db = mysql.createConnection({

user: 'root',
host: 'localhost',
password: '',
database: 'employeeSystem'

})

app.post('/create', (req, res) => {
    const name = req.body.name
    const age = req.body.age
    const position = req.body.position
    const wage = req.body.wage

    db.query('INSERT INTO employees (name, age, position, country, wage) VALUES (?,?,?,?,?)', 
    [name, age, position, country, wage], (err, res) => {
        if (error) {
            console.log(err)
        }

        else {
            res.send("Values Inserted")
        }
    }
    );
})


app.listen(3001, ()=> {
    console.log("listening on port 3001")
})