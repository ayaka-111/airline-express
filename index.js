const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const port = 3000;
const cors = require("cors");

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
app.get("/users", async (req, res) => {
  const users = await prisma.users.findMany();
  return res.json(users);
});

// Usersテーブルからidを指定して取得
app.get("/users/:id", async (req, res) => {
  // const id = Number(req.params.id);
  const id = req.params.id;
  const user = await prisma.users.findUnique({
    where: {
      id,
    },
  });
  return res.json(user);
});

// Usersテーブルに追加
app.post("/users", async (req, res) => {
  const { id, email, first_name, last_name, date_of_birth, gender, phone } =
    req.body;
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
// to/fromが一致する便の取得
app.get("/matchFlights", async (req, res) => {
  const from = req.params.from;
  const to = req.params.to;

  const flights = await prisma.flights.findMany({
    // to/fromが一致する便を取得
    where: {
      AND: [{ from: "羽田" }, { to: "那覇" }],
    },
  });
  return res.json(flights);
});

// 検索結果
// ①reservationsとflightsを結合する→flightsと軸とした外部結合
// ②同じ日付のデータを取得する(flight_date)
// ③同じ行き先のデータを絞り込む(to/from)
app.get("/searchReservations", async (req, res) => {
  const date = req.params.flight_date;
  const from = req.params.from;
  const to = req.params.to;

  const searchReservations = await prisma.flights.findMany({
    where: {
      AND: [
        //  {flight_date: date} ,
        //  {flight: { from: from }},
        //  {flight: { to: to }},
        // { flight_date: new Date("2023-04-27") },
        // { flight: { from: "羽田" } },
        // { flight: { to: "那覇" } },
        { from: "羽田" },
        { to: "那覇" },
        { reservations: { some: { flight_date: new Date("2023-04-27") } } },
      ],
    },
    include: {
      reservations: true,
    },
  });
  return res.json(searchReservations);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
