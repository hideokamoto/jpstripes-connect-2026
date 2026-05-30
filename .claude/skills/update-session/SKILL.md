---
description: セッション情報またはタイムテーブルを更新する。sessions.json の変更に合わせて対応する content/sessions/*.md を漏れなく同期する。
allowed-tools: Read Edit Write Bash(grep *)
disable-model-invocation: true
---

## 現在のタイムテーブルデータ

!`cat src/data/sessions.json`

## 現在のセッション詳細ファイル一覧

!`ls content/sessions/`

## Timetable.tsx のハードコード文言

!`grep -nE "sessions|min each|tracks" src/components/Timetable.tsx`

## 更新手順

以下の順序で作業すること。

### Step 1: sessions.json を更新する

- `time` / `duration` / `title` / `speaker` / `tags` を修正
- エントリは **時刻昇順** で並べること（Map の挿入順がそのまま表示順になる）
- 転換ブロックは `"track": "—"`, `"isBreak": true` で追加
- `slug` を持つエントリは対応する `content/sessions/<slug>.md` が必要

### Step 2: 変更した slug の Markdown ファイルを同期する

sessions.json で変更した各エントリの `slug` に対して `content/sessions/<slug>.md` を開き、以下を確認・更新する:

- フロントマターの `time:` が sessions.json の `time` と一致しているか
- フロントマターの `duration:` が sessions.json の `duration` と一致しているか
- 本文中に `"HH:MM 枠"` のような時刻の言及があれば更新する

### Step 3: Timetable.tsx のハードコード文言を確認する

冒頭に注入済みの Timetable.tsx 抜粋を参照し、セッション数や時間長のハードコード文言が実態とずれていないか確認する。通常の時刻・長さ変更では編集不要。

### Step 4: 編集後に時刻言及を再 grep する

**Step 1〜2 の編集をすべて終えた後**、Bash ツールで次を実行し、出力を編集後の sessions.json と突き合わせる:

```
grep -rn "[0-9][0-9]:[0-9][0-9] 枠" content/sessions/
```

（冒頭の注入結果は編集前のスナップショットなので使わない。必ずこのステップで再実行すること）

残っている古い時刻があれば修正する。

## よくある漏れ

| パターン | 結果 |
|---|---|
| sessions.json だけ更新して .md を更新しない | 詳細ページに古い時刻が残る |
| フロントマターは直したが本文の時刻言及を見落とす | 詳細ページ本文に古い時刻が残る |
| 転換追加後にエントリ順が崩れている | タイムテーブルの並び順が乱れる |

> **Note**: slug はURL・ファイル名になるため基本的に変えない。time と slug のずれ（例: `track-a-1510` なのに time が `15:05`）は許容される。
