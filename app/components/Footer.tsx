export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 pt-6 text-sm text-foreground/70">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>Foxstone Farm — a private wedding destination in the countryside.</p>
        <a href="mailto:info@foxstonefarm.com" className="font-semibold text-accent-strong hover:text-accent">
          info@foxstonefarm.com
        </a>
      </div>
    </footer>
  );
}
