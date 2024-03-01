"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const helpers_1 = require("./utilities/helpers");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const employees = Array.from({
    length: 5
}, () => (0, helpers_1.randEmployee)());
console.log(employees);
app.get("/employee", (req, res) => {
    const employee = (0, helpers_1.randEmployee)();
    console.log(employee);
    employees.push(employee);
    res.json(employee);
});
app.get("/employees", (req, res) => {
    res.json(employees);
});
app.post("/employee", (req, res) => {
    console.log(typeof []);
    if (Array.isArray(req.body)) {
        employees.push(...req.body);
    }
    else {
        employees.push(req.body);
    }
    res.status(200).json({ message: 'Employee added successfully' });
});
app.delete("/employee", (req, res) => {
    const id = Number(req.query.id);
    const index = employees.findIndex(employee => employee.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
        res.status(200).json({ message: 'Employee deleted successfully' });
    }
    else {
        res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employees);
});
app.patch("/employee", (req, res) => {
    const id = Number(req.query.id);
    const index = employees.findIndex(employee => employee.id === id);
    if (index !== -1) {
        employees[index] = Object.assign(Object.assign({}, employees[index]), req.body);
        res.json({ message: 'Employee updated successfully', updatedEmployee: employees[index] });
    }
    else {
        res.status(404).json({ message: 'Object not found' });
    }
});
const server = http_1.default.createServer(app);
server.listen(9095, () => {
    console.log("SERVER UP!!!");
});
//# sourceMappingURL=index.js.map