// Without MVC Model View Control
// app.post('/users', async (req, res) => {
//     // validation
//     // database logic
//     // business logic
//     // response
//   });


/*
Problems:
Messy code
Hard to test
Impossible to scale
 */

// With MVC
// Route → Controller → Service → Model → DB



// Folder Structure when we code should be 
/*
src/
 ├── routes/
 │    └── user.routes.js
 ├── controllers/
 │    └── user.controller.js
 ├── services/
 │    └── user.service.js
 ├── models/
 │    └── user.model.js
 ├── middleware/
 ├── utils/
 ├── app.js
 └── server.js
 */

