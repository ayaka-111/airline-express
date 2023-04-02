-- DropForeignKey
ALTER TABLE "Passengers" DROP CONSTRAINT "Passengers_id_fkey";

-- AlterTable
ALTER TABLE "Passengers" ADD COLUMN     "reservation_id" TEXT;

-- AddForeignKey
ALTER TABLE "Passengers" ADD CONSTRAINT "Passengers_reservation_id_fkey" FOREIGN KEY ("reservation_id") REFERENCES "Reservations"("id") ON DELETE SET NULL ON UPDATE CASCADE;
