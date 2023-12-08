const bodyParser = require('body-parser');
const express = require('express');
const TaskRoutes = require("./Router/task-routes")

const PORT = 5000
const app = express();

app.use(express.json());

app.use('/tasks', TaskRoutes);

app.listen(PORT, ()=> console.log(`Server is listening on ${PORT}`))