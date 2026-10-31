-- CreateEnum
CREATE TYPE "NewsTag" AS ENUM ('news', 'guest_lecture', 'practices', 'student_science_preschool', 'extracurricular', 'academic_mobility', 'accreditation', 'student_science_physical', 'entrants', 'zdzn_flow', 'dual', 'lego', 'pride', 'vacancies', 'war');

-- CreateEnum
CREATE TYPE "NewsStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- CreateTable
CREATE TABLE "News" (
    "id" TEXT NOT NULL,
    "slug" TEXT,
    "title" TEXT,
    "content" JSONB NOT NULL,
    "sourceUrl" TEXT,
    "status" "NewsStatus" NOT NULL DEFAULT 'DRAFT',
    "tags" "NewsTag"[] DEFAULT ARRAY[]::"NewsTag"[],
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "News_slug_key" ON "News"("slug");

-- CreateIndex
CREATE INDEX "News_status_createdAt_idx" ON "News"("status", "createdAt");
