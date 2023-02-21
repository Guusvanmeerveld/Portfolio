-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "remoteAddress" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
