import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,249,239,0.95),_transparent_35%),linear-gradient(180deg,_#f7efe7_0%,_#fbf6f0_30%,_#fffdf9_100%)] text-foreground">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-10 sm:px-8 lg:px-10">
        <Header />

        <section className="grid gap-10 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center" id="packages">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-foreground/70">Venue highlights</p>
            <h2 className="text-3xl font-semibold text-accent-strong sm:text-4xl">A wedding venue designed for unforgettable moments.</h2>
            <p className="max-w-2xl text-lg leading-8 text-foreground/80">
              From outdoor ceremonies on the lawn to intimate dinners in the barn, every detail is curated to make your day feel seamless and special.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <article className="rounded-[28px] bg-white p-8 shadow-sm shadow-black/5">
              <p className="text-sm uppercase tracking-[0.35em] text-foreground/70">Ceremonies</p>
              <h3 className="mt-4 text-2xl font-semibold text-accent-strong">Meadow vows</h3>
              <p className="mt-4 text-foreground/80">Say “I do” in a pastoral setting beneath open skies and heritage trees.</p>
            </article>
            <article className="rounded-[28px] bg-white p-8 shadow-sm shadow-black/5">
              <p className="text-sm uppercase tracking-[0.35em] text-foreground/70">Reception</p>
              <h3 className="mt-4 text-2xl font-semibold text-accent-strong">Barn dining</h3>
              <p className="mt-4 text-foreground/80">Enjoy a rustic reception with warm lighting, long tables, and farm-inspired menus.</p>
            </article>
            <article className="rounded-[28px] bg-white p-8 shadow-sm shadow-black/5">
              <p className="text-sm uppercase tracking-[0.35em] text-foreground/70">Private stays</p>
              <h3 className="mt-4 text-2xl font-semibold text-accent-strong">Weekend retreats</h3>
              <p className="mt-4 text-foreground/80">Offer guests peaceful countryside accommodation close to the venue.</p>
            </article>
            <article className="rounded-[28px] bg-white p-8 shadow-sm shadow-black/5">
              <p className="text-sm uppercase tracking-[0.35em] text-foreground/70">Tailored service</p>
              <h3 className="mt-4 text-2xl font-semibold text-accent-strong">Personal planning</h3>
              <p className="mt-4 text-foreground/80">We support every detail from styling to dining so your event feels effortless.</p>
            </article>
          </div>
        </section>

        <section className="grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center" id="about">
          <div className="space-y-4 rounded-[32px] bg-white/90 p-10 shadow-[0_32px_80px_-50px_rgba(47,35,22,0.18)]">
            <p className="text-sm uppercase tracking-[0.35em] text-foreground/70">Everything you need</p>
            <h2 className="text-3xl font-semibold text-accent-strong sm:text-4xl">All the essentials for a memorable wedding weekend.</h2>
            <p className="max-w-2xl text-lg leading-8 text-foreground/80">
              Enjoy a venue with beautiful indoor and outdoor spaces, artisan details, and thoughtful experiences for you and your guests.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] bg-white p-6 shadow-sm shadow-black/5">
              <p className="text-sm uppercase tracking-[0.35em] text-foreground/70">Luxury accommodation</p>
            </div>
            <div className="rounded-[24px] bg-white p-6 shadow-sm shadow-black/5">
              <p className="text-sm uppercase tracking-[0.35em] text-foreground/70">Artisan craftsmanship</p>
            </div>
            <div className="rounded-[24px] bg-white p-6 shadow-sm shadow-black/5">
              <p className="text-sm uppercase tracking-[0.35em] text-foreground/70">Tailored experiences</p>
            </div>
            <div className="rounded-[24px] bg-white p-6 shadow-sm shadow-black/5">
              <p className="text-sm uppercase tracking-[0.35em] text-foreground/70">Private dining</p>
            </div>
          </div>
        </section>

        <section className="mt-auto rounded-[32px] bg-surface p-10 shadow-[0_32px_80px_-50px_rgba(47,35,22,0.18)]">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-foreground/70">Plan your day</p>
              <h2 className="mt-4 text-3xl font-semibold text-accent-strong sm:text-4xl">Bring your wedding vision to life in a peaceful farm setting.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-foreground/80">
                With dedicated event support, scenic spaces, and warm hospitality, Foxstone Farm delivers a wedding experience that feels both luxurious and genuine.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] bg-white p-6 shadow-sm shadow-black/5">
                <p className="text-sm uppercase tracking-[0.35em] text-foreground/70">Farm-to-table dining</p>
              </div>
              <div className="rounded-[24px] bg-white p-6 shadow-sm shadow-black/5">
                <p className="text-sm uppercase tracking-[0.35em] text-foreground/70">Dedicated venue hire</p>
              </div>
              <div className="rounded-[24px] bg-white p-6 shadow-sm shadow-black/5">
                <p className="text-sm uppercase tracking-[0.35em] text-foreground/70">Outdoor & indoor spaces</p>
              </div>
              <div className="rounded-[24px] bg-white p-6 shadow-sm shadow-black/5">
                <p className="text-sm uppercase tracking-[0.35em] text-foreground/70">Weekend stays available</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
