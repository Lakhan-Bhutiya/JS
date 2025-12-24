// Authentication vs Authorization
/*


==>Authentication
Who are you?
Login
Register
Identity verification

==>Authorization
What are you allowed to do?
Admin access
Protected routes
Role checks

Example : 
Login = authentication
isAdmin === true = authorization 

*/

//Why Passwords Are NEVER Stored Directly
// password: "123456" if DB leaks → users are finished.

//==>Hashing (correct)

/*
One-way process
Cannot be reversed
Same password ≠ same hash (because of salt)
*/

//JWT JWT = signed identity proof, not encryption.
// structure HEADER.PAYLOAD.SIGNATURE

/*
==>Header
Algorithm
Token type

==>Payload
User ID
Role
Public info

==>Signature
Created using secret key
Prevents tampering

Note:
> Anyone can read payload
> Only server can verify signature

==>Why JWT Is Stateless (Very Important)
    No session stored on server
    Every request carries identity
    Easy to scale (no memory sharing)

*/

// token Generation
generateToken(userId)

// internally 
// payload + secret → signature
//“This request belongs to user X and was issued by this server.”