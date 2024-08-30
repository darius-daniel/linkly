/*
  Warnings:

  - You are about to drop the column `created_at` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the column `creator_id` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the column `original_link` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the column `short_link` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the column `family_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `given_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `kinde_id` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[shortLink]` on the table `Link` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `creatorId` to the `Link` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originalLink` to the `Link` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shortLink` to the `Link` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Link` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kindeId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_creator_id_fkey";

-- DropIndex
DROP INDEX "Link_short_link_key";

-- AlterTable
ALTER TABLE "Link" DROP COLUMN "created_at",
DROP COLUMN "creator_id",
DROP COLUMN "original_link",
DROP COLUMN "short_link",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "creatorId" TEXT NOT NULL,
ADD COLUMN     "originalLink" TEXT NOT NULL,
ADD COLUMN     "shortLink" TEXT NOT NULL,
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

-- CreateIndex
CREATE UNIQUE INDEX "Link_shortLink_key" ON "Link"("shortLink");

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
