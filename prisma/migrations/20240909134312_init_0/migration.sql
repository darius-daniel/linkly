-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "family_name" TEXT,
    "given_name" TEXT,
    "phone_number" TEXT,
    "username" TEXT,
    "email" TEXT,
    "picture" TEXT,
    "usr_city" TEXT,
    "usr_industry" TEXT,
    "usr_job_title" TEXT,
    "usr_middle_name" TEXT,
    "usr_postcode" TEXT,
    "usr_salutation" TEXT,
    "usr_state_region" TEXT,
    "usr_street_address" TEXT,
    "usr_street_address_2" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL,
    "short_link" TEXT NOT NULL,
    "original_link" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "creator_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Link_short_link_key" ON "Link"("short_link");

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
