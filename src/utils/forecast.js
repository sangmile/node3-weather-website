const request = require('postman-request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3fbeb352c0b6dd020031278962733c65&query=' + lat + ',' + long

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find the location.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' celcius degrees out. ' + 'Humidity is ' + body.current.humidity + '%. It feels like ' + body.current.feelslike + '.')
        }
    })
}

module.exports = forecast