-- AlterTable
ALTER TABLE "Reservations" ALTER COLUMN "appointment_date" DROP DEFAULT,
ALTER COLUMN "appointment_date" SET DATA TYPE DATE;
