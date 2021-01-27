const request = require('request')


const forecast = (latitude, longitude, callback) => {
    //units = m
    //units = f
    //units = k
    const url = 'http://api.weatherstack.com/current?access_key=98842ec3a2d918e43f70912f7ad8c924&query=' + latitude + ',' + longitude + '&units=m'

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degress out. The humidity is " + body.current.humidity + "%.")
        }
    })
}

module.exports = forecast

