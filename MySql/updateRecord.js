// create a database with name of student and create table with name of student

const mysql = require("mysql");

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Devendro@123",
  database: "student",
});

// Update a specific student's record (e.g., rollno = 3)
const updatedStudent = { name: 'Dev', address: 'Nagpur' };
connection.query(
  'UPDATE student SET ? WHERE rollno = 3',
  updatedStudent,
  (err, result) => {
    if (err) {
      console.error('Error updating record: ' + err.message);
    } else {
      console.log(`Updated ${result.affectedRows} record(s)`);
    }
  }
);


// Close the connection when done
connection.end((err) => {
  if (err) {
    console.error("Error closing the database connection: " + err.stack);
  } else {
    console.log("Connection closed");
  }
});
