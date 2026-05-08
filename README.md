# TokenFeed — Real-Time AI Token Dashboard for Dev Teams

> Track, allocate, and optimize LLM costs across your team in real-time.

![TokenFeed](https://img.shields.io/badge/status-early%20access-violet)
![License](https://img.shields.io/badge/license-MIT-blue)
![Stars](https://img.shields.io/github/stars/crazycompanyinc/tokenfeed?style=social)

## Why TokenFeed?

Engineering teams using AI are bleeding money. Nobody knows who's spending what, which models cost the most, or when budgets are about to blow. TokenFeed fixes that.

- **Real-time dashboards** — See token usage and costs as they happen
- **Team cost allocation** — Attribute spend to developers, projects, git commits
- **Anomaly alerts** — Get notified via Slack/Discord when spending spikes
- **Multi-provider** — OpenAI, Anthropic, Gemini, OpenRouter, Cohere, 400+ models
- **Budget management** — Set per-team, per-project, per-developer limits

## Quick Start

```bash
# Coming soon — self-hosted version
docker run -p 3000:3000 -e OPENAI_API_KEY=sk-... tokenfeed/tokenfeed
```

## Pricing

| Plan | Price | Seats | Requests | Retention |
|------|-------|-------|----------|-----------|
| Starter | Free | 1 | 10K/mo | 7 days |
| Team | $29/mo | 5 | Unlimited | 30 days |
| Organization | $79/mo | Unlimited | Unlimited | Forever |

## Roadmap

- [x] Landing page & waitlist
- [ ] API proxy engine
- [ ] Real-time dashboard
- [ ] Team management
- [ ] Slack/Discord alerts
- [ ] Git-based cost allocation
- [ ] Budget management
- [ ] Self-hosted option

## Contributing

TokenFeed is open source (MIT). Contributions welcome!

## License

MIT © 2026 ZOO Technologies
