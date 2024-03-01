import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import { randEmployee } from './utilities/helpers';

const app = express();

app.use(bodyParser.json())

const employees = Array.from({
    length: 5
}, () => randEmployee());
console.log(employees)

app.get("/employee", (req, res) => {
    const employee = randEmployee()

    console.log(employee)

    employees.push(employee)

    res.json(employee)
})

app.get("/employees", (req, res) => {
    res.json(employees)
})

app.post("/employee", (req, res) => {
    console.log(typeof [])
    if (Array.isArray(req.body)) {
        employees.push(...req.body)
    } else {
        employees.push(req.body)
    }

    res.status(200).json({ message: 'Employee added successfully' });
})

app.delete("/employee", (req, res) => {
    const id = Number(req.query.id)
    const index = employees.findIndex(employee => employee.id === id)

    if (index !== -1) {
        employees.splice(index, 1)
        res.status(200).json({ message: 'Employee deleted successfully' });
    } else {
        res.status(404).json({ message: 'Employee not found' });
    }

    res.json(employees)
})

app.patch("/employee", (req, res) => {
    const id = Number(req.query.id)
    const index = employees.findIndex(employee => employee.id === id)

    if (index !== -1) {
        employees[index] = { ...employees[index], ...req.body };
        res.json({ message: 'Employee updated successfully', updatedEmployee: employees[index] });
    } else {
        res.status(404).json({ message: 'Object not found' });
    }

})

const server = http.createServer(app);

server.listen(9095, () => {
    console.log("The server is running")
})