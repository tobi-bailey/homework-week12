CREATE database employeeDB;

USE employeeDB;

CREATE TABLE department (
  dep_id INT NOT NULL,
  dep_name VARCHAR(30),
  PRIMARY KEY (dep_id)
);

CREATE TABLE ee_role (
	role_id INT NOT NULL,
	title VARCHAR(30),
    salary DECIMAL (10,2),
    dep_id INT,
  PRIMARY KEY (role_id)
);

CREATE TABLE employee (
  ee_id INT NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100) NULL,
  role_id INT,
  manager_id INT,
  PRIMARY KEY (ee_id)
);

SELECT * FROM department;
select * from ee_role;
select * from employee;