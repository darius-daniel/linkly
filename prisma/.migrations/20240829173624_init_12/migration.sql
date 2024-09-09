/*
  Warnings:

  - You are about to drop the column `created_at` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the column `family_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `given_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `kinde_id` on the `User` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Link` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kindeId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Link" DROP COLUMN "created_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "family_name",
DROP COLUMN "given_name",
DROP COLUMN "kinde_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "familyName" TEXT,
ADD COLUMN     "givenName" TEXT,
ADD COLUMN     "kindeId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
