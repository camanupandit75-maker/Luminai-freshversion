-- Create ingestion_jobs table
CREATE TABLE IF NOT EXISTS "public"."ingestion_jobs" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "user_id" UUID,
    "source_type" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "total_messages" INTEGER DEFAULT 0,
    "processed_messages" INTEGER DEFAULT 0,
    "file_name" TEXT,
    "file_size_bytes" BIGINT,
    "metadata" JSONB DEFAULT '{}',
    "error_message" TEXT,
    "started_at" TIMESTAMP WITH TIME ZONE,
    "completed_at" TIMESTAMP WITH TIME ZONE,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_ingestion_jobs_user_id ON "public"."ingestion_jobs" ("user_id");
CREATE INDEX IF NOT EXISTS idx_ingestion_jobs_status ON "public"."ingestion_jobs" ("status");
CREATE INDEX IF NOT EXISTS idx_ingestion_jobs_created_at ON "public"."ingestion_jobs" ("created_at");

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_ingestion_jobs_updated_at BEFORE UPDATE ON "public"."ingestion_jobs" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
