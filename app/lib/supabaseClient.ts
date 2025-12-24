import { createClient } from "@supabase/supabase-js";

export type LeadInput = {
  fullName: string;
  phone: string;
  email?: string;
  clinicName?: string;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

// Only create client if env exists (so dev can run without DB)
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

/**
 * Saves lead to Supabase if configured.
 * Otherwise returns simulated success (no DB needed yet).
 */
export async function saveLead(lead: LeadInput): Promise<{ ok: boolean; message?: string }> {
  // No DB configured => simulate success
  if (!supabase) {
    console.log("[Lead - simulated]", lead);
    await new Promise((r) => setTimeout(r, 450));
    return { ok: true, message: "Simulated lead capture (no DB configured)." };
  }

  const { error } = await supabase.from("leads").insert([
    {
      full_name: lead.fullName,
      phone: lead.phone,
      email: lead.email ?? null,
      clinic_name: lead.clinicName ?? null,
      source: "landing"
    }
  ]);

  if (error) return { ok: false, message: error.message };
  return { ok: true };
}
