import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const flightData = [
  {
    id: 1,
    flight: "HN0900",
    departure_time: "09:00",
    arrival_time: "11:30",
    price: 10000,
  },
  {
    id: 2,
    flight: "HN1300",
    departure_time: "13:00",
    arrival_time: "15:30",
    price: 10000,
  },
  {
    id: 3,
    flight: "HN1800",
    departure_time: "18:00",
    arrival_time: "20:30",
    price: 10000,
  },
  {
    id: 4,
    flight: "NH1000",
    departure_time: "10:00",
    arrival_time: "12:30",
    price: 10000,
  },
  {
    id: 5,
    flight: "NH1400",
    departure_time: "14:00",
    arrival_time: "16:30",
    price: 10000,
  },
  {
    id: 6,
    flight: "NH1900",
    departure_time: "19:00",
    arrival_time: "21:30",
    price: 10000,
  },
];

// const doSeed = async () => {
//   const flights = [];
//   for (const flight of flightData) {
//     const createFlights = prisma.flight.create({
//       data: flight,
//     });
//     flights.push(createFlights);
//   }
//   return await prisma.$transaction(flights);
// };

// const main = async () => {
//   console.log(`Start seeding ...`);

//   await doSeed();

//   console.log(`Seeding finished.`);
// };
const main = async () => {
  // Flights
  await prisma.flights.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      flight: "HN0900",
      from: "羽田",
      to: "那覇",
      departure_time: "09:00",
      arrival_time: "11:30",
      price: 10000,
    },
  });
  await prisma.flights.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      flight: "HN1300",
      from: "羽田",
      to: "那覇",
      departure_time: "13:00",
      arrival_time: "15:30",
      price: 10000,
    },
  });
  await prisma.flights.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      flight: "HN1800",
      from: "羽田",
      to: "那覇",
      departure_time: "18:00",
      arrival_time: "20:30",
      price: 10000,
    },
  });
  await prisma.flights.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      flight: "NH1000",
      from: "那覇",
      to: "羽田",
      departure_time: "10:00",
      arrival_time: "12:30",
      price: 10000,
    },
  });
  await prisma.flights.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      flight: "NH1400",
      from: "那覇",
      to: "羽田",
      departure_time: "14:00",
      arrival_time: "16:30",
      price: 10000,
    },
  });
  await prisma.flights.upsert({
    where: { id: 6 },
    update: {},
    create: {
      id: 6,
      flight: "NH1900",
      from: "那覇",
      to: "羽田",
      departure_time: "19:00",
      arrival_time: "21:30",
      price: 10000,
    },
  });

  // Payment_method
  await prisma.payment_method.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      status: "コンビニ支払い",
    },
  });
  await prisma.payment_method.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      status: "クレジットカード",
    },
  });

  // Payment_status
  await prisma.payment_status.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      status: "未入金",
    },
  });
  await prisma.payment_status.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      status: "入金済み",
    },
  });

  // テスト予約一覧
  await prisma.reservations.upsert({
    where: { id: "11111abc" },
    update: {},
    create: {
      id : "11111abc",
      user_id: "UzBrQXcIdmWNarmkOUEeiAaR5gQ2",
      guest_id: null,
      flight_id: 1,
      flight_date: new Date("2023-04-27"),
      number_of_passenger: 2,
      total_price: 20000,
      appointment_date: new Date("2023-03-27"),
      payment_method_id: 1,
      payment_status_id: 1,
    },
  });
  await prisma.reservations.upsert({
    where: { id: "22222abc" },
    update: {},
    create: {
      id : "22222abc",
      user_id: "UzBrQXcIdmWNarmkOUEeiAaR5gQ2",
      guest_id: null,
      flight_id: 2,
      flight_date: new Date("2023-04-27"),
      number_of_passenger: 15,
      total_price: 150000,
      appointment_date: new Date("2023-03-27"),
      payment_method_id: 1,
      payment_status_id: 1,
    },
  });
  await prisma.reservations.upsert({
    where: { id: "33333abc" },
    update: {},
    create: {
      id : "33333abc",
      user_id: "UzBrQXcIdmWNarmkOUEeiAaR5gQ2",
      guest_id: null,
      flight_id: 3,
      flight_date: new Date("2023-04-27"),
      number_of_passenger: 20,
      total_price: 200000,
      appointment_date: new Date("2023-03-27"),
      payment_method_id: 1,
      payment_status_id: 1,
    },
  });
  await prisma.reservations.upsert({
    where: { id: "44444abc" },
    update: {},
    create: {
      id : "44444abc",
      user_id: "UzBrQXcIdmWNarmkOUEeiAaR5gQ2",
      guest_id: null,
      flight_id: 4,
      flight_date: new Date("2023-04-27"),
      number_of_passenger: 19,
      total_price: 190000,
      appointment_date: new Date("2023-03-27"),
      payment_method_id: 1,
      payment_status_id: 1,
    },
  });
  await prisma.reservations.upsert({
    where: { id: "55555abc" },
    update: {},
    create: {
      id : "55555abc",
      user_id: "UzBrQXcIdmWNarmkOUEeiAaR5gQ2",
      guest_id: null,
      flight_id: 5,
      flight_date: new Date("2023-04-27"),
      number_of_passenger: 10,
      total_price: 100000,
      appointment_date: new Date("2023-03-27"),
      payment_method_id: 1,
      payment_status_id: 1,
    },
  });
  await prisma.reservations.upsert({
    where: { id: "66666abc" },
    update: {},
    create: {
      id : "66666abc",
      user_id: "UzBrQXcIdmWNarmkOUEeiAaR5gQ2",
      guest_id: null,
      flight_id: 6,
      flight_date: new Date("2023-04-27"),
      number_of_passenger: 20,
      total_price: 200000,
      appointment_date: new Date("2023-03-27"),
      payment_method_id: 1,
      payment_status_id: 1,
    },
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
