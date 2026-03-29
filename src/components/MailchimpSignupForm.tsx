"use client";

import { useState } from "react";

interface Props {
  variant?: "hero" | "inline";
}

export function MailchimpSignupForm({ variant = "inline" }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setMessage("You're in! Check your inbox for a welcome email.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (variant === "hero") {
    return (
      <section className="bg-brand-50 border-y border-brand-100 py-12 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Get the Best Home Improvement Tips
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Join Home Improvement Insiders — free buying guides, tool reviews, and
            seasonal picks delivered straight to your inbox.
          </p>
          {status === "success" ? (
            <p className="text-green-700 font-medium bg-green-50 border border-green-200 rounded-lg px-4 py-3">
              {message}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-brand-600 text-white font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-brand-700 transition-colors disabled:opacity-60 whitespace-nowrap"
              >
                {status === "loading" ? "Subscribing…" : "Get Free Tips"}
              </button>
            </form>
          )}
          {status === "error" && (
            <p className="mt-3 text-red-600 text-sm">{message}</p>
          )}
          <p className="mt-3 text-xs text-gray-400">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>
    );
  }

  // inline variant (used inside articles)
  return (
    <section className="my-10 rounded-xl bg-brand-50 border border-brand-100 px-6 py-8">
      <h3 className="text-lg font-bold text-gray-900 mb-1">
        Want more guides like this?
      </h3>
      <p className="text-gray-600 text-sm mb-4">
        Join Home Improvement Insiders and get our best tool reviews and buying
        guides delivered free.
      </p>
      {status === "success" ? (
        <p className="text-green-700 font-medium bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-sm">
          {message}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-brand-600 text-white font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-brand-700 transition-colors disabled:opacity-60 whitespace-nowrap"
          >
            {status === "loading" ? "Subscribing…" : "Subscribe Free"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="mt-3 text-red-600 text-sm">{message}</p>
      )}
      <p className="mt-3 text-xs text-gray-400">No spam, ever. Unsubscribe anytime.</p>
    </section>
  );
}
