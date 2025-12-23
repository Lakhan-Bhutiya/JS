// Instead of handling errors everywhere, you handle all errors in one place.
/*
==>Central error handling is a special middleware that:
catches errors from any route / controller / middleware
converts them into a single, consistent HTTP response
prevents app crashes 
*/

try {
    await User.create(data);
  } catch (err) {                                           // wrong way because we cant use for every line of code 
    res.status(500).json({ error: err.message });
  }
  

//  so we use the central error handling method 
// Any middleware with 4 parameters is treated as an error handler. == (err, req, res, next)
/*
Flow 
Request
 ↓
Route / Middleware
 ↓
Error occurs
 ↓
next(err)  ← IMPORTANT
 ↓
Express skips normal middleware
 ↓
Error-handling middleware
 ↓
Response sent


Why Error Middleware Must Be LAST
app.use(routes);
app.use(errorHandler); // ✅ last
Why?
Express runs middleware top to bottom
Error handler must be the final catcher

 */

module.exports = (err, req, res, next) => {
    console.error(err);
  
    res.status(500).json({
      message: err.message || 'Internal Server Error'
    });
  };
  