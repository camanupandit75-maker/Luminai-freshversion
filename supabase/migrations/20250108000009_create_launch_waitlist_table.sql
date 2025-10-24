-- Supabase SQL Schema for Launch Waitlist
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS launch_waitlist (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    position INTEGER,
    status VARCHAR(50) DEFAULT 'waiting' CHECK (status IN ('waiting', 'approved', 'notified')),
    referral_code VARCHAR(50) UNIQUE,
    referred_by UUID REFERENCES launch_waitlist(id),
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    notified_at TIMESTAMP WITH TIME ZONE,
    approved_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX IF NOT EXISTS idx_waitlist_email ON launch_waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_position ON launch_waitlist(position);
CREATE INDEX IF NOT EXISTS idx_waitlist_status ON launch_waitlist(status);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON launch_waitlist(created_at);
CREATE INDEX IF NOT EXISTS idx_waitlist_referral_code ON launch_waitlist(referral_code);

ALTER TABLE launch_waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join the waitlist"
    ON launch_waitlist FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Users can view their own waitlist entry"
    ON launch_waitlist FOR SELECT
    USING (true);

CREATE OR REPLACE FUNCTION assign_waitlist_position()
RETURNS TRIGGER AS $$
BEGIN
    SELECT COALESCE(MAX(position), 0) + 1 INTO NEW.position
    FROM launch_waitlist;
    NEW.referral_code := LOWER(SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 8));
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_waitlist_position ON launch_waitlist;
CREATE TRIGGER set_waitlist_position
    BEFORE INSERT ON launch_waitlist
    FOR EACH ROW
    EXECUTE FUNCTION assign_waitlist_position();
