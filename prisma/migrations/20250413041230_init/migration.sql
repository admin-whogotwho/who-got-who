-- CreateEnum
CREATE TYPE "CategoryTypes" AS ENUM ('saas', 'amazon', 'youtube', 'instagram', 'mobileapps', 'domains', 'others');

-- CreateEnum
CREATE TYPE "MonetizationType" AS ENUM ('advertisement', 'sponsorship', 'platform', 'none');

-- CreateEnum
CREATE TYPE "ProductAgeUnit" AS ENUM ('months', 'years');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "smallDescription" TEXT NOT NULL,
    "description" JSONB NOT NULL,
    "images" TEXT[],
    "productFile" TEXT NOT NULL,
    "category" "CategoryTypes" NOT NULL,
    "monetization" "MonetizationType" NOT NULL,
    "productAgeValue" INTEGER NOT NULL,
    "productAgeUnit" "ProductAgeUnit" NOT NULL,
    "revenueValue" DOUBLE PRECISION NOT NULL,
    "revenueUnit" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
