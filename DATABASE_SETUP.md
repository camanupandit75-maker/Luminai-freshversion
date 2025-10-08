# LuminIQ Database Setup Guide

## Overview

This guide will help you set up the complete LuminIQ database schema in Supabase. The database includes tables for:

- **User Management**: `profiles`, `waitlist`
- **Data Ingestion**: `ingestion_jobs`, `raw_messages`
- **AI Processing**: `extracted_problems`, `extracted_solutions`
- **Knowledge Base**: `knowledge_items`
- **Migration Tracking**: `schema_migrations`

## Prerequisites

1. **Supabase Project**: Ensure you have a Supabase project set up
2. **Environment Variables**: Configure your `.env` file with Supabase credentials
3. **Extensions**: Enable required PostgreSQL extensions

## Required Extensions

Before running migrations, enable these extensions in your Supabase project:

```sql
-- Enable vector similarity search (for AI embeddings)
CREATE EXTENSION IF NOT EXISTS vector;

-- Enable full-text search
CREATE EXTENSION IF NOT EXISTS pg_trgm;
```

## Migration Files Created

The following migration files have been created in `supabase/migrations/`:

1. `20250108000001_create_ingestion_jobs_table.sql` - Core job tracking
2. `20250108000002_create_waitlist_table.sql` - User waitlist management
3. `20250108000003_create_profiles_table.sql` - User profiles and authentication
4. `20250108000004_create_knowledge_items_table.sql` - Knowledge base storage
5. `20250108000005_create_raw_messages_table.sql` - Raw chat/conversation data
6. `20250108000006_create_extracted_problems_table.sql` - AI-extracted problems
7. `20250108000007_create_extracted_solutions_table.sql` - AI-extracted solutions
8. `20250108000008_create_schema_migrations_table.sql` - Migration tracking

## How to Apply Migrations

### Option 1: Using Supabase CLI (Recommended)

```bash
# Install Supabase CLI if not already installed
npm install -g supabase

# Login to Supabase
supabase login

# Link your project
supabase link --project-ref YOUR_PROJECT_REF

# Apply all migrations
supabase db push
```

### Option 2: Using Supabase Dashboard

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Run each migration file in order (001 through 008)
4. Execute the extensions setup first:

```sql
-- Run this first
CREATE EXTENSION IF NOT EXISTS vector;
CREATE EXTENSION IF NOT EXISTS pg_trgm;
```

### Option 3: Using psql (Direct Database Access)

```bash
# Connect to your database
psql "postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"

# Run migrations in order
\i supabase/migrations/20250108000001_create_ingestion_jobs_table.sql
\i supabase/migrations/20250108000002_create_waitlist_table.sql
# ... continue for all files
```

## Database Schema Overview

### Core Tables

- **`ingestion_jobs`**: Tracks data processing jobs with status, progress, and metadata
- **`raw_messages`**: Stores original chat messages from various platforms
- **`extracted_problems`**: AI-extracted problem statements with confidence scores
- **`extracted_solutions`**: AI-extracted solutions with step-by-step breakdowns
- **`knowledge_items`**: Curated knowledge base with problems, solutions, and categories

### User Management

- **`profiles`**: User accounts with authentication, credits, and organization info
- **`waitlist`**: Early access signups

## Key Features

### 🔍 Full-Text Search
- Built-in search vectors for problems and solutions
- Tag-based filtering for knowledge items

### 🤖 AI Integration
- Vector embeddings for semantic similarity search
- Confidence scoring for extracted content
- JSON metadata for flexible data storage

### 📊 Performance Optimized
- Strategic indexes for common queries
- Foreign key constraints for data integrity
- Automatic timestamp tracking

### 🔄 Migration Tracking
- Version-controlled schema changes
- Rollback capabilities
- Environment synchronization

## Data Relationships

```
ingestion_jobs (1) → (many) raw_messages
ingestion_jobs (1) → (many) extracted_problems
extracted_problems (1) → (many) extracted_solutions
profiles (1) → (many) knowledge_items
```

## Next Steps

1. **Apply Migrations**: Use one of the methods above
2. **Verify Setup**: Check that all tables are created successfully
3. **Test Connections**: Ensure your application can connect to the database
4. **Seed Data**: Optionally populate with initial data
5. **Configure RLS**: Set up Row Level Security policies as needed

## Troubleshooting

### Common Issues

1. **Extension Errors**: Ensure `vector` and `pg_trgm` extensions are enabled
2. **Permission Errors**: Check that your database user has CREATE privileges
3. **Migration Conflicts**: If migrations fail, check for existing tables with same names

### Verification Queries

```sql
-- Check if all tables exist
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;

-- Check if extensions are enabled
SELECT * FROM pg_extension WHERE extname IN ('vector', 'pg_trgm');

-- Verify foreign key constraints
SELECT conname, conrelid::regclass, confrelid::regclass 
FROM pg_constraint WHERE contype = 'f';
```

## Support

If you encounter issues:
1. Check the Supabase logs in your project dashboard
2. Verify your environment variables are correct
3. Ensure all prerequisites are met
4. Review the migration files for any syntax errors

---

**Note**: This setup creates a production-ready database schema for LuminIQ's AI-powered knowledge extraction and management system.
