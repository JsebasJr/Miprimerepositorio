const { Pool } = require("pg");
const pool = new Pool({
    user: 'postgres', // Replace with your PostgreSQL username
    host: 'localhost', // Replace with your PostgreSQL host
    database: 'base_datos', // Replace with your PostgreSQL database name
    password: 'micontraseña', // Replace with your PostgreSQL password
    port: 5432, // Replace with your PostgreSQL port if different
  });
  const http = require('http') // libreria para comunicarnos con apis
  const PORT = 3000 //puesto por que se comunica
const server = http.createServer((req, res) => { // request, se crea la api

    if (req.method === 'GET') {
        const id = req.url.split('?')[0].split('/')[1]
        const name = req.url.split('?')[1]
        const email = req.url.split('?')[2]
        res.writeHead(200,{'Content-Type':'aplication.json'});
   
        const insertar=`INSERT INTO USERS (id,username,email)VALUES (${id},'${name}','${email}')`
        pool.query(insertar,(err,res)=>{
            if(err) {
           console.error('Error creating usuario:',err);
           }
           else{
               console.error("....")
           }
           
           }); 
           res.end('{se han guardado tus datos}');
  } else {
    res.writeHead(404, { 'Content-Type': 'aplication.json' });
    res.end('{404 Not Found\n}');
  }
});

//iniciar el servidor
server.listen(PORT,()=> {
console.log(`sever is runing on port ${PORT}`);
});