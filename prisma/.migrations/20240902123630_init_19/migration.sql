/*
  Warnings:

  - You are about to drop the column `properties` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "properties",
ADD COLUMN     "usr_city" TEXT,
ADD COLUMN     "usr_industry" TEXT,
ADD COLUMN     "usr_job_title" TEXT,
ADD COLUMN     "usr_middle_name" TEXT,
ADD COLUMN     "usr_postcode" TEXT,
ADD COLUMN     "usr_salutation" TEXT,
ADD COLUMN     "usr_state_region" TEXT,
ADD COLUMN     "usr_street_address" TEXT,
ADD COLUMN     "usr_street_address_2" TEXT;
