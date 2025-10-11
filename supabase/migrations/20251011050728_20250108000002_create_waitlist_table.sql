-- Create waitlist table
CREATE TABLE IF NOT EXISTS "public"."waitlist" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "company" TEXT,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON "public"."waitlist" ("email");
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON "public"."waitlist" ("created_at");

-- Create updated_at trigger
CREATE TRIGGER update_waitlist_updated_at BEFORE UPDATE ON "public"."waitlist" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();