// app/logo-demo/page.tsx  (or anywhere you want to preview)
import { Logo } from '@/components/logo';

export default function LogoDemo() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 px-12 py-20 space-y-20 text-neutral-900 dark:text-neutral-100">

      {/* ── Mark ── */}
      <Section label="Mark">
        <div className="flex items-end gap-10">
          <Logo size={24} />
          <Logo size={36} />
          <Logo size={52} />
          <Logo size={72} />
        </div>
      </Section>

      {/* ── Wordmark ── */}
      <Section label="Wordmark">
        <Logo size={36} variant="wordmark" />
      </Section>

      {/* ── Full ── */}
      <Section label="Full">
        <Logo size={44} variant="full" />
        <Logo size={44} variant="full" tagline="Full-Stack Engineer" />
      </Section>

      {/* ── In Context: Navbar ── */}
      <Section label="In Context — Navbar">
        <nav className="w-full max-w-3xl flex items-center justify-between rounded-xl border border-neutral-200 dark:border-neutral-800 px-5 py-3 bg-white/80 dark:bg-neutral-900/80 backdrop-blur">
          <Logo size={28} variant="wordmark" animated={false} />
          <div className="flex items-center gap-6 text-[13px] font-medium text-neutral-500 dark:text-neutral-400">
            <a href="#" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Work</a>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">About</a>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Contact</a>
          </div>
        </nav>
      </Section>

      {/* ── On dark surface ── */}
      <Section label="Dark Surface">
        <div className="rounded-2xl bg-neutral-900 dark:bg-neutral-100 p-10 inline-flex gap-12 items-center">
          <div className="text-neutral-100 dark:text-neutral-900">
            <Logo size={40} variant="full" />
          </div>
        </div>
      </Section>

      {/* ── Static (no animation) ── */}
      <Section label="Static — No Animation">
        <Logo size={40} variant="full" animated={false} />
      </Section>
    </div>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500">
        {label}
      </p>
      <div className="space-y-6">{children}</div>
    </section>
  );
} 