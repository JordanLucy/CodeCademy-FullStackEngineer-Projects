SELECT * FROM trips;
 
SELECT * FROM riders;
 
SELECT * FROM cars;

--Task 4
--SELECT *
--FROM trips
--LEFT JOIN riders
--  ON riders.id = trips.rider_id;

--Task 5 (INNER JOIN NOT NECESSARY)
--SELECT *
--FROM trips
--INNER JOIN cars
--  ON cars.id = trips.car_id;

--Task 6
--SELECT *
--FROM riders
--UNION 
--SELECT *
--FROM riders2;

-- Task 7
--SELECT AVG(cost)
--FROM trips;

-- Task 8
--SELECT *
--FROM riders
--WHERE total_trips < 500
--UNION
--SELECT * 
--FROM riders2
--WHERE total_trips < 500;

--Task 9
--SELECT COUNT(*)
--FROM cars
--WHERE status = 'active';

--Task 10
SELECT *
FROM cars
ORDER BY trips_completed DESC
LIMIT 2;


