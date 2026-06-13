<picture>
  <source media="(prefers-color-scheme: dark)" srcset="profile/banner-dark.png">
  <img alt="CorvidLabs — open-source Swift tools" src="profile/banner-light.png" width="100%">
</picture>

# Crows build tools. So do we.

Corvids are the only birds that make their own tools. We're a lab that builds developer
tools, open-source, mostly in Swift. Small, sharp things that do one job well: a CLI for
the whole dev loop, specs that hold in CI, deterministic risk scoring, signed provenance,
an agent runner we dogfood, encrypted messaging, and a stack of libraries.

**It all lives in one place → [corvidlabs.xyz](https://corvidlabs.github.io/corvidlabs-site/)**

## Tools

The dev loop, end to end.

- **[fledge](https://corvidlabs.github.io/corvidlabs-site/fledge/)** · one CLI for the whole dev lifecycle: scaffold, run, spec, review, ship.
- **[spec-sync](https://corvidlabs.github.io/corvidlabs-site/spec-sync/)** · specs as CI-enforced contracts. Bidirectional, twelve languages.
- **[augur](https://corvidlabs.github.io/corvidlabs-site/augur/)** · deterministic change-risk scoring. proceed / review / block, no LLM.
- **[attest](https://corvidlabs.github.io/corvidlabs-site/attest/)** · signed provenance in git notes. The trust record for a change.
- **[merlin](https://corvidlabs.github.io/corvidlabs-site/merlin/)** · the AI agent runner we dogfood. Multi-provider, spec-aware, plugin-shaped.

A trust gate on every PR is three steps: `spec-sync` (contract holds) → `augur` (risk under threshold) → `attest` (trust recorded).

## Apps

- **[Quill](https://corvidlabs.github.io/corvidlabs-site/quill/)** · local-first voice dictation. Whisper STT, on-device polish, system-wide paste.
- **[corvid-chat](https://corvidlabs.github.io/corvidlabs-site/corvid-chat/)** · privacy-first federated chat (AlgoChat E2EE + Merlin bridge).
- **Podo** · multi-platform weather with personality. iOS, Android, web, shared KMP.

## AlgoChat

Cross-language, end-to-end-encrypted messaging on Algorand. One wire format,
[six implementations](https://corvidlabs.github.io/corvidlabs-site/algochat/), a
cross-implementation conformance harness, and a browser demo.

## Libraries

Small Swift packages that do one thing well:
[swift-retry](https://github.com/CorvidLabs/swift-retry) ·
[swift-valid](https://github.com/CorvidLabs/swift-valid) ·
[swift-parse](https://github.com/CorvidLabs/swift-parse) ·
[swift-env](https://github.com/CorvidLabs/swift-env) ·
[swift-graph](https://github.com/CorvidLabs/swift-graph) ·
[swift-color](https://github.com/CorvidLabs/swift-color) ·
[swift-music](https://github.com/CorvidLabs/swift-music) ·
[swift-godot](https://github.com/CorvidLabs/swift-godot) ·
[swift-algorand](https://github.com/CorvidLabs/swift-algorand) ·
[and more →](https://github.com/orgs/CorvidLabs/repositories)

## Find us

[The hub](https://corvidlabs.github.io/corvidlabs-site/) ·
[Discord](https://discord.gg/mQGPQy5fnd) ·
[Repositories](https://github.com/orgs/CorvidLabs/repositories)

<sub>Read the source. It's short on purpose.</sub>
