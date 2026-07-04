"use client";

import * as Dialog from "@radix-ui/react-dialog";
import type { FormEvent } from "react";

export default function Header() {
  const handleRequestSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.alert("Thank you! We will contact you about availability soon.");
  };

  return (
    <section className="grid gap-8 pb-12 text-center sm:pb-16 sm:text-left lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center justify-center gap-3 rounded-full border border-black/5 bg-white/90 px-5 py-2 text-xs uppercase tracking-[0.35em] text-muted sm:justify-start">
          Stay • Dine • Explore • Say “I Do”
        </div>
        <h1 className="text-4xl font-semibold leading-tight text-accent-strong sm:text-5xl">
          Your dream wedding set in a timeless farm retreat.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-foreground/80">
          Foxstone Farm offers a private, beautifully restored countryside venue where weddings unfold among sunlit paddocks, oak barns, and warm farm hospitality.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white shadow-sm shadow-accent/25 transition hover:bg-accent-strong"
              >
                Book your date
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
              <Dialog.Content className="fixed left-1/2 top-1/2 w-[min(90vw,540px)] -translate-x-1/2 -translate-y-1/2 rounded-[32px] bg-white p-8 shadow-[0_35px_90px_-45px_rgba(47,35,22,0.45)] focus:outline-none">
                <Dialog.Title className="text-2xl font-semibold text-accent-strong">Book your wedding date</Dialog.Title>
                <Dialog.Description className="mt-3 text-sm leading-6 text-foreground/70">
                  Send us a few details and we’ll reach out with availability and planning support.
                </Dialog.Description>
                <form className="mt-8 grid gap-4" onSubmit={handleRequestSubmit}>
                  <label className="grid gap-2 text-sm text-foreground/80">
                    Name
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      className="rounded-2xl border border-black/10 bg-surface px-4 py-3 text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </label>
                  <label className="grid gap-2 text-sm text-foreground/80">
                    Email
                    <input
                      required
                      type="email"
                      placeholder="you@example.com"
                      className="rounded-2xl border border-black/10 bg-surface px-4 py-3 text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </label>
                  <label className="grid gap-2 text-sm text-foreground/80">
                    Wedding date
                    <input
                      required
                      type="date"
                      className="rounded-2xl border border-black/10 bg-surface px-4 py-3 text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </label>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-end">
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-black/5"
                      >
                        Cancel
                      </button>
                    </Dialog.Close>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-accent/25 transition hover:bg-accent-strong"
                    >
                      Submit request
                    </button>
                  </div>
                </form>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-foreground/50 transition hover:text-foreground"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full border border-accent px-5 py-3 text-sm font-semibold text-accent-strong transition hover:bg-accent/10"
          >
            Discover more
          </a>
        </div>
      </div>

      <div className="rounded-[32px] border border-black/5 bg-surface p-8 shadow-[0_32px_80px_-50px_rgba(47,35,22,0.18)]">
        <p className="text-sm uppercase tracking-[0.35em] text-foreground/70">Featured experience</p>
        <h2 className="mt-4 text-2xl font-semibold text-accent-strong">Private barn celebration</h2>
        <p className="mt-4 text-foreground/80">
          Celebrate your reception in a restored oak barn with candlelit tables, soft linens, and farm-to-table cuisine.
        </p>
        <div className="mt-6 grid gap-3 text-sm text-foreground/70 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-4 shadow-sm shadow-black/5">Up to 120 guests</div>
          <div className="rounded-2xl bg-white p-4 shadow-sm shadow-black/5">Curated catering</div>
        </div>
      </div>
    </section>
  );
}
