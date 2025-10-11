-- Create extracted_problems table
CREATE TABLE IF NOT EXISTS "public"."extracted_problems" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "ingestion_job_id" UUID NOT NULL,
    "problem_statement" TEXT NOT NULL,
    "problem_message_ids" TEXT[], -- Array of message IDs
    "reported_by" TEXT,
    "problem_date" TIMESTAMP WITH TIME ZONE,
    "context" JSONB DEFAULT '{}',
    "confidence" DECIMAL(3,2) NOT NULL, -- Confidence score
    "review_status" TEXT DEFAULT 'pending',
    "reviewed_by" UUID,
    "reviewed_at" TIMESTAMP WITH TIME ZONE,
    "review_notes" TEXT,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "search_vector" TSVECTOR
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_extracted_problems_ingestion_job_id ON "public"."extracted_problems" ("ingestion_job_id");
CREATE INDEX IF NOT EXISTS idx_extracted_problems_review_status ON "public"."extracted_problems" ("review_status");
CREATE INDEX IF NOT EXISTS idx_extracted_problems_confidence ON "public"."extracted_problems" ("confidence");
CREATE INDEX IF NOT EXISTS idx_extracted_problems_created_at ON "public"."extracted_problems" ("created_at");
CREATE INDEX IF NOT EXISTS idx_extracted_problems_search_vector ON "public"."extracted_problems" USING GIN ("search_vector");

-- Create updated_at trigger
CREATE TRIGGER update_extracted_problems_updated_at BEFORE UPDATE ON "public"."extracted_problems" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Add foreign key constraint
ALTER TABLE "public"."extracted_problems" 
ADD CONSTRAINT fk_extracted_problems_ingestion_job_id 
FOREIGN KEY ("ingestion_job_id") REFERENCES "public"."ingestion_jobs"("id") ON DELETE CASCADE;