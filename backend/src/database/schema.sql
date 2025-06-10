CREATE TABLE visitors (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL
);

CREATE TABLE exhibits (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT
);

CREATE TABLE visits (
  id SERIAL PRIMARY KEY,
  visitor_id INTEGER REFERENCES visitors(id) ON DELETE CASCADE,
  exhibit_id INTEGER REFERENCES exhibits(id) ON DELETE CASCADE,
  visit_date DATE NOT NULL
);