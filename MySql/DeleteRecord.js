// create a database with name of student and create table with name of student

const mysql = require("mysql");

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Devendro@123",
  database: "student",
});

// Delete a specific student's record (e.g., rollno = 2)
connection.query("DELETE FROM student WHERE rollno = 2", (err, result) => {
  if (err) {
    console.error("Error deleting record: " + err.message);
  } else {
    console.log(`Deleted ${result.affectedRows} record(s)`);
  }
});

// Close the connection when done
connection.end((err) => {
  if (err) {
    console.error("Error closing the database connection: " + err.stack);
  } else {
    console.log("Connection closed");
  }
});
