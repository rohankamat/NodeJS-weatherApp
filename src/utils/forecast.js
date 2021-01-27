const request = require('request')


const forecast = (latitude, longitude, callback) => {
    //units = m
    //units = f
    //units = k
    const url = 'http://api.weatherstack.com/current?access_key=98842ec3a2d918e43f70912f7ad8c924&query=' + latitude + ',' + longitude + '&units=m'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
        }
    })
}

module.exports = forecast