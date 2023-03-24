-- CreateTable
CREATE TABLE "Flights" (
    "id" INTEGER NOT NULL,
    "flight" TEXT NOT NULL,
    "departure_time" TEXT NOT NULL,
    "arrival_time" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Flights_pkey" PRIMARY KEY ("id")
);
