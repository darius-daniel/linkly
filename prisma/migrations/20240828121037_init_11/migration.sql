/*
  Warnings:

  - Added the required column `kinde_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Link" ALTER COLUMN "clicks" DROP DEFAULT;
DROP SEQUENCE "Link_clicks_seq";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "kinde_id" TEXT NOT NULL;
