-- CreateTable
CREATE TABLE "Guest" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "first_name" VARCHAR(15) NOT NULL,
    "last_name" VARCHAR(15) NOT NULL,
    "gender" TEXT NOT NULL,
    "date_of_birth" DATE NOT NULL,
    "phone" CHAR(11) NOT NULL,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentMethod" (
    "id" INTEGER NOT NULL,
    "code" INTEGER NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "PaymentMethod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentStatus" (
    "id" INTEGER NOT NULL,
    "code" INTEGER NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "PaymentStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Empty_seat" (
    "id" SERIAL NOT NULL,
    "flight_id" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    "reserved_seat" INTEGER NOT NULL,

    CONSTRAINT "Empty_seat_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Empty_seat" ADD CONSTRAINT "Empty_seat_flight_id_fkey" FOREIGN KEY ("flight_id") REFERENCES "Flights"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
