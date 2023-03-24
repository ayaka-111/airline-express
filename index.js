const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

// req.bodyの中に含まれている送信されてきたデータを取り出す
app.use(express.json());

const prisma = new PrismaClient();

// app.get('/', (req, res) => res.send('Hello World!'));

// app.get('/tasks', async (req, res) => {
//   const tasks = await prisma.task.findMany();
//   return res.json(tasks);
// });


// Users
// Usersテーブル全件取得
app.get('/users', async (req, res) => {
  const users = await prisma.users.findMany();
  return res.json(users);
});

// Usersテーブルからidを指定して取得
app.get('/users/:id', async (req, res) => {
  // const id = Number(req.params.id);
  const id = req.params.id;
  const user = await prisma.users.findUnique({
    where: {
      id,
    },
  });
  return res.json(user);
});

// データをデータベースに追加するための処理
// app.post('/tasks', async(req, res)=> {
//   const {task, completed} = req.body;
//   const newTask = await prisma.task.create({
//     data: {
//       task,
//       completed,
//     },
//   });
//   return res.json(newTask);
// });

// Usersテーブルに追加
app.post('/users', async(req, res)=> {
  const {id, email, first_name, last_name, date_of_birth, gender, phone} = req.body;
  const newUser = await prisma.users.create({
    data: {
      id,
      email,
      first_name,
      last_name,
      date_of_birth,
      gender,
      phone,
    },
  });
  return res.json(newUser);
});

// Flights
app.get('/flights', async (req, res) => {
  const flights = await prisma.flights.findMany();
  return res.json(flights);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
