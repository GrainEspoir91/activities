import {
  supabase
} from "./supabase.client.js";

export async function fetchPastActivities() {
  const {
    data,
    error
  } = await supabase
    .from("activities")
    .select(`
      id,
      code,
      activity_type,
      title,
      description,
      start_at,
      end_at,
      location_name,
      address,
      city,
      postal_code,
      image_url,
      metadata
    `)
    .eq(
      "status",
      "PAST"
    )
    .eq(
      "visibility",
      "PUBLIC"
    )
    .eq(
      "is_active",
      true
    )
    .lt(
      "start_at",
      new Date().toISOString()
    )
    .order(
      "start_at",
      {
        ascending: false
      }
    );

  if (error) {
    throw error;
  }

  return data || [];
}
