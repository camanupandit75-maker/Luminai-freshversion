-- Create raw_messages table
CREATE TABLE IF NOT EXISTS "public"."raw_messages" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "ingestion_job_id" UUID NOT NULL,
    "platform" TEXT NOT NULL,
    "message_id" TEXT,
    "author_name" TEXT,
    "author_id" TEXT,
    "text" TEXT NOT NULL,
    "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL,
    "reply_to" TEXT,
    "channel_id" TEXT,
    "channel_name" TEXT,
    "content_hash" TEXT,
    "attachments" JSONB DEFAULT '[]',
    "metadata" JSONB DEFAULT '{}',
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_raw_messages_ingestion_job_id ON "public"."raw_messages" ("ingestion_job_id");
CREATE INDEX IF NOT EXISTS idx_raw_messages_platform ON "public"."raw_messages" ("platform");
CREATE INDEX IF NOT EXISTS idx_raw_messages_timestamp ON "public"."raw_messages" ("timestamp");
CREATE INDEX IF NOT EXISTS idx_raw_messages_author_id ON "public"."raw_messages" ("author_id");
CREATE INDEX IF NOT EXISTS idx_raw_messages_channel_id ON "public"."raw_messages" ("channel_id");

-- Add foreign key constraint
ALTER TABLE "public"."raw_messages" 
ADD CONSTRAINT fk_raw_messages_ingestion_job_id 
FOREIGN KEY ("ingestion_job_id") REFERENCES "public"."ingestion_jobs"("id") ON DELETE CASCADE;
