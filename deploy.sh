#!/bin/bash
# Deployment script invoked by the GitHub Actions deploy key via SSH.
# This script is the ONLY command the deploy key is allowed to run
# (see ~/.ssh/authorized_keys command="..." restriction).
set -euo pipefail

cd /opt/docs-pingcodes
echo "[deploy] git fetch + reset to origin/main"
git fetch --quiet origin main
git reset --hard origin/main

echo "[deploy] npm install (only if package-lock changed)"
npm install --silent --no-audit --no-fund

echo "[deploy] vitepress build"
npx vitepress build docs

echo "[deploy] done at $(date -Iseconds)"
