//Theory 
// Express.js is a thin layer on top of Node.js HTTP module that makes server creation easier.
/* Without Express (Pure Node)
    Node gives you:
    http.createServer()
    Low-level request handling
    Manual routing
    Manual parsing
With Express

=>Express gives you:
    Clean routing (app.get)
    Middleware system
    Automatic request parsing
    Cleaner error handling 
    
*/


const express = require("express");
const app = express()
port = 5000

app.get("/", (req, res) => {
    res.send('Text');
    // res.json({ name: 'Express' });   It will give error becuse at a time we can send one response only 
    // res.status(201).send('Created');

});

app.listen(port, ()=>{
    console.log(`running on port ${port}`)
});
app.get('/user', (req, res) => {
    console.log(req.method);
    console.log(req.url);
    res.send('Check console');
  });
  

