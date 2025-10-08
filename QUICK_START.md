# ⚡ LuminIQ Quick Start

## 🚀 Get Up and Running in 5 Minutes

### Step 1: Apply Migrations (2 min)
```bash
# In Supabase SQL Editor, run:
CREATE EXTENSION IF NOT EXISTS vector;
CREATE EXTENSION IF NOT EXISTS pg_trgm;

# Then apply all 8 migration files in order (001-008)
```

### Step 2: Enable Auth (1 min)
1. Supabase Dashboard → **Authentication** → **Providers**
2. Enable **Email** ✅

### Step 3: Set RLS Policies (1 min)
```sql
-- Run in Supabase SQL Editor:
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

ALTER TABLE ingestion_jobs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own jobs" ON ingestion_jobs FOR SELECT USING (auth.uid() = user_id);

ALTER TABLE knowledge_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own items" ON knowledge_items FOR SELECT USING (auth.uid() = created_by);
```

### Step 4: Start Dev Server (1 min)
```bash
npm run dev
```

### Step 5: Test It! (30 sec)
1. Go to `http://localhost:5173/login`
2. Create an account
3. Check your dashboard at `/dashboard`

## ✅ Done!

Your authentication system is live! 🎉

---

## 📍 Quick Links

- **Homepage**: `http://localhost:5173/`
- **Login**: `http://localhost:5173/login`
- **Dashboard**: `http://localhost:5173/dashboard`
- **Profile**: `http://localhost:5173/profile`

## 🔑 Key Files

- **Auth Config**: `src/lib/supabase.ts`
- **Auth Context**: `src/contexts/AuthContext.tsx`
- **Routes**: `src/AppRoutes.tsx`
- **Migrations**: `supabase/migrations/`

## 📚 Full Guides

- `DATABASE_SETUP.md` - Complete database guide
- `AUTH_SETUP_GUIDE.md` - Authentication details
- `INSTALLATION_SUMMARY.md` - Full overview

## 🆘 Troubleshooting

**Issue**: "Missing environment variables"
**Fix**: Check `.env` has `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`

**Issue**: Can't login
**Fix**: Ensure migrations are applied and email provider is enabled

**Issue**: Profile not loading
**Fix**: Check RLS policies are set up correctly

---

**Need more help?** See `AUTH_SETUP_GUIDE.md` 📖
