import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_DB,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);
