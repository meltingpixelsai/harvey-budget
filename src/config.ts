export const config = {
  port: parseInt(process.env.PORT || "8405", 10),

  // Supabase (shared RugSlayer/CORTEX project)
  supabase: {
    url: process.env.SUPABASE_URL || "",
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || "",
  },

  // x402 payment config
  payment: {
    wallet: process.env.PAYMENT_WALLET || "2MB8Gk4PebwhP6yaiiMjofHYoQvvQ8iWo3hdkUHQ1Wdq",
    facilitator: process.env.X402_FACILITATOR || "https://facilitator.payai.network",
    network: "solana" as const,
    currency: "USDC",
  },

  // Tool pricing (in USD)
  pricing: {
    check_spend: 0.001,
    report_spend: 0.001,
    get_spending_report: 0.005,
  },
} as const;
