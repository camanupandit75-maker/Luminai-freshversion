-- Create profiles table
CREATE TABLE IF NOT EXISTS "public"."profiles" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "email" TEXT NOT NULL UNIQUE,
    "full_name" TEXT NOT NULL,
    "avatar_url" TEXT,
    "company" TEXT,
    "role" TEXT DEFAULT 'user',
    "auth_provider" TEXT NOT NULL,
    "onboarding_completed" BOOLEAN DEFAULT FALSE,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "tier" TEXT DEFAULT 'free',
    "credits_remaining" INTEGER DEFAULT 100,
    "google_id" TEXT,
    "max_monthly_uploads" INTEGER DEFAULT 10,
    "organization_id" UUID,
    "role_in_org" TEXT DEFAULT 'member'
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_profiles_email ON "public"."profiles" ("email");
CREATE INDEX IF NOT EXISTS idx_profiles_google_id ON "public"."profiles" ("google_id");
CREATE INDEX IF NOT EXISTS idx_profiles_organization_id ON "public"."profiles" ("organization_id");
CREATE INDEX IF NOT EXISTS idx_profiles_tier ON "public"."profiles" ("tier");

-- Create updated_at trigger
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON "public"."profiles" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
