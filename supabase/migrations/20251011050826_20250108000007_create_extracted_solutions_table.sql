-- Create extracted_solutions table
CREATE TABLE IF NOT EXISTS "public"."extracted_solutions" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "problem_id" UUID NOT NULL,
    "summary" TEXT NOT NULL,
    "steps" TEXT[], -- Array of solution steps
    "provided_by" TEXT,
    "solution_message_ids" TEXT[], -- Array of message IDs
    "solution_date" TIMESTAMP WITH TIME ZONE,
    "confidence" DECIMAL(3,2) NOT NULL, -- Confidence score
    "success_metrics" JSONB DEFAULT '{}',
    "alternatives" TEXT[] DEFAULT '{}', -- Array of alternative solutions
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "search_vector" TSVECTOR
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_extracted_solutions_problem_id ON "public"."extracted_solutions" ("problem_id");
CREATE INDEX IF NOT EXISTS idx_extracted_solutions_confidence ON "public"."extracted_solutions" ("confidence");
CREATE INDEX IF NOT EXISTS idx_extracted_solutions_created_at ON "public"."extracted_solutions" ("created_at");
CREATE INDEX IF NOT EXISTS idx_extracted_solutions_search_vector ON "public"."extracted_solutions" USING GIN ("search_vector");

-- Create updated_at trigger
CREATE TRIGGER update_extracted_solutions_updated_at BEFORE UPDATE ON "public"."extracted_solutions" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Add foreign key constraint
ALTER TABLE "public"."extracted_solutions" 
ADD CONSTRAINT fk_extracted_solutions_problem_id 
FOREIGN KEY ("problem_id") REFERENCES "public"."extracted_problems"("id") ON DELETE CASCADE;