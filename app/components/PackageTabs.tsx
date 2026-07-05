"use client";

import * as Tabs from "@radix-ui/react-tabs";

const packageDetails = [
  {
    value: "ceremonies",
    label: "Ceremonies",
    title: "Meadow vows",
    description: "Say “I do” in a pastoral setting beneath open skies and heritage trees.",
    highlights: ["Lawn ceremony space", "Floral arch setup"],
  },
  {
    value: "reception",
    label: "Reception",
    title: "Barn dining",
    description: "Enjoy a rustic reception with warm lighting, long tables, and farm-inspired menus.",
    highlights: ["Oak barn seating", "Gourmet farm-to-table"],
  },
  {
    value: "stays",
    label: "Stays",
    title: "Weekend retreats",
    description: "Offer guests peaceful countryside accommodation close to the venue.",
    highlights: ["Guest cottages", "Private breakfast service"],
  },
  {
    value: "planning",
    label: "Planning",
    title: "Personal planning",
    description: "We support every detail from styling to dining so your event feels effortless.",
    highlights: ["Dedicated coordinator", "Custom décor guidance"],
  },
];

export default function PackageTabs() {
  return (
    <section className="space-y-6 py-12" id="packages">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.35em] text-foreground/70">Venue highlights</p>
        <h2 className="text-3xl font-semibold text-accent-strong sm:text-4xl">A wedding venue designed for unforgettable moments.</h2>
        <p className="max-w-2xl text-lg leading-8 text-foreground/80">
          From outdoor ceremonies on the lawn to intimate dinners in the barn, every detail is curated to make your day feel seamless and special.
        </p>
      </div>

      <Tabs.Root defaultValue="ceremonies" className="space-y-10">
        <Tabs.List className="flex flex-wrap gap-3 rounded-[32px] bg-[var(--surface)]/90 p-2 shadow-sm shadow-black/5">
          {packageDetails.map((item) => (
            <Tabs.Trigger
              key={item.value}
              value={item.value}
              className="inline-flex min-w-[10rem] items-center justify-center rounded-full border border-transparent bg-surface px-5 py-3 text-sm font-semibold text-foreground/70 transition hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/30 data-[state=active]:bg-accent data-[state=active]:text-white"
            >
              {item.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {packageDetails.map((item) => (
          <Tabs.Content key={item.value} value={item.value} className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="rounded-[28px] bg-surface p-8 shadow-sm shadow-black/5">
              <p className="text-sm uppercase tracking-[0.35em] text-foreground/70">{item.label}</p>
              <h3 className="mt-4 text-2xl font-semibold text-accent-strong">{item.title}</h3>
              <p className="mt-4 text-foreground/80">{item.description}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {item.highlights.map((highlight) => (
                <div key={highlight} className="rounded-[28px] bg-surface p-8 shadow-sm shadow-black/5">
                  <p className="text-sm uppercase tracking-[0.35em] text-foreground/70">{highlight}</p>
                </div>
              ))}
            </div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </section>
  );
}
