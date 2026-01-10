// =============================
// app/pricing/page.tsx
// =============================
'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, FileText } from "lucide-react";
import { motion } from "framer-motion";

type Plan = {
  name: string;
  blurb: string;
  featured?: boolean;
  priceCents?: number;
  period?: "/mo" | "/yr";
  priceNote?: string;
  cta: { label: string; href: string };
  features: string[];
};

const currency = (cents: number) =>
  new Intl.NumberFormat(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(
    cents / 100
  );

const plans: Readonly<Plan[]> = [
  {
    name: "Basic",
    blurb: "For solo founders testing the waters.",
    priceCents: 4900,
    period: "/mo",
    priceNote: "Good for starters",
    cta: { label: "Choose Basic", href: "/contact?plan=Basic" },
    features: [
      "1 active request in queue",
      "2–3 day average turnaround",
      "Email & chat support",
      "Access to core components & templates",
      "Up to 5 brand presets",
    ],
  },
  {
    name: "Platinum",
    blurb: "Best for teams that need speed and polish.",
    featured: true,
    priceCents: 19900,
    period: "/mo",
    priceNote: "Most popular",
    cta: { label: "Choose Platinum", href: "/contact?plan=Platinum" },
    features: [
      "2 active requests in parallel",
      "24–48h average turnaround",
      "Priority Slack/DM support",
      "Design systems & tokens",
      "Unlimited brand presets",
      "Monthly strategy review call",
    ],
  },
  {
    name: "Premium",
    blurb: "Priority access with white‑glove service.",
    priceNote: "Contact for pricing",
    cta: { label: "Talk to sales", href: "/contact?plan=Premium" },
    features: [
      "Dedicated design lead",
      "Same‑week delivery (when feasible)",
      "Private roadmap & Slack channel",
      "Custom integrations & SSO",
      "Quarterly executive review",
      "MSA & security review support",
    ],
  },
] as const;

const renewals = [
  { icon: CreditCard, text: "Automatic card payments" },
  { icon: FileText, text: "Manual invoice approval" },
] as const;

export default function PricingPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/10 to-sky-500/10 blur-3xl" />
      </div>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Plans that scale with you</h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">Pick a plan and start shipping stronger design, faster.</p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan, idx) => {
            const isContactSales = plan.priceCents == null;
            const priceLabel = isContactSales
              ? plan.priceNote ?? "Contact for pricing"
              : `${currency(plan.priceCents!)}${plan.period ?? ""}`;
            return (
              <motion.div key={plan.name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.05 * idx }} whileHover={{ y: -4, scale: 1.01 }}>
                <Card className={`group relative flex h-full flex-col justify-between border-2 transition-shadow hover:shadow-2xl ${plan.featured ? "border-primary shadow-lg" : "border-border"}`}>
                  {/* animated gradient border */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

                  <CardHeader>
                    <div className="flex items-center justify-between gap-3">
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      {plan.priceNote && <Badge className="rounded-full">{plan.priceNote}</Badge>}
                    </div>
                    <p className={plan.featured ? "text-sm font-medium text-primary" : "text-sm text-muted-foreground"}>{plan.blurb}</p>
                  </CardHeader>

                  <CardContent>
                    <div className="mb-5 text-3xl font-bold leading-none">{priceLabel}</div>

                    <p className="mb-2 text-sm font-medium">What’s included</p>
                    <ul className="space-y-3">
                      {plan.features.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check aria-hidden className="mt-1 h-5 w-5 flex-none" />
                          <span className="text-sm leading-6">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 rounded-xl border bg-muted/30 p-4">
                      <p className="mb-2 text-sm font-medium">Renewal</p>
                      <ul className="space-y-2">
                        {renewals.map(({ icon: Icon, text }) => (
                          <li key={text} className="flex items-center gap-3 text-sm">
                            <Icon aria-hidden className="h-4 w-4" />
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="mt-auto flex items-center justify-between gap-3">
                    <div className="text-sm text-muted-foreground">{isContactSales ? plan.priceNote : priceLabel}</div>
                    <Button asChild size="lg" className="bg-gradient-to-r from-fuchsia-600 to-sky-600 hover:from-fuchsia-700 hover:to-sky-700">
                      <a href="/Contact">{plan.cta.label}</a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mx-auto mt-10 max-w-3xl text-center text-sm text-muted-foreground">
          <p>“Unlimited requests” means you can queue as many tasks as you like; we work through them one at a time. Revisions are included at no extra cost.</p>
        </motion.div>
      </section>
    </div>
  );
}