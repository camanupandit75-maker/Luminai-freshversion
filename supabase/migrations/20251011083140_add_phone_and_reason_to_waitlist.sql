/*
  # Add phone and reason fields to waitlist table

  1. Changes
    - Add `phone` column to store user's phone number
    - Add `reason` column to store why user wants to join
  
  2. Notes
    - Both fields are optional (nullable)
    - Uses IF NOT EXISTS to prevent errors if columns already exist
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'waitlist' AND column_name = 'phone'
  ) THEN
    ALTER TABLE waitlist ADD COLUMN phone text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'waitlist' AND column_name = 'reason'
  ) THEN
    ALTER TABLE waitlist ADD COLUMN reason text;
  END IF;
END $$;
