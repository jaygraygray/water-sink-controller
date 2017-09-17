const app = require('express')()
        bodyParser = require('body-parser')
        cors = require('cors')
        port = process.env.port || 6969
        defaultCtrl = require('./controllers/default');

app.use(bodyParser.json());
app.use(cors());

app.get('/api/turnOn', defaultCtrl.turnOn)
app.get('/api/turnOff', defaultCtrl.turnOff)    

app.listen(port, console.log('Connected on', port))