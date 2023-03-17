/*
  Warnings:

  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(28)`.
  - You are about to alter the column `first_name` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(15)`.
  - You are about to alter the column `last_name` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(15)`.
  - You are about to alter the column `phone` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(11)`.

*/
-- AlterTable
ALTER TABLE "Users" DROP CONSTRAINT "Users_pkey",
ALTER COLUMN "id" SET DATA TYPE CHAR(28),
ALTER COLUMN "first_name" SET DATA TYPE VARCHAR(15),
ALTER COLUMN "last_name" SET DATA TYPE VARCHAR(15),
ALTER COLUMN "phone" SET DATA TYPE CHAR(11),
ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("id");
