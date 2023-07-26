-- CreateTable
CREATE TABLE "Task"
(
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "state" TEXT NOT NULL DEFAULT 'planned',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "doneAt" DATETIME NULL,
    "done" BOOLEAN DEFAULT false
);
