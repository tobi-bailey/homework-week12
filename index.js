var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,
  user: "root",
  password: "",
  database: "employeeDB"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "Add Department",
        "View Department",
        "Add Role",
        "View Role",
        "Add Employee",
        "View Employee",
        "Update Employee Role"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "Add Department":
        addDepartment();
        break;

      case "View Department":
        viewDepartment();
        break;

      case "Find data within a specific range":
        rangeSearch();
        break;

      case "Add Role":
        addRole();
        break;

      case "View Role":
        viewRole();
        break;

      case "Add Employee":
        addEmployee();
        break;

      case "View Employee":
        viewEmployee();
        break;

      case "Update Employee Role":
        updateRole();
        break;
      }
    });
}

function addDepartment() {
  inquirer
    .prompt([
      {
      name: "dep_id",
      type: "input",
      message: "What is the Department id?",
      },
      {
      name: "dep_name",
      type: "input",
      message: "What is the Department name?"
      }
    ])
    .then(function(answer) {
      connection.query(
        "INSERT INTO department SET ?",
        {
          dep_id: answer.dep_id,
          dep_name: answer.dep_name,
        },
        function(err) {
          if (err) throw err;
          console.log("Your department was created successfully!");
          runSearch()
        }
      );
    });
}

function addRole() {
  inquirer
    .prompt([
      {
      name: "role_id",
      type: "input",
      message: "What is the Role id?",
      },
      {
      name: "title",
      type: "input",
      message: "What is the job title?"
      },
      {
      name: "salary",
      type: "input",
      message: "What is the salary for the role?"
      },
      {
      name: "dep_id",
      type: "input",
      message: "What is the department ID that the role falls under?"
      }
    ])
    .then(function(answer) {
      connection.query(
        "INSERT INTO department SET ?",
        {
          role_id: answer.role_id,
          title: answer.title,
          salary: answer.salary,
          dep_id: answer.dep_id,
        },
        function(err) {
          if (err) throw err;
          console.log("Your role was created successfully!");
          runSearch();
        }
      );
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
      name: "ee_id",
      type: "input",
      message: "What is the employee's id?",
      },
      {
      name: "first_name",
      type: "input",
      message: "What is the employee's first name?"
      },
      {
      name: "last_name",
      type: "input",
      message: "What is the employee's last name?"
      },
      {
      name: "role_id",
      type: "input",
      message: "What is the employee's role id?"
      },
      {
      name: "manager_id",
      type: "input",
      message: "What is the employee's manager's id?"
      }
    ])
    .then(function(answer) {
      connection.query(
        "INSERT INTO department SET ?",
        {
          ee_id: answer.ee_id,
          first_name: answer.first_name,
          last_name: answer.last_name,
          role_id: answer.role_id,
          manager_id: answer.manager_id,
        },
        function(err) {
          if (err) throw err;
          console.log("Your role was created successfully!");
          runSearch();
        }
      );
    });
}

function viewDepartment() {
  var query = "SELECT dep_name,dep_id FROM department GROUP BY dep_id";
  connection.query(query, function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].dep_name);
    }
    runSearch();
  });
}

function viewRole() {
  var query = "SELECT role_id,title,salary,dep_id FROM ee_role GROUP BY role_id";
  connection.query(query, function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].title);
    }
    runSearch();
  });
}

function viewEmployee() {
  var query = "SELECT ee_id,first_name,last_name,role_id,manager_id FROM employee GROUP BY ee_id";
  connection.query(query, function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].title);
    }
    runSearch();
  });
}

