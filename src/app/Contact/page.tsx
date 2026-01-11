


// =============================
// app/contact/page.tsx
// =============================
"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Loader2, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

const SERVICES = ["UI/UX Design", "Brand Identity", "Digital Marketing", "Print Design", "Other"] as const;
const PLANS = ["Basic", "Platinum", "Premium"] as const;

type Service = typeof SERVICES[number];
type Plan = typeof PLANS[number];

import { Suspense } from "react";

function ContactForm() {
  const params = useSearchParams();
  const planFromURL = (params.get("plan") || "").trim();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [service, setService] = useState<Service | "">("");
  const [selectedPlan, setSelectedPlan] = useState<Plan | "">("");

  // Initialize defaults from URL once
  useEffect(() => {
    if (planFromURL) {
      const normalized = (planFromURL[0]?.toUpperCase() + planFromURL.slice(1).toLowerCase()) as Plan;
      if (PLANS.includes(normalized)) setSelectedPlan(normalized);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const gradient = useMemo(
    () => ({ background: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(14,165,233,0.15))" }),
    []
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      formData.append("access_key", "f91ea6dc-6fef-4530-b6b9-af672844db4b");

      // include chosen plan in the submission
      if (selectedPlan) formData.append("selected_plan", selectedPlan);

      // Honeypot
      if ((formData.get("_hp") as string)?.length) {
        setIsSubmitting(false);
        return;
      }

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(Array.from(formData))),
      });

      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);
        form.reset();
        const timer = setTimeout(() => setIsSubmitted(false), 5000);
        return () => clearTimeout(timer);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      {/* floating orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-[-8rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full blur-3xl" style={gradient} />
        <div className="absolute right-[-6rem] top-1/2 h-[22rem] w-[22rem] -translate-y-1/2 rounded-full blur-3xl" style={gradient} />
      </div>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-6 text-center">
          <Badge className="mb-2 inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-600 to-sky-600 text-white hover:from-fuchsia-700 hover:to-sky-700">
            <Sparkles className="h-4 w-4" /> Contact us
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-sky-600">Let&apos;s work together</h1>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Tell us about your project. We usually reply within one business day.</p>
        </motion.div>

        {/* Selected plan banner */}
        <AnimatePresence>
          {selectedPlan && (
            <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="mb-4 flex items-center justify-between rounded-xl border bg-gradient-to-r from-fuchsia-50 to-sky-50 p-3">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="rounded-full">Selected plan</Badge>
                <span className="font-medium">{selectedPlan}</span>
              </div>
              <button className="text-sm text-primary underline-offset-4 hover:underline" onClick={() => setSelectedPlan("")}>Change</button>
            </motion.div>
          )}
        </AnimatePresence>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Send a message</CardTitle>
          </CardHeader>
          <CardContent>
            <AnimatePresence>
              {isSubmitted && (
                <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="mb-4 flex items-start gap-3 rounded-xl border border-green-300 bg-green-50 p-3 text-green-700" role="status" aria-live="polite">
                  <CheckCircle2 className="mt-0.5 h-5 w-5" />
                  <div>
                    <p className="font-medium">Thank you! We&apos;ll be in touch soon.</p>
                    <p className="text-sm opacity-80">Your message was sent successfully.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {error && (
                <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="mb-4 flex items-start gap-3 rounded-xl border border-red-300 bg-red-50 p-3 text-red-700" role="alert">
                  <AlertCircle className="mt-0.5 h-5 w-5" />
                  <div>
                    <p className="font-medium">Something went wrong</p>
                    <p className="text-sm opacity-80">{error}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              {/* Honeypot */}
              <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" />

              {/* Plan selection (editable) */}
              <div className="grid gap-2">
                <Label htmlFor="plan">Plan (optional)</Label>
                <select
                  id="plan"
                  name="plan"
                  value={selectedPlan || ""}
                  onChange={(e) => setSelectedPlan((e.target.value || "") as Plan | "")}
                  className="w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <option value="">No plan selected</option>
                  {PLANS.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="name">Your name</Label>
                <Input id="name" name="name" placeholder="Jane Doe" required />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="jane@example.com" required />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="service">Service</Label>
                <select
                  id="service"
                  name="service"
                  value={service}
                  onChange={(e) => setService((e.target.value as Service) || "")}
                  required
                  className="w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={5} placeholder="Tell us more about your project…" required />
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <input id="consent" name="consent" type="checkbox" required className="h-3.5 w-3.5" />
                <Label htmlFor="consent" className="text-xs">I agree to the terms and to be contacted about my request.</Label>
              </div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-fuchsia-600 to-sky-600 hover:from-fuchsia-700 hover:to-sky-700" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" /> Sending…</span>
                  ) : (
                    <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> Send message</span>
                  )}
                </Button>
              </motion.div>

              <p className="text-center text-xs text-muted-foreground">We respect your privacy. No spam, ever.</p>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}
