-- Created Database SmartSaver
-- CREATE DATABASE smartsaver;
SHOW DATABASES;
USE smartsaver;
SELECT DATABASE();

-- Created Table for User(login & Register)
CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255)
);


-- Feedback Table
CREATE TABLE feedback(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    message TEXT
);
-- Contact table

CREATE TABLE contacts(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    message TEXT
);


-- show Tables
SHOW TABLES;

-- delete the table
TRUNCATE TABLE users;

#insert values for login
INSERT INTO users(name,email,password)
VALUES(
'Laxman',
'laxman@gmail.com',
'123456'
);

select * from users;

-- Categories Table

CREATE TABLE categories(
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(100) NOT NULL
);

-- insert categories values
INSERT INTO categories(category_name)
VALUES
('Electronics'),
('Fashion'),
('Hotels'),
('Flights');

-- show values in categories table
SELECT * FROM categories;

-- Products Table

CREATE TABLE products (
    id INT NOT NULL,
    category_id INT NOT NULL,
    description VARCHAR(500),
    image_url VARCHAR(500),
    price DECIMAL(10,2),
    product_name VARCHAR(255),
    rating DOUBLE,
    PRIMARY KEY (id)
);

DESC products;


-- Hotels Table
CREATE TABLE hotels(
    id INT PRIMARY KEY AUTO_INCREMENT,
    hotel_name VARCHAR(200) NOT NULL,
    location VARCHAR(200),
    price_per_night DECIMAL(10,2),
    rating DECIMAL(2,1),
    image_url VARCHAR(255)
);

-- Flights Table
CREATE TABLE flights (
    id INT AUTO_INCREMENT PRIMARY KEY,
    airline VARCHAR(100),
    flight_number VARCHAR(50),
    aircraft VARCHAR(100),
    source VARCHAR(100),
    destination VARCHAR(100),
    departure_time VARCHAR(20),
    arrival_time VARCHAR(20),
    duration VARCHAR(50),
    stops VARCHAR(50),
    travel_date VARCHAR(50),
    price DOUBLE,
    discount INT
);

desc flights;



