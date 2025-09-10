CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  course_name VARCHAR(100) NOT NULL,
  duration VARCHAR(50) NOT NULL
);

CREATE TABLE enrollments (
  id SERIAL PRIMARY KEY,
  student_id INT REFERENCES students(id) ON DELETE CASCADE,
  course_id INT REFERENCES courses(id) ON DELETE CASCADE,
  UNIQUE(student_id, course_id)
);
