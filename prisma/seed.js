import { PrismaClient, Prisma
 } from "@prisma/client";

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
const main = async() => {
  // Flights
  await prisma.flights.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      flight: "HN0900",
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
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
