/*
  Warnings:

  - You are about to drop the column `family_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `given_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `picture` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `usr_city` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `usr_industry` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `usr_job_title` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `usr_middle_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `usr_postcode` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `usr_salutation` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `usr_state_region` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `usr_street_address` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `usr_street_address_2` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "family_name",
DROP COLUMN "given_name",
DROP COLUMN "phone_number",
DROP COLUMN "picture",
DROP COLUMN "username",
DROP COLUMN "usr_city",
DROP COLUMN "usr_industry",
DROP COLUMN "usr_job_title",
DROP COLUMN "usr_middle_name",
DROP COLUMN "usr_postcode",
DROP COLUMN "usr_salutation",
DROP COLUMN "usr_state_region",
DROP COLUMN "usr_street_address",
DROP COLUMN "usr_street_address_2",
ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "first_name" TEXT,
ADD COLUMN     "last_name" TEXT;
