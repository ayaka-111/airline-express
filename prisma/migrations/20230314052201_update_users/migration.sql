/*
  Warnings:

  - You are about to drop the column `address` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `nationality` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `prefecture` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `zip_code` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "address",
DROP COLUMN "city",
DROP COLUMN "nationality",
DROP COLUMN "prefecture",
DROP COLUMN "zip_code";
