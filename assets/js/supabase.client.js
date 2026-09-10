import {
  createClient
} from "https://esm.sh/@supabase/supabase-js@2";

const config =
  window.GRAIN_ESPOIR_CONFIG;

if (
  !config?.supabaseUrl ||
  !config?.supabaseAnonKey
) {
  throw new Error(
    "Configuration Supabase absente."
  );
}

export const supabase =
  createClient(
    config.supabaseUrl,
    config.supabaseAnonKey
  );
