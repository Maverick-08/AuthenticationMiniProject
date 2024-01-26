/* STEPS
1. user will send username and password 
2. check if username already exists in the database
2.1 Validate the password using zod
2.2 connect to database
2.3 query the username.
2.4 if a match is found , ask the user to change the password
3 if no match is found add the user to the database.
4 Route the user to Authentication.
*/