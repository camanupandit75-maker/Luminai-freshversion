-- Create schema_migrations table for tracking migrations
CREATE TABLE IF NOT EXISTS "public"."schema_migrations" (
    "version" TEXT PRIMARY KEY,
    "description" TEXT NOT NULL,
    "applied_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert the initial migration record if it doesn't exist
INSERT INTO "public"."schema_migrations" ("version", "description", "applied_at") 
VALUES ('20240830_001', 'Initial extraction pipeline schema', '2025-08-30 05:24:53.686177')
ON CONFLICT ("version") DO NOTHING;
