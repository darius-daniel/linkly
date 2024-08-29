/*
  Warnings:

  - You are about to drop the column `creatorId` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the column `originalLink` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the column `shortLink` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[short_link]` on the table `Link` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `creator_id` to the `Link` table without a default value. This is not possible if the table is not empty.
  - Added the required column `original_link` to the `Link` table without a default value. This is not possible if the table is not empty.
  - Added the required column `short_link` to the `Link` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_creatorId_fkey";

-- DropIndex
DROP INDEX "Link_shortLink_key";

-- AlterTable
ALTER TABLE "Link" DROP COLUMN "creatorId",
DROP COLUMN "originalLink",
DROP COLUMN "shortLink",
ADD COLUMN     "creator_id" TEXT NOT NULL,
ADD COLUMN     "original_link" TEXT NOT NULL,
ADD COLUMN     "short_link" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "emailVerified",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email_verified" TIMESTAMP(3),
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Link_short_link_key" ON "Link"("short_link");

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
