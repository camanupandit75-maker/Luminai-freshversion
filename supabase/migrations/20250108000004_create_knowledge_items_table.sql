-- Create knowledge_items table
CREATE TABLE IF NOT EXISTS "public"."knowledge_items" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "problem" TEXT NOT NULL,
    "solution" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "tags" TEXT[], -- Array of tags
    "created_by" UUID NOT NULL,
    "views" INTEGER DEFAULT 0,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "problem_id" UUID,
    "solution_id" UUID,
    "confidence" DECIMAL(3,2), -- For confidence scores like 0.85
    "source_type" TEXT DEFAULT 'manual'
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_knowledge_items_created_by ON "public"."knowledge_items" ("created_by");
CREATE INDEX IF NOT EXISTS idx_knowledge_items_category ON "public"."knowledge_items" ("category");
CREATE INDEX IF NOT EXISTS idx_knowledge_items_source_type ON "public"."knowledge_items" ("source_type");
CREATE INDEX IF NOT EXISTS idx_knowledge_items_tags ON "public"."knowledge_items" USING GIN ("tags");
CREATE INDEX IF NOT EXISTS idx_knowledge_items_created_at ON "public"."knowledge_items" ("created_at");

-- Create updated_at trigger
CREATE TRIGGER update_knowledge_items_updated_at BEFORE UPDATE ON "public"."knowledge_items" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
