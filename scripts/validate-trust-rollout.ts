interface RolloutRepository {
    name: string;
    wave: number;
    state: string;
    checks: string;
    branch_rule: string;
}

interface RolloutManifest {
    repository_count: number;
    wave_size: number;
    versions: {
        specsync: string;
        specsync_action_commit: string;
        trust: string;
        trust_action_commit: string;
    };
    repositories: RolloutRepository[];
}

const manifest = await Bun.file("trust-rollout.json").json() as RolloutManifest;
if (manifest.repository_count !== 156 || manifest.repositories.length !== 156) {
    throw new Error("The frozen rollout inventory must contain exactly 156 repositories");
}
if (manifest.wave_size !== 10) {
    throw new Error("The rollout wave size must remain 10");
}
if (manifest.versions.specsync !== "5.0.1" || manifest.versions.trust !== "1.0.0") {
    throw new Error("Unexpected SpecSync or Trust release version");
}
if (manifest.versions.specsync_action_commit.length !== 40 || manifest.versions.trust_action_commit.length !== 40) {
    throw new Error("Action releases must be pinned by immutable commit SHA");
}

const names = new Set<string>();
const waveCounts = new Map<number, number>();
for (const repository of manifest.repositories) {
    if (names.has(repository.name)) {
        throw new Error(`Duplicate repository in rollout: ${repository.name}`);
    }
    names.add(repository.name);
    waveCounts.set(repository.wave, (waveCounts.get(repository.wave) ?? 0) + 1);
    if (!repository.state || !repository.checks || !repository.branch_rule) {
        throw new Error(`Incomplete rollout state for ${repository.name}`);
    }
}
for (const [wave, count] of waveCounts) {
    if (count > manifest.wave_size) {
        throw new Error(`Wave ${wave} exceeds the configured size`);
    }
}

for (const excluded of ["corvid-account", "raven", "Mono", "podo-web", "rita-weather"]) {
    if (names.has(excluded)) {
        throw new Error(`Excluded repository leaked into rollout: ${excluded}`);
    }
}

const summary = await Bun.file("profile/TRUST-ROLLOUT.md").text();
if (!summary.includes("Included repositories: 156")) {
    throw new Error("Human-readable rollout summary is out of sync");
}

console.log(`Validated ${manifest.repositories.length} repositories across ${waveCounts.size} waves.`);
