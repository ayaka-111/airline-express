/*
  Warnings:

  - You are about to drop the column `created_at` on the `Reservations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Reservations" DROP COLUMN "created_at",
ADD COLUMN     "appointment_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
