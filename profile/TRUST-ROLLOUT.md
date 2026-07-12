# SpecSync 5 / Trust 1 Rollout

This ledger tracks the organization-wide migration to SpecSync 5.0.1 and Trust 1.0.0.

## Policy

- Ten repositories per wave, ordered from the toolchain outward.
- Pull requests open as drafts and become review-ready after hosted checks pass.
- Trust is required on every pull request after the migration check is green.
- Existing coverage thresholds are preserved; repositories without one begin advisory.
- Provenance is progressive while existing signing workflows remain strict.
- Standalone Atlas publication remains independent.

## Inventory

- Included repositories: 156
- Excluded: archived repositories, forks, corvid-account, raven, and Mono/Podo/Rita families.

- 1-core-toolchain: 10
- 2-templates-docs-canaries: 9
- 3-fledge-plugins: 40
- 4-public-libraries-protocols: 34
- 5-public-applications-tools: 11
- 6-private-products-applications-games: 35
- 7-test-example-meta: 17

## Status

| Wave | Repository | Visibility | State | PR | Checks | Branch rule |
| ---: | --- | --- | --- | --- | --- | --- |
| 1 | .github | public | pr_open | [PR](https://github.com/CorvidLabs/.github/pull/12) | pending | pending |
| 1 | attest | public | pending | — | pending | pending |
| 1 | augur | public | pending | — | pending | pending |
| 1 | fledge | public | pr_open | [PR](https://github.com/CorvidLabs/fledge/pull/497) | pending | pending |
| 1 | fledge-plugin-atlas | public | pending | — | pending | pending |
| 1 | fledge-plugin-attest | public | pending | — | pending | pending |
| 1 | fledge-plugin-augur | public | pending | — | pending | pending |
| 1 | homebrew-tap | public | pending | — | pending | pending |
| 1 | spec-sync | public | pending | — | pending | pending |
| 1 | trust | public | pending | — | pending | pending |
| 2 | 3md | public | pr_open | [PR](https://github.com/CorvidLabs/3md/pull/52) | pending | pending |
| 2 | agent-3md | public | pr_open | [PR](https://github.com/CorvidLabs/agent-3md/pull/21) | pending | pending |
| 2 | claude-instructions | private | pending | — | pending | pending |
| 2 | corvid-pet | public | pending | — | pending | pending |
| 2 | fledge-templates | public | pending | — | pending | pending |
| 2 | merlin | private | pending | — | pending | pending |
| 2 | protocol-algochat | public | pending | — | pending | pending |
| 2 | quill | private | pending | — | pending | pending |
| 2 | site | private | pending | — | pending | pending |
| 2 | fledge-plugin-algochat | public | pending | — | pending | pending |
| 3 | fledge-plugin-apple-music | public | pending | — | pending | pending |
| 3 | fledge-plugin-bench | public | pending | — | pending | pending |
| 3 | fledge-plugin-bridge | public | pending | — | pending | pending |
| 3 | fledge-plugin-bridge-client | public | pending | — | pending | pending |
| 3 | fledge-plugin-canary | public | pending | — | pending | pending |
| 3 | fledge-plugin-canary-wasm | public | pending | — | pending | pending |
| 3 | fledge-plugin-color | public | pending | — | pending | pending |
| 3 | fledge-plugin-coverage | public | pending | — | pending | pending |
| 3 | fledge-plugin-deploy | public | pending | — | pending | pending |
| 3 | fledge-plugin-deps | public | pending | — | pending | pending |
| 4 | fledge-plugin-discord | public | pending | — | pending | pending |
| 4 | fledge-plugin-docker | public | pending | — | pending | pending |
| 4 | fledge-plugin-e2e | public | pending | — | pending | pending |
| 4 | fledge-plugin-env | public | pending | — | pending | pending |
| 4 | fledge-plugin-figma | public | pending | — | pending | pending |
| 4 | fledge-plugin-github | public | pending | — | pending | pending |
| 4 | fledge-plugin-gitleaks | public | pending | — | pending | pending |
| 4 | fledge-plugin-hangman | public | pending | — | pending | pending |
| 4 | fledge-plugin-hello | public | pending | — | pending | pending |
| 4 | fledge-plugin-hello-rust | public | pending | — | pending | pending |
| 5 | fledge-plugin-hello-swift | public | pending | — | pending | pending |
| 5 | fledge-plugin-http | public | pending | — | pending | pending |
| 5 | fledge-plugin-hub | public | pending | — | pending | pending |
| 5 | fledge-plugin-jwt | public | pending | — | pending | pending |
| 5 | fledge-plugin-localnet | public | pending | — | pending | pending |
| 5 | fledge-plugin-memory | public | pending | — | pending | pending |
| 5 | fledge-plugin-metrics | public | pending | — | pending | pending |
| 5 | fledge-plugin-nginx | private | pending | — | pending | pending |
| 5 | fledge-plugin-pg | public | pending | — | pending | pending |
| 5 | fledge-plugin-port | public | pending | — | pending | pending |
| 6 | fledge-plugin-roast | public | pending | — | pending | pending |
| 6 | fledge-plugin-scratch | public | pending | — | pending | pending |
| 6 | fledge-plugin-speedtest | public | pending | — | pending | pending |
| 6 | fledge-plugin-sql | public | pending | — | pending | pending |
| 6 | fledge-plugin-standup | public | pending | — | pending | pending |
| 6 | fledge-plugin-stats | public | pending | — | pending | pending |
| 6 | fledge-plugin-todo | public | pending | — | pending | pending |
| 6 | fledge-plugin-tz | public | pending | — | pending | pending |
| 6 | fledge-plugin-weather | public | pending | — | pending | pending |
| 6 | corvid-ai | public | pending | — | pending | pending |
| 7 | cs | public | pending | — | pending | pending |
| 7 | flock-directory-contract | public | pending | — | pending | pending |
| 7 | go-algochat | public | pending | — | pending | pending |
| 7 | go-algod-monitor | public | pending | — | pending | pending |
| 7 | go-collections | public | pending | — | pending | pending |
| 7 | kt-algochat | public | pending | — | pending | pending |
| 7 | py-algochat | public | pending | — | pending | pending |
| 7 | rs-algochat | public | pending | — | pending | pending |
| 7 | swift-algochat | public | pending | — | pending | pending |
| 7 | swift-algokit | public | pending | — | pending | pending |
| 8 | swift-algorand | public | pending | — | pending | pending |
| 8 | swift-algotest | public | pending | — | pending | pending |
| 8 | swift-arc | public | pending | — | pending | pending |
| 8 | swift-art | public | pending | — | pending | pending |
| 8 | swift-asa-viewer | public | pending | — | pending | pending |
| 8 | swift-ascii | public | pending | — | pending | pending |
| 8 | swift-cli | public | pending | — | pending | pending |
| 8 | swift-color | public | pending | — | pending | pending |
| 8 | swift-env | public | pending | — | pending | pending |
| 8 | swift-game | public | pending | — | pending | pending |
| 9 | swift-godot | public | pending | — | pending | pending |
| 9 | swift-graph | public | pending | — | pending | pending |
| 9 | swift-mint | public | pending | — | pending | pending |
| 9 | swift-music | public | pending | — | pending | pending |
| 9 | swift-parse | public | pending | — | pending | pending |
| 9 | swift-pinata | public | pending | — | pending | pending |
| 9 | swift-qr | public | pending | — | pending | pending |
| 9 | swift-retry | public | pending | — | pending | pending |
| 9 | swift-stats | public | pending | — | pending | pending |
| 9 | swift-units | public | pending | — | pending | pending |
| 10 | swift-valid | public | pending | — | pending | pending |
| 10 | swift-weather | public | pending | — | pending | pending |
| 10 | ts-algochat | public | pending | — | pending | pending |
| 10 | algochat-landing | public | pending | — | pending | pending |
| 10 | comic | public | pending | — | pending | pending |
| 10 | compose-playground | public | pending | — | pending | pending |
| 10 | corvid-agent-nano | public | pending | — | pending | pending |
| 10 | corvid-asa | public | pending | — | pending | pending |
| 10 | corvid-hex | public | pending | — | pending | pending |
| 10 | fledge-lanes | public | pending | — | pending | pending |
| 11 | MacNTop | public | pending | — | pending | pending |
| 11 | obsidian-corvid-agent | public | pending | — | pending | pending |
| 11 | open-cometa | public | pending | — | pending | pending |
| 11 | Ports | public | pending | — | pending | pending |
| 11 | algo-cli | private | pending | — | pending | pending |
| 11 | algochat-app | private | pending | — | pending | pending |
| 11 | algochat-runelite | private | pending | — | pending | pending |
| 11 | AlgorandPlayground | private | pending | — | pending | pending |
| 11 | chess.game | private | pending | — | pending | pending |
| 11 | corvid-bot | private | pending | — | pending | pending |
| 12 | corvid-chat | private | pending | — | pending | pending |
| 12 | corvid-dress | private | pending | — | pending | pending |
| 12 | corvid-health | private | pending | — | pending | pending |
| 12 | corvid-payments | private | pending | — | pending | pending |
| 12 | corvid-pirates | private | pending | — | pending | pending |
| 12 | corvid-quiz | private | pending | — | pending | pending |
| 12 | corvid-verify | private | pending | — | pending | pending |
| 12 | corvid-wallet | private | pending | — | pending | pending |
| 12 | cvd-ts-utils | private | pending | — | pending | pending |
| 12 | design-system | private | pending | — | pending | pending |
| 13 | DiscordBot | private | pending | — | pending | pending |
| 13 | Kyntor | private | pending | — | pending | pending |
| 13 | mint.tool | private | pending | — | pending | pending |
| 13 | NFTMix | private | pending | — | pending | pending |
| 13 | NFTRemix | private | pending | — | pending | pending |
| 13 | opinion-market | private | pending | — | pending | pending |
| 13 | Pix | private | pending | — | pending | pending |
| 13 | Roost | private | pending | — | pending | pending |
| 13 | rust-game | private | pending | — | pending | pending |
| 13 | rust-learning | private | pending | — | pending | pending |
| 14 | rust-server | private | pending | — | pending | pending |
| 14 | rust-ui | private | pending | — | pending | pending |
| 14 | site-backend | private | pending | — | pending | pending |
| 14 | swift-weather-nft | private | pending | — | pending | pending |
| 14 | Talon | private | pending | — | pending | pending |
| 14 | ts-weather-globe | private | pending | — | pending | pending |
| 14 | typescript-pinata | private | pending | — | pending | pending |
| 14 | vapor-site | private | pending | — | pending | pending |
| 14 | weather.app | private | pending | — | pending | pending |
| 14 | _notes | private | pending | — | pending | pending |
| 15 | agent-findings | private | pending | — | pending | pending |
| 15 | algo-utils-examples | public | pending | — | pending | pending |
| 15 | corvid-agent-backups | private | pending | — | pending | pending |
| 15 | prompt.list | private | pending | — | pending | pending |
| 15 | swift-style-guide | private | pending | — | pending | pending |
| 15 | swift.status | public | pending | — | pending | pending |
| 15 | test-algochat | public | pending | — | pending | pending |
| 15 | test-nest-portal-wtt | private | pending | — | pending | pending |
| 15 | test.2048 | private | pending | — | pending | pending |
| 15 | test.aoe | private | pending | — | pending | pending |
| 16 | test.blackjack | private | pending | — | pending | pending |
| 16 | test.discord-bot | private | pending | — | pending | pending |
| 16 | test.godot | private | pending | — | pending | pending |
| 16 | test.jenkins-sim | private | pending | — | pending | pending |
| 16 | test.multi-algochat | private | pending | — | pending | pending |
| 16 | test.tetris | private | pending | — | pending | pending |
