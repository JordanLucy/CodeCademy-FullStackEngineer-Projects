SELECT *
FROM customers
ORDER BY customer_id;

SELECT *
FROM customers_log;


CREATE TRIGGER name_change BEFORE UPDATE ON customers
FOR EACH ROW
EXECUTE PROCEDURE log_customers_change();

UPDATE customers
SET first_name = 'Steve'
WHERE last_name = 'Hall';

SELECT * 
FROM customers
ORDER BY customer_id;

SELECT *
FROM customers_log;

/*Testing that it is only tracking select funtions for the triggers*/

UPDATE customers
SET years_old = 20
WHERE last_name = 'Hall';

SELECT * 
FROM customers
ORDER BY customer_id;

SELECT *
FROM customers_log;

CREATE TRIGGER customer_insert AFTER INSERT ON customers
FOR EACH STATEMENT
EXECUTE PROCEDURE log_customers_change();

/*Adding in new customers*/

INSERT INTO customers (first_name, last_name, email_address, home_phone, city, years_old)
VALUES 
('Jordan', 'Lucy', 'jord_yaboy@outlook.com', '1234567890', 'Liverpool', 24),
('Mike', 'Hillesdon', 'mike_yaboy@outlook.com', '0987654321', 'Parbold', 4),
('Josh', 'Howe', 'joshua_yaboy@outlook.com', '6969696969', 'Liverpool', 25);

SELECT *
FROM customers
ORDER BY customer_id;

SELECT *
FROM customers_log;

CREATE TRIGGER customer_min_age BEFORE UPDATE ON customers
FOR EACH ROW 
WHEN(NEW.years_old < 13)
EXECUTE PROCEDURE override_with_min_age();

SELECT *
FROM customers 
ORDER BY customer_id;

SELECT *
FROM customers_log;

UPDATE customers
SET years_old = 12
WHERE last_name = 'Campbell';

UPDATE customers
SET years_old = 24
WHERE last_name = 'Cook';

SELECT *
FROM customers
ORDER BY customer_id;

SELECT *
FROM customers_log;

UPDATE customers
SET first_name = 'Poggers',
years_old = '10'
WHERE last_name = 'Campbell';

SELECT *
FROM customers
ORDER BY customer_id;

SELECT *
FROM customers_log;

DROP TRIGGER IF EXISTS customer_min_age ON customers;

SELECT *
FROM information_schema.triggers;