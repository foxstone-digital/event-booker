export default function Header() {
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
