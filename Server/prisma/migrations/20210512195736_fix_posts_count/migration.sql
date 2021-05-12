/*
  Warnings:

  - You are about to drop the column `postsCount` on the `Tags` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tags" DROP COLUMN "postsCount",
ADD COLUMN     "postsThisweek" INTEGER NOT NULL DEFAULT 0;
