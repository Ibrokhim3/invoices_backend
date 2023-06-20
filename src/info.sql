DROP DATABASE IF EXISTS invoices;
  CREATE DATABASE invoices;

DROP TABLE IF EXISTS users;
CREATE TABLE users(
     user_id VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
     username VARCHAR(50) NOT NULL,
     email VARCHAR(50) UNIQUE NOT NULL,
     password VARCHAR NOT NULL, 
     profile_img VARCHAR
);
DROP TABLE IF EXISTS invoices;
CREATE TABLE invoices(
     id VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
     user_id VARCHAR UNIQUE REFERENCES users(user_id) ON DELETE CASCADE,
     "to" VARCHAR(100) NOT NULL, 
     created_date DATE NOT NULL DEFAULT CURRENT_DATE,  
     email VARCHAR(50) NOT NULL,
     term INT, 
     description TEXT NOT NULL, 
     price INT,
     due_date DATE NOT NULL,
     paid BOOLEAN NOT NULL DEFAULT false 
);



--------------
--------------

INSERT INTO users(username, email, password) VALUES ('Salom', 'salom@gmail.com', 'salom');
INSERT INTO invoices(user_id, "to", email, term, description, price, due_date) VALUES ('fa445843-fd56-4342-877d-fe5a63176596', 'anyone', 'salom@gmail.com', 14, 'lorem ipsum ...', 1000, '2023-06-18' );

ALTER TABLE invoices
DROP CONSTRAINT invoices_user_id_key;



ALTER TABLE users ADD CONSTRAINT fk_user_email
FOREIGN KEY(user_email_id) 
	  REFERENCES emails(id);
--

ALTER TABLE users ADD CONSTRAINT fk_users_com
FOREIGN KEY(company_id) 
    REFERENCES company(company_id);

--

