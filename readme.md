# ExpressJS - Employee Records 
Made by Jeremias Bulanadi

### Instructions
1. Open a terminal.
2. Navigate to the directory of "express-api".
3. Run `npm install` to run the neccessary dependencies.
4. Run `npm start` to run the server.
5. Send the appropriate requests.

The server listens on port 9095


To get random employee, send a GET request to:
```
localhost:9095/employee
```

To return all list of employees, send a GET request to:
```
localhost:9095/employees
```


To add an employee, send a POST request to:
```
localhost:9095/employee
```

with a JSON request body with the same structure as this: 
```json
{
    "id": 1,
    "name": "John Doe",
    "position": "Software Engineer"   
}
```

To delete an employee, send a DELETE request with a query param of the id of the employee:
```
localhost:9095/employee?id=*
```

To delete an employee, send a PATCH request with a query param of the id of the employee and with a JSON request body with the properties that needed to be updated:
```
localhost:9095/employee?id=*
```
```json
{
    "id": 2,
    "name": "John Smith",
    "position": "Technician"   
}
```