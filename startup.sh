#!/bin/sh
# Restart contract for the App Builder preview.
# Idempotent: if the dev server is already healthy, exit 0.
set -eu
cd /workspace

if curl -sf -o /dev/null --max-time 2 http://127.0.0.1:8080/; then
  exit 0
fi

npm run dev >/tmp/app-dev.log 2>&1 &
pid=$!

for i in 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20; do
  if curl -sf -o /dev/null --max-time 2 http://127.0.0.1:8080/; then
    exit 0
  fi
  if ! kill -0 "$pid" 2>/dev/null; then
    echo "dev server exited before becoming healthy" >&2
    tail -n 80 /tmp/app-dev.log >&2 || true
    exit 1
  fi
  sleep 0.5
done

echo "dev server did not become healthy on :8080" >&2
tail -n 80 /tmp/app-dev.log >&2 || true
exit 1
