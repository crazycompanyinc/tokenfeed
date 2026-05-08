import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TokenFeed — Real-Time AI Token Dashboard for Dev Teams',
  description: 'Track, allocate, and optimize LLM costs across your team in real-time. Connect OpenAI, Anthropic, Gemini & more. Zero-config setup.',
  openGraph: {
    title: 'TokenFeed — Real-Time AI Token Dashboard for Dev Teams',
    description: 'Track LLM costs per developer, per project, per model. Real-time alerts, Slack integration, git-based cost allocation.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white font-sans">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center font-bold text-sm">TF</div>
            <span className="text-lg font-semibold">TokenFeed</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#how-it-works" className="hover:text-white transition">How It Works</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://github.com/crazycompanyinc/tokenfeed" className="text-sm text-gray-400 hover:text-white transition">GitHub</a>
            <a href="#waitlist" className="px-4 py-2 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-lg text-sm font-medium hover:opacity-90 transition">Join Waitlist</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Now in Early Access — Free Forever Tier
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Know Exactly Where Your AI Budget Goes
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Real-time token tracking, per-developer cost allocation, and smart alerts for teams using OpenAI, Anthropic, Gemini, and 400+ models. Setup in 60 seconds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#waitlist" className="px-8 py-3.5 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-xl text-base font-semibold hover:opacity-90 transition shadow-lg shadow-violet-500/20">
              Get Early Access →
            </a>
            <a href="https://github.com/crazycompanyinc/tokenfeed" className="px-8 py-3.5 bg-white/5 border border-white/10 rounded-xl text-base font-medium hover:bg-white/10 transition">
              View on GitHub
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 mt-10 text-xs text-gray-500">
            <span>✓ No credit card</span>
            <span>✓ 60-second setup</span>
            <span>✓ Open source core</span>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-5xl mx-auto mt-16 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-1 overflow-hidden">
          <div className="rounded-xl bg-[#0d0d14] p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium text-gray-300">Live Dashboard</span>
              </div>
              <span className="text-xs text-gray-500">Last updated: just now</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Total Spend Today', value: '$47.32', change: '+12%', up: true },
                { label: 'Tokens This Month', value: '2.4M', change: '+8%', up: true },
                { label: 'Cost per Developer', value: '$9.46', change: '-3%', up: false },
                { label: 'Anomalies Detected', value: '1', change: 'GPT-4 turbo spike', up: true },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                  <p className="text-xl font-bold">{stat.value}</p>
                  <p className={`text-xs mt-1 ${stat.value === '1' ? 'text-yellow-400' : stat.up ? 'text-green-400' : 'text-green-400'}`}>
                    {stat.change}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-end gap-1 h-32">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88, 50, 72, 92, 68, 82, 78, 96, 85].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-violet-600/40 to-cyan-400/60 rounded-t" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              <span>20 days ago</span>
              <span>Token usage over time</span>
              <span>Today</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Everything you need to control AI costs</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">Stop guessing. Start optimizing. TokenFeed gives your team complete visibility into AI spending.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '⚡', title: 'Real-Time Tracking', desc: 'See token usage and costs as they happen. No delays, no batch processing. Live websocket-powered dashboard.' },
              { icon: '👥', title: 'Team Cost Allocation', desc: 'Attribute costs to specific developers, projects, or git commits. Know exactly who is spending what.' },
              { icon: '🚨', title: 'Anomaly Alerts', desc: 'Get notified instantly when spending spikes. Configurable thresholds via Slack, Discord, or email.' },
              { icon: '🔗', title: 'Multi-Provider Support', desc: 'OpenAI, Anthropic, Google Gemini, OpenRouter, Cohere, and 400+ models. One dashboard for everything.' },
              { icon: '💰', title: 'Budget Management', desc: 'Set per-team, per-project, and per-developer budgets. Auto-alert before you hit limits.' },
              { icon: '📊', title: 'Cost Analytics', desc: 'Understand which models, prompts, and workflows cost the most. Optimize for price-performance.' },
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Up and running in 60 seconds</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">No complex integrations. No SDKs to install. Just connect and go.</p>
          <div className="space-y-8">
            {[
              { step: '01', title: 'Connect your API keys', desc: 'Paste your OpenAI, Anthropic, or other API keys. We proxy requests transparently.' },
              { step: '02', title: 'Invite your team', desc: 'Add team members and assign them to projects or cost centers.' },
              { step: '03', title: 'Track, optimize, save', desc: 'Watch costs in real-time, set budgets, get alerts, and optimize spending.' },
            ].map((s) => (
              <div key={s.step} className="flex gap-6 items-start">
                <div className="text-4xl font-bold text-violet-500/40 w-16 shrink-0">{s.step}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-gray-400">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">Start free. Scale when you need to.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Starter', price: 'Free', period: '', features: ['10K requests/mo', '1 seat', '1 organization', '7-day data retention', 'Community support'], cta: 'Get Started', highlight: false, url: 'https://github.com/crazycompanyinc/tokenfeed' },
              { name: 'Team', price: '$29', period: '/mo', features: ['Unlimited requests', '5 seats included', '3 organizations', '30-day retention', 'Alerts & reports', 'Slack integration'], cta: 'Start Free Trial', highlight: true, url: 'https://buy.stripe.com/cNi8wO86Cbpe5Sa5ZYgA80h' },
              { name: 'Organization', price: '$79', period: '/mo', features: ['Everything in Team', 'Unlimited seats', 'Unlimited orgs', 'Forever retention', 'Git cost allocation', 'Dedicated support'], cta: 'Start Free Trial', highlight: false, url: 'https://buy.stripe.com/aFa8wO4Uqala4O62NMgA80i' },
            ].map((p) => (
              <div key={p.name} className={`p-6 rounded-2xl border ${p.highlight ? 'bg-gradient-to-b from-violet-500/10 to-cyan-500/5 border-violet-500/30 ring-1 ring-violet-500/20' : 'bg-white/[0.03] border-white/[0.06]'}`}>
                {p.highlight && <span className="text-xs font-medium text-violet-400 bg-violet-500/10 px-2 py-1 rounded-full">POPULAR</span>}
                <h3 className="text-lg font-semibold mt-3">{p.name}</h3>
                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-4xl font-bold">{p.price}</span>
                  {p.period && <span className="text-gray-500">{p.period}</span>}
                </div>
                <ul className="space-y-2 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="text-sm text-gray-400 flex items-center gap-2">
                      <span className="text-green-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="https://buy.stripe.com/cNi8wO86Cbpe5Sa5ZYgA80h" className={`w-full block text-center py-2.5 rounded-xl text-sm font-medium transition ${p.highlight ? 'bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}>
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-600 mt-6">Compare: Helicone Pro is $79/mo minimum. OpenRouter has no team analytics. TokenFeed gives you both at $29/mo.</p>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to take control?</h2>
          <p className="text-gray-400 mb-8">Join the waitlist and be first to access TokenFeed. Free tier available at launch.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-xl font-medium hover:opacity-90 transition">
              Join Waitlist →
            </button>
          </div>
          <p className="text-xs text-gray-600 mt-4">We'll only email you about TokenFeed. No spam, ever.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center font-bold text-[10px]">TF</div>
            <span className="text-sm text-gray-500">TokenFeed by ZOO</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-gray-600">
            <a href="https://github.com/crazycompanyinc/tokenfeed" className="hover:text-gray-400 transition">GitHub</a>
            <span>© 2026 ZOO Technologies</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
