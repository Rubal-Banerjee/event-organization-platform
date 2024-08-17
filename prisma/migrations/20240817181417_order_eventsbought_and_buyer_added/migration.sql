-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "stripeId" TEXT NOT NULL,
    "totalAmount" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventsBought" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "eventId" INTEGER NOT NULL,

    CONSTRAINT "EventsBought_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Buyer" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "buyerId" INTEGER NOT NULL,

    CONSTRAINT "Buyer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_stripeId_key" ON "Order"("stripeId");

-- AddForeignKey
ALTER TABLE "EventsBought" ADD CONSTRAINT "EventsBought_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Buyer" ADD CONSTRAINT "Buyer_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
