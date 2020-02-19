const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))


app.post('/', (req, res)=>{
	res.send(req.body.a);
});

app.listen(7000, () => console.log("App listening on port 7000!"));