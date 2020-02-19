const fetch = require('node-fetch');
const Bluebird = require('bluebird');
 
fetch.Promise = Bluebird;

const { URLSearchParams } = require('url');
 
const params = new URLSearchParams();
params.append('a', 1);
 
fetch('http://127.0.0.1:7000', { method: 'POST', body: params })
    .then(res => res.json())
    .then(json => console.log(json));