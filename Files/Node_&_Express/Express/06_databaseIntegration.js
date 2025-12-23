// Why Database Layer Is Different from Normal Code ? 
/*
==> DB operations are:
        Slow (network / disk)
        Asynchronous
        Failure-prone
===>So Express + DB must use async flow correctly, or app breaks.
*/

// DB Connection Lifecycle
/*
App starts
 ↓
DB connects ONCE
 ↓
Server starts listening
 ↓
Requests use existing DB connection
 */

// Logic is applied in Express_Project File 

