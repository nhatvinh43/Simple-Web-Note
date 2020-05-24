const sql = require("mysql");

createConnection = () => {
  return sql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "1234",
    database: "simple-note",
  });
};

exports.load = (sql) => {
  return new Promise((resole, reject) => {
    const con = createConnection();
    con.connect((err) => {
      if (err) {
        reject(err);
      }
    });
    con.query(sql, (error, results, fields) => {
      if (error) {
        reject(error);
      }
      resole(results);
    });
    con.end();
  });
};
