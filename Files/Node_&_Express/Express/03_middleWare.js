
// middleware 
/* Middleware is a function that runs between request and response.
Middleware is a function stored in Express’s internal stack that gets executed sequentially for every matching request. */


// Types of Middleware


/* 
1. Application-Level Middleware
✔ Runs for every request
✔ Stored in global middleware stack
 */
app.use((req, res, next) => {
    console.log('Middleware running');
    next();
  });

/*
2. Route-Level Middleware
✔ Runs only for that route
✔ Executed before route handler
 */
app.get('/dashboard', authMiddleware, (req, res) => {
    res.send('Dashboard');
  });
/*
3. Built-in Middleware (Express Provides)What they do internally:
Parse request body
Attach data to req.body
Without them → req.body is undefined
*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/*
4. Error-Handling Middleware (Special Case)
=>4 parameters required
=>Only runs when next(err) is called
 */
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
  });
  
/*
5. Third-Party Middleware
morgan → logging
cors → cross-origin requests
helmet → security
 */
/*
Middleware Order (MOST IMPORTANT RULE)
app.use(middleware1);
app.use(middleware2);

app.get('/', handler);

middleware1 → middleware2 → handler

 */
function authMiddleware(req, res, next) {
    if (!req.headers.authorization) {
      return res.status(401).send('Unauthorized');
    }}