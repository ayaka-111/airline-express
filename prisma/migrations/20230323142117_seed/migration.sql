/*
  Warnings:

  - You are about to drop the `PaymentMethod` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PaymentStatus` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Reservations" DROP CONSTRAINT "Reservations_payment_method_id_fkey";

-- DropForeignKey
ALTER TABLE "Reservations" DROP CONSTRAINT "Reservations_payment_status_id_fkey";

-- DropTable
DROP TABLE "PaymentMethod";

-- DropTable
DROP TABLE "PaymentStatus";

-- CreateTable
CREATE TABLE "Payment_method" (
    "id" INTEGER NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Payment_method_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment_status" (
    "id" INTEGER NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Payment_status_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reservations" ADD CONSTRAINT "Reservations_payment_method_id_fkey" FOREIGN KEY ("payment_method_id") REFERENCES "Payment_method"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservations" ADD CONSTRAINT "Reservations_payment_status_id_fkey" FOREIGN KEY ("payment_status_id") REFERENCES "Payment_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
