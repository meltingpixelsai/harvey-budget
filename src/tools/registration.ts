import { getSupabase } from "../lib/supabase-client.js";

interface RegisterInput {
  agent_id: string;
  daily_limit_usd: number;
  weekly_limit_usd: number;
  category_limits?: Record<string, number>;
}

interface RegisterResult {
  agent_id: string;
  daily_limit_usd: number;
  weekly_limit_usd: number;
  category_limits: Record<string, number>;
  registered: boolean;
}

/** Register an agent with budget limits. Upserts if already exists. */
export async function registerAgent(input: RegisterInput): Promise<RegisterResult> {
  const sb = getSupabase();

  const { error } = await sb.from("agent_budgets").upsert(
    {
      agent_id: input.agent_id,
      daily_limit_usd: input.daily_limit_usd,
      weekly_limit_usd: input.weekly_limit_usd,
      category_limits: input.category_limits || {},
      updated_at: new Date().toISOString(),
    },
    { onConflict: "agent_id" }
  );

  if (error) throw new Error(`Registration failed: ${error.message}`);

  return {
    agent_id: input.agent_id,
    daily_limit_usd: input.daily_limit_usd,
    weekly_limit_usd: input.weekly_limit_usd,
    category_limits: input.category_limits || {},
    registered: true,
  };
}
