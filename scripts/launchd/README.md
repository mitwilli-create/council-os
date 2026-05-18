# Council OS — launchd integration

## Install (one-time)

```bash
# Copy the plist into LaunchAgents
cp ~/Documents/council-os/scripts/launchd/com.mitchellwilliams.council-os-refresh.plist \
   ~/Library/LaunchAgents/

# Load it (schedules the job)
launchctl load ~/Library/LaunchAgents/com.mitchellwilliams.council-os-refresh.plist

# Verify
launchctl list | grep council-os
```

The job will now run weekly on Sunday at 06:00 PT and check for stale Council OS profiles + api-guides. Logs go to `/tmp/council-os-refresh.log`.

## Uninstall

```bash
launchctl unload ~/Library/LaunchAgents/com.mitchellwilliams.council-os-refresh.plist
rm ~/Library/LaunchAgents/com.mitchellwilliams.council-os-refresh.plist
```

## Manual trigger (without waiting for schedule)

```bash
~/Documents/council-os/scripts/refresh.sh
```

OR force the launchd job to run immediately:

```bash
launchctl kickstart -k gui/$(id -u)/com.mitchellwilliams.council-os-refresh
```

## What it does

`refresh.sh` is read-only — it lists what's stale and prints recommended actions. **Never spends LLM budget autonomously.** Acting on the recommendations (re-ingest, re-profile) is always Mitchell-triggered.

## Edit schedule

Change the `StartCalendarInterval` block in the plist:

- Daily 06:00: only `<key>Hour</key><integer>6</integer>` (drop Weekday)
- Every N hours: replace whole block with `<key>StartInterval</key><integer>SECONDS</integer>`
- Specific day of month: `<key>Day</key><integer>1</integer>`

After editing, reload:
```bash
launchctl unload ~/Library/LaunchAgents/com.mitchellwilliams.council-os-refresh.plist
launchctl load ~/Library/LaunchAgents/com.mitchellwilliams.council-os-refresh.plist
```
