// What REST REALLY Is
// REST is a way of designing APIs around resources, not actions.
// What is the resource? → users, products, orders
// What do you want to do? → GET, POST, PUT, DELETE
/*
| Method | Meaning                 | Example     |
| ------ | ----------------------- | ----------- |
| GET    | Read data               | `/users`    |
| POST   | Create new              | `/users`    |
| PUT    | Replace entire resource | `/users/10` |
| PATCH  | Update partial data     | `/users/10` |
| DELETE | Remove resource         | `/users/10` |
*/

/*
==>HTTP Status Codes

=>Success

| Code | Meaning    |
| ---- | ---------- |
| 200  | OK         |
| 201  | Created    |
| 204  | No Content |

=>Client Errors

| Code | Meaning      |
| ---- | ------------ |
| 400  | Bad request  |
| 401  | Unauthorized |
| 403  | Forbidden    |
| 404  | Not found    |

=>Server Errors

| Code | Meaning               |
| ---- | --------------------- |
| 500  | Internal server error |

 */


