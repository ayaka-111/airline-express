/*
  Warnings:

  - You are about to drop the column `appointment_date` on the `Reservations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Reservations" DROP COLUMN "appointment_date",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
