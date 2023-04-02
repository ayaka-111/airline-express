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

// Guests
// 追加
app.post("/guests", async (req, res) => {
  const { email, first_name, last_name, date_of_birth, gender, phone } =
    req.body;
  const newGuest = await prisma.guests.create({
    data: {
      email,
      first_name,
      last_name,
      date_of_birth,
      gender,
      phone,
    },
  });
  return res.json(newGuest);
});

// id指定取得
app.get("/guests/:id", async (req, res) => {
  const id = req.params.id;
  const guest = await prisma.guests.findUnique({
    where: {
      id,
    },
  });
  return res.json(guest);
});

// Flights
// to/fromが一致する便の取得
app.get("/matchFlights", async (req, res) => {
  const from = req.query.from;
  const to = req.query.to;

  const flights = await prisma.flights.findMany({
    // to/fromが一致する便を取得
    where: {
      AND: [{ from: from }, { to: to }],
    },
  });
  return res.json(flights);
});
// Flightsテーブルからidを指定した便を取得
app.get("/flights/:id", async (req, res) => {
  const id = Number(req.params.id);
  // const id = req.params.id;
  const flight = await prisma.flights.findUnique({
    where: {
      id,
    },
  });
  return res.json(flight);
});

// 検索結果
// ①reservationsとflightsを結合する→flightsと軸とした外部結合
// ②同じ日付のデータを取得する(flight_date)
// ③同じ行き先のデータを絞り込む(to/from)
app.get("/searchReservations", async (req, res) => {
  const date = req.query.flight_date;
  const from = req.query.from;
  const to = req.query.to;

  const searchReservations = await prisma.flights.findMany({
    where: {
      AND: [
        //  {flight_date: date} ,
        //  {flight: { from: from }},
        //  {flight: { to: to }},
        // { flight_date: new Date("2023-04-27") },
        // { flight: { from: "羽田" } },
        // { flight: { to: "那覇" } },
        { from: from },
        { to: to },
        { reservations: { some: { flight_date: new Date(date) } } },
      ],
    },
    include: {
      reservations: true,
    },
  });
  return res.json(searchReservations);
});

// Passengers
// id指定して取得
app.get("/passengers/:id", async (req, res) => {
  const id = req.params.id;
  const passenger = await prisma.passengers.findUnique({
    where: {
      id,
    },
  });
  return res.json(passenger);
});

// 追加
app.post("/passengers", async (req, res) => {
  const { first_name, last_name, date_of_birth, gender, reservation_id } =
    req.body;
  const newPassenger = await prisma.passengers.create({
    data: {
      first_name,
      last_name,
      date_of_birth,
      gender,
      reservation_id,
    },
    // returning: { id: true }
  });
  // console.log(newPassenger.id)
  return res.json(newPassenger);
});
// 更新(reservations)
app.put("/passengers/:id", async (req, res) => {
  const id = req.params.id;
  // const { first_name, last_name, date_of_birth, gender } = req.body;
  const updatePassenger = await prisma.passengers.update({
    where: {
      id,
    },
    data: {
      reservation_id: id,
    },
  });
  return res.json(updatePassenger);
});

// Reservations
app.post("/reservations", async (req, res) => {
  const {
    user_id,
    guest_id,
    flight_id,
    flight_date,
    number_of_passenger,
    total_price,
    appointment_date,
    payment_method_id,
    payment_status_id,
    // Passengers,
  } = req.body;
  const newReservations = await prisma.reservations.create({
    data: {
      user_id,
      guest_id,
      flight_id,
      flight_date,
      number_of_passenger,
      total_price,
      appointment_date,
      payment_method_id,
      payment_status_id,
      // Passengers,
    },
  });
  return res.json(newReservations);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
