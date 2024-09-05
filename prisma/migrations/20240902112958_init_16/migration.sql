/*
  Warnings:

  - You are about to drop the column `kinde_id` on the `User` table. All the data in the column will be lost.
  - Added the required column `properties` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "kinde_id",
ADD COLUMN     "properties" JSONB NOT NULL;
