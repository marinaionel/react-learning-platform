-- SQLite

create table users(
  id INTEGER PRIMARY KEY,
  firebaseId NVARCHAR(200) NOTNULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  email NVARCHAR(200) NOT NULL UNIQUE,
  name NVARCHAR(200) NOT NULL,
  avatarUrl NVARCHAR(2048) NOT NULL
);

CREATE TABLE courses (
  id INTEGER PRIMARY KEY,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  coverImageUrl NVARCHAR(2048),
  name NVARCHAR(300) NOT NULL,
  authorId INTEGER NOT NULL,
  duration NVARCHAR(50) NOT NULL,
  numberOfLessons INTEGER NOT NULL,
  FOREIGN KEY (authorId) REFERENCES users(id)
);

CREATE TABLE user_courses (
  id INTEGER PRIMARY KEY,
  userId INTEGER NOT NULL,
  courseId INTEGER NOT NULL,
  userProgress INTEGER NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (courseId) REFERENCES courses(id)
);

CREATE TABLE course_likes (
  id INTEGER PRIMARY KEY,
  userId INTEGER NOT NULL,
  courseId INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (courseId) REFERENCES courses(id),
  UNIQUE (userId, courseId)
);

-- Insert dummy data into users table
INSERT INTO users (firebaseId, email, name, avatarUrl) VALUES
('ouUUlRZzA7423kkqVe4FUBKf1ABC', 'jane.doe@example.com', 'Jane Doe', 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg'),
('ouUUlRZzA7g23kkqVe4FUBKf1ABD', 'john.smith@example.com', 'John Smith', 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg'),
('ouUUlRZzA7g23kkqVe4FUBKf1ABE', 'alice@example.com', 'Alice', 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg'),
('ouUUlRZzA7g23kkqVe4FUBKf1ABF', 'bob@example.com', 'Bob', 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg'),
('ouUUlRZzA7g23kkqVe4FUBKf1ABG', 'charlie@example.com', 'Charlie', 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg'),
('ouUUlRZzA7g23kkqVe4FUBKf1ABH', 'alice.johnson@example.com', 'Alice Johnson', 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg');

-- Insert dummy data into courses table
INSERT INTO courses (coverImageUrl, name, authorId, duration, numberOfLessons) VALUES
('https://www.usnews.com/object/image/0000016d-8dc8-dc08-a77f-8fcf81610000/191002-volatility-stock.jpg', 'Introduction to Stock Market', 1, '4h 30m', 15),
('https://www.usnews.com/object/image/0000016d-8dc8-dc08-a77f-8fcf81610000/191002-volatility-stock.jpg', 'Advanced Investment Strategies', 2, '6h 15m', 20),
('https://www.usnews.com/object/image/0000016d-8dc8-dc08-a77f-8fcf81610000/191002-volatility-stock.jpg', 'Cryptocurrency Basics', 3, '3h 45m', 10),
('https://www.usnews.com/object/image/0000016d-8dc8-dc08-a77f-8fcf81610000/191002-volatility-stock.jpg', 'Real Estate Investing', 1, '5h 20m', 12),
('https://www.usnews.com/object/image/0000016d-8dc8-dc08-a77f-8fcf81610000/191002-volatility-stock.jpg', 'Understanding Mutual Funds', 2, '2h 30m', 8),
('https://www.usnews.com/object/image/0000016d-8dc8-dc08-a77f-8fcf81610000/191002-volatility-stock.jpg', 'Options Trading', 3, '4h 50m', 14);

-- Insert dummy data into user_courses table
INSERT INTO user_courses (userId, courseId, userProgress) VALUES
(1, 1, 75),
(1, 2, 50),
(2, 3, 20),
(2, 4, 65),
(3, 5, 40),
(3, 6, 30);

-- Insert dummy data into course_likes table
INSERT INTO course_likes (userId, courseId)
VALUES 
  (1, 1),
  (1, 3),
  (2, 1),
  (2, 2),
  (3, 2),
  (3, 3),
  (4, 2),
  (4, 4),
  (5, 1),
  (5, 3),
  (6, 4),
  (6, 5);
