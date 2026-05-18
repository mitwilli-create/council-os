#!/bin/bash
# refresh.sh — periodic Council OS KB rebuild trigger.
#
# Intended to be run via cron or launchd. Currently a stub that surfaces what
# needs to happen on a refresh; actual orchestration happens when the user
# invokes it (via /researcher or directly). This script LISTS what's stale and
# prints a recommended action list — it does NOT spend LLM budget autonomously.
#
# Run manually:
#   ~/Documents/council-os/scripts/refresh.sh
#
# Suggested cron (weekly Sunday 06:00 PT):
#   0 6 * * 0 /Users/mitchellwilliams/Documents/council-os/scripts/refresh.sh > /tmp/council-os-refresh.log 2>&1
#
# Suggested launchd plist (~/Library/LaunchAgents/com.mitchellwilliams.council-os-refresh.plist):
#   <?xml version="1.0" encoding="UTF-8"?>
#   <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
#   <plist version="1.0">
#   <dict>
#     <key>Label</key><string>com.mitchellwilliams.council-os-refresh</string>
#     <key>ProgramArguments</key><array><string>/Users/mitchellwilliams/Documents/council-os/scripts/refresh.sh</string></array>
#     <key>StartCalendarInterval</key><dict><key>Weekday</key><integer>0</integer><key>Hour</key><integer>6</integer><key>Minute</key><integer>0</integer></dict>
#     <key>StandardOutPath</key><string>/tmp/council-os-refresh.log</string>
#     <key>StandardErrorPath</key><string>/tmp/council-os-refresh.err.log</string>
#   </dict>
#   </plist>
#
# Load with: launchctl load ~/Library/LaunchAgents/com.mitchellwilliams.council-os-refresh.plist

set -e

REPO=~/Documents/council-os
TODAY=$(date +%Y-%m-%d)
DAYS_OLD_THRESHOLD=30  # consider profiles "stale" after 30 days

echo "Council OS refresh check — $TODAY"
echo "Repo: $REPO"
echo

# 1. Detect stale profiles (>30 days since last round)
echo "=== Profiles older than $DAYS_OLD_THRESHOLD days ==="
find "$REPO/models" -name "round-*-self-research.md" -mtime +$DAYS_OLD_THRESHOLD 2>/dev/null \
  | sort \
  | head -30

echo
echo "=== api-guides older than $DAYS_OLD_THRESHOLD days ==="
find "$REPO/api-guides" -name "_official-*.md" -mtime +$DAYS_OLD_THRESHOLD 2>/dev/null \
  | sort \
  | head -30

# 2. Check for retirement signals — scan release-notes mirror for any model
#    listed in sources.json
echo
echo "=== Retirement signal check ==="
if [ -f "$REPO/api-guides/xai/_official-release-notes.md" ]; then
  echo "xAI release-notes mirror present — manual review suggested for retirement signals"
else
  echo "WARN: xAI release-notes mirror missing or placeholder"
fi

# 3. Recommend actions
echo
echo "=== Recommended actions ==="
echo "If any of the above show stale dates:"
echo "  1. Re-ingest official docs: re-run Phase 2 from scripts/orchestrate.md"
echo "  2. For specific model: invoke /researcher to test that model on a sample task"
echo "  3. For full Tier-1 re-profile: estimate \$30-60, schedule via /loop or manual"
echo
echo "If a model has been retired (e.g., grok-4 May 2026):"
echo "  1. Move models/{provider}/{slug}/ to models/_retired/"
echo "  2. Update sources.json (move from models to retired_models)"
echo "  3. Regenerate routing-rules.md (drop retired entries)"
echo "  4. Update lib/council.mjs slot definitions in career-ops"
echo
echo "Refresh check complete. No LLM spend incurred by this script."
