const http = require('http');
const characters = require('./Utils/data')

http.createServer((request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');

    if(request.url.includes("/rickandmorty/character")){
        const id = request.url.split('/').at(-1);

        let charactersFind = characters.find((char)=> char.id === Number(id))

        return response.writeHead(200, {'Content-type': 'application/json'}).end(JSON.stringify(charactersFind))
    }

}).listen(3001, 'localhost')
