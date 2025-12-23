/*
Routing decides which function should run for a given:
=>URL
=>HTTP method (GET, POST, etc.) 

Routing is pattern matching between
HTTP METHOD + PATH  →  handler function

How Express Matches Routes

When a request comes:
GET /users/10

Express checks top to bottom
1. app.get('/')
2. app.get('/users')
3. app.get('/users/:id')  ✅ MATCH

Internally Express stores:
{ method: GET, path: '/', handler }
{ method: POST, path: '/login', handler }
*/

//Route Parameters
app.get('/users/:id', (req, res) => {
    res.send(req.params.id);
  });

//Request: /users/25
// in internally req.params = { id: '25' }

//Query Parameters

app.get('/products', (req, res) => {
    res.json(req.query);
  });
//Request : /products?page=2&limit=10
//in internally req.query = { page: '2', limit: '10' }
/*
| Params            | Query             |
| ----------------- | ----------------- |
| Required          | Optional          |
| Path-based        | After `?`         |
| Identify resource | Filter / paginate |
*/


//Route Chaining (Clean Code) 

// app.get('/user', ...)
// app.post('/user', ...)

app.route('/user')
  .get((req, res) => {
    res.send('Get user');
  })
  .post((req, res) => {
    res.send('Create user');
  });


  const router = express.Router();

// using app.get routing 
  const express = require("express");
  const app = express();
  const port = 5000;
  
  // Home route
  app.get("/", (req, res) => {
      res.send("Home Page");
  });
  
  // User route
  app.get("/user", (req, res) => {
      res.send("User Page");
  });
  
  app.listen(port, () => {
      console.log("Server running");
  });
  /*Why Router is needed

  When app grows:  
  Too many routes in one file  
  Code becomes messy 
  */

  // path = routes/userRoutes.js

  /*
const express = require("express");
const router = express.Router();

// /user/
router.get("/", (req, res) => {
    res.send("User Home");
});

// /user/profile
router.get("/profile", (req, res) => {
    res.send("User Profile");
});

module.exports = router;
*/

// path = app.js

// const express = require("express");
// const app = express();
// const userRoutes = require("./routes/userRoutes");

// // attach router
// app.use("/user", userRoutes);

// app.get("/", (req, res) => {
//     res.send("Home Page");
// });

// app.listen(5000, () => {
//     console.log("Server running");
// });

// simple use app.use("/user", userRoutes);
