const requiredDocuments = ["README.md", "profile/README.md"] as const;
for (const document of requiredDocuments) {
    const file = Bun.file(document);
    if (!(await file.exists()) || file.size === 0) {
        throw new Error(`Missing or empty organization document: ${document}`);
    }
}

const profile = await Bun.file("profile/README.md").text();
for (const privateMarker of ["trust-rollout.json", "repository_count", "branch_rule"]) {
    if (profile.includes(privateMarker)) {
        throw new Error("Private rollout metadata must not appear in the public organization profile");
    }
}

console.log("Validated public organization profile metadata.");
