import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodebasic'
  });
  
//   // simple query
//   connection.query(
//     'SELECT * FROM `users`',
//     function(err, results, fields) {
//       console.log(results); // results contains rows returned by server
//     }
//   );
export default connection