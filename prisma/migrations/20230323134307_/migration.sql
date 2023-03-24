/*
  Warnings:

  - You are about to drop the column `code` on the `PaymentMethod` table. All the data in the column will be lost.
  - You are about to drop the column `code` on the `PaymentStatus` table. All the data in the column will be lost.
  - You are about to drop the `Empty_seat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Guest` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[flight]` on the table `Flights` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Empty_seat" DROP CONSTRAINT "Empty_seat_flight_id_fkey";

-- AlterTable
ALTER TABLE "PaymentMethod" DROP COLUMN "code";

-- AlterTable
ALTER TABLE "PaymentStatus" DROP COLUMN "code";

-- DropTable
DROP TABLE "Empty_seat";

-- DropTable
DROP TABLE "Guest";

-- CreateTable
CREATE TABLE "Guests" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "first_name" VARCHAR(15) NOT NULL,
    "last_name" VARCHAR(15) NOT NULL,
    "gender" TEXT NOT NULL,
    "date_of_birth" DATE NOT NULL,
    "phone" CHAR(11) NOT NULL,

    CONSTRAINT "Guests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Passengers" (
    "id" TEXT NOT NULL,
    "first_name" VARCHAR(15) NOT NULL,
    "last_name" VARCHAR(15) NOT NULL,
    "gender" TEXT NOT NULL,
    "date_of_birth" DATE NOT NULL,

    CONSTRAINT "Passengers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservations" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "guest_id" TEXT,
    "flight_id" INTEGER NOT NULL,
    "flight_date" DATE NOT NULL,
    "number_of_passenger" INTEGER NOT NULL,
    "total_price" INTEGER NOT NULL,
    "appointment_date" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "payment_method_id" INTEGER NOT NULL,
    "payment_status_id" INTEGER NOT NULL,

    CONSTRAINT "Reservations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Empty_seats" (
    "id" SERIAL NOT NULL,
    "flight_id" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    "reserved_seat" INTEGER NOT NULL,

    CONSTRAINT "Empty_seats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Guests_email_key" ON "Guests"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Reservations_payment_method_id_key" ON "Reservations"("payment_method_id");

-- CreateIndex
CREATE UNIQUE INDEX "Reservations_payment_status_id_key" ON "Reservations"("payment_status_id");

-- CreateIndex
CREATE UNIQUE INDEX "Empty_seats_flight_id_key" ON "Empty_seats"("flight_id");

-- CreateIndex
CREATE UNIQUE INDEX "Flights_flight_key" ON "Flights"("flight");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Passengers" ADD CONSTRAINT "Passengers_id_fkey" FOREIGN KEY ("id") REFERENCES "Reservations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservations" ADD CONSTRAINT "Reservations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservations" ADD CONSTRAINT "Reservations_guest_id_fkey" FOREIGN KEY ("guest_id") REFERENCES "Guests"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservations" ADD CONSTRAINT "Reservations_flight_id_fkey" FOREIGN KEY ("flight_id") REFERENCES "Flights"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservations" ADD CONSTRAINT "Reservations_payment_method_id_fkey" FOREIGN KEY ("payment_method_id") REFERENCES "PaymentMethod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservations" ADD CONSTRAINT "Reservations_payment_status_id_fkey" FOREIGN KEY ("payment_status_id") REFERENCES "PaymentStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Empty_seats" ADD CONSTRAINT "Empty_seats_flight_id_fkey" FOREIGN KEY ("flight_id") REFERENCES "Flights"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
