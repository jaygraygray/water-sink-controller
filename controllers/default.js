
module.exports = {
    turnOn,
    turnOff
}

function turnOn(req, res) {
    res.send('Light has been turned on.')
}

function turnOff(req, res) {
    res.send('Light has been turned off.')
}