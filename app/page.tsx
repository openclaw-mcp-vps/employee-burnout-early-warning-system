export default function Page() {
  const faqs = [
    {
      q: "Which integrations are supported?",
      a: "BurnoutRadar connects to Slack and Google Calendar. Setup takes under 5 minutes with OAuth — no IT ticket required."
    },
    {
      q: "How is the burnout risk score calculated?",
      a: "We analyze late-night message frequency, back-to-back meeting density, response time trends, and weekend activity to produce a 0–100 risk score per employee."
    },
    {
      q: "Is employee data private and secure?",
      a: "All data is aggregated and anonymized before display. Individual message content is never stored — only metadata like timestamps and response latency."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          HR Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Employee Burnout<br />
          <span className="text-[#58a6ff]">Before It Costs You</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          BurnoutRadar analyzes Slack activity, calendar density, and response times to surface burnout risk scores — so HR teams and managers can act before someone quits.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $19 / month
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 14-day trial. Cancel anytime.</p>

        {/* Signal cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {[
            { label: "Late-Night Messages", desc: "Flags spikes in after-hours Slack activity" },
            { label: "Meeting Overload", desc: "Detects back-to-back calendar blocks with no recovery time" },
            { label: "Response Decline", desc: "Tracks slowing reply times as an early disengagement signal" }
          ].map((s) => (
            <div key={s.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{s.label}</div>
              <div className="text-[#8b949e] text-sm">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#6e7681] text-sm mb-6">per month · up to 50 employees</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Slack + Google Calendar integration",
              "Real-time burnout risk dashboard",
              "Weekly digest emails to managers",
              "Anonymized team-level heatmaps",
              "Slack alerts when risk score spikes"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} BurnoutRadar. All rights reserved.
      </footer>
    </main>
  );
}
