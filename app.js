
const axios = require('axios');
// 1
let number = 42
let url = `http://numbersapi.com/${number}?json`

let numberPromise = axios.get(url);

numberPromise
    .then(res => console.log(res.data))
    .catch(err => console.log(err));

// 2

let nums = [32,78,45,50,100]
let Baseurl = `http://numbersapi.com/${nums}?json`

let promises = axios.get(Baseurl)

promises.then(res => console.log(res.data))
    .catch(err => console.log(err))

// 3

let num = 8
let allPromises = []
let promUrl = `http://numbersapi.com/${num}?json`

for(let i = 0; i < 4; i++){
    allPromises.push(axios.get(promUrl))
}

Promise.all(allPromises)
.then(single => single
    .forEach(res => console.log(res.data)))
.catch(err => console.log(err))










    

    