// create a database with name of student and create table with name of student

const mysql = require("mysql");

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Devendro@123",
  database: "student",
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: " + err.stack);
    return;
  }
  console.log("Connected to the database");
});

const students = [
  {
    rollno: 1,
    name: "Nishant",
    address: "Delhi",
  },
  {
    rollno: 2,
    name: "Pranit",
    address: "Mumbai",
  },
  {
    rollno: 3,
    name: "Devendro",
    address: "Kolkata",
  },
  {
    rollno: 4,
    name: "Sweety",
    address: "Chennai",
  },
  {
    rollno: 5,
    name: "Yukta",
    address: "Bangalore",
  },
  {
    rollno: 6,
    name: "Sidharth",
    address: "Hyderabad",
  },
  {
    rollno: 7,
    name: "Rohit",
    address: "Pune",
  },
  {
    rollno: 8,
    name: "Rejiinold",
    address: "Jaipur",
  },
  {
    rollno: 9,
    name: "Prashant",
    address: "Ahmedabad",
  },
  {
    rollno: 10,
    name: "Yash",
    address: "Lucknow",
  },
];

// Insert 10 records into the student table
for (let i = 0; i < students.length; i++) {
  connection.query("INSERT INTO student SET ?", students[i], (err, result) => {
    if (err) {
      console.error("Error inserting record: " + err.message);
    } else {
      console.log(`Inserted student with ID: ${result.insertId}`);
    }
  });
}

// Close the connection when done
connection.end((err) => {
  if (err) {
    console.error("Error closing the database connection: " + err.stack);
  } else {
    console.log("Connection closed");
  }
});
