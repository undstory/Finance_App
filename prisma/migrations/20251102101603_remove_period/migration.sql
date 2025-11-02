/*
  Warnings:

  - You are about to drop the column `period` on the `Budget` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[accountId,category]` on the table `Budget` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."Budget_accountId_category_period_key";

-- AlterTable
ALTER TABLE "Budget" DROP COLUMN "period";

-- CreateIndex
CREATE UNIQUE INDEX "Budget_accountId_category_key" ON "Budget"("accountId", "category");
