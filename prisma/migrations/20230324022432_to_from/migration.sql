/*
  Warnings:

  - Added the required column `flight_date` to the `Empty_seats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `from` to the `Flights` table without a default value. This is not possible if the table is not empty.
  - Added the required column `to` to the `Flights` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Empty_seats" ADD COLUMN     "flight_date" DATE NOT NULL;

-- AlterTable
ALTER TABLE "Flights" ADD COLUMN     "from" TEXT NOT NULL,
ADD COLUMN     "to" TEXT NOT NULL;
