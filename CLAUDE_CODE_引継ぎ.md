# Claude Code 引継ぎプロンプト
## LINE制作支援ツール集 — Lステップ CSS プレビュアー 統合タスク

---

## ★ このファイルの使い方

このフォルダを Claude Code で開き、以下の「コピー用プロンプト」を
そのまま貼り付けてください。

---

## プロジェクト概要

**LINE制作支援ツール集（GitHub Pages / 静的サイト）**

既存アプリ: https://yaki1ka.github.io/line-ad-preview/

| ページ | 内容 |
|---|---|
| トップ (`index.html`) | ツール選択画面 |
| Ad Preview | LINE友だち追加広告クリエイティブのプレビュー |
| Rich Menu | リッチメニューレイアウトのプレビュー |
| **CSS Preview（新規追加）** | **Lステップ回答フォームCSSのリアルタイムプレビュー** |

---

## 追加するファイル

```
line-ad-preview/
├── index.html              ← 既存（ナビゲーション追加のみ）
├── css-preview.html        ← 新規（メインUI、約1900行）
└── data/
    └── samples.js          ← 新規（サンプルCSSデータ、約1700行）
```

---

## ファイルの役割分担

### `css-preview.html`（メインUI）
- CSSエディター + リアルタイムiframeプレビュー
- スマホ/PCプレビュー切替
- PNGダウンロード機能
- メインカラーカスタマイズ（HSL色相回転）
- **サンプルデータは参照しない。`data/samples.js` から `window.LSTEP_SAMPLES` を読む**

### `data/samples.js`（データファイル）
- Lステップ公式サンプル11種 + Claudeオリジナル10種 = 計21種
- `window.LSTEP_SAMPLES`（CSSデータ）と `window.LSTEP_META`（メインカラー）を公開
- **サンプル追加・編集は このファイルだけ触ればよい**

---

## ★ コピー用プロンプト①：統合作業（最初に実行）

```
# Lステップ CSS プレビュアーの統合

## やること
line-ad-preview リポジトリに以下を追加してください。

## ファイル追加
1. `css-preview.html` を添付ファイルから追加（変更不要）
2. `data/samples.js` を添付ファイルから追加（変更不要）
3. `index.html` にナビゲーション項目を追加

## index.html への追加内容
既存の「Ad Preview」「Rich Menu」と同じスタイルで、
「🎨 CSS プレビュアー（Lステップ）」という項目を追加してください。
リンク先は `css-preview.html` です。

## 注意事項
- css-preview.html と data/samples.js の中身は変更しないこと
- data/ フォルダを作成してその中に samples.js を配置すること
- GitHub Pages で動く静的サイトなのでサーバー不要
```

---

## ★ コピー用プロンプト②：サンプルCSS追加（以降の作業）

```
# サンプルCSS追加

## 作業ファイル
`data/samples.js` のみ編集してください。
`css-preview.html` は変更不要です。

## 追加内容
[ここに追加したいデザインの説明を書く]
例：「北欧風のシンプルなデザイン。白背景、細いラインアクセント、
     サンセリフフォント。メインカラーは #2d6a9f のブルー」

## 追加手順（samples.js の構造に従うこと）
1. `const CLAUDE_SAMPLES2` オブジェクトに新しいキーとCSSを追加
   キー命名規則: 'c11', 'c12' ... と連番
2. `window.LSTEP_META` に同じキーで `{ primary: '#メインカラー' }` を追加
3. `css-preview.html` の `#sampleScroll` 内、
   「LISM インスパイアデザイン」グループの末尾に以下を追加:
   ```html
   <label class="sample-radio-item" data-val="c11" onclick="selectSample('c11')">
     <div class="sample-radio-dot"></div>
     <div class="sample-swatch" style="background:#2d6a9f;"></div>
     <span class="sample-radio-name">🏔 [デザイン名]（[コンセプト]）</span>
   </label>
   ```

## CSS設計の注意点
- メインカラー（ボタン、アクセント、ボーダー等）は彩度のある1色に統一
- グレー・黒・白はカラーピッカーで変えないのでニュートラルに使ってよい
- コメントで「★アクセント」「ニュートラル」を明記すると管理しやすい
```

---

## ★ コピー用プロンプト③：UIの修正（css-preview.html を触る場合）

```
# CSS プレビュアーのUI修正

## 作業ファイル
`css-preview.html` のみ編集してください。
`data/samples.js` は変更不要です。

## 修正内容
[ここに修正したい内容を書く]

## 重要な構造メモ
- ラジオボタンリスト: `#sampleScroll` 内の `.sample-radio-item`
- カラーピッカー: `.color-section` 内
- iframeプレビュー: `#previewFrame`（高さはpostMessageで自動同期）
- CSS注入: `injectCSS()` 関数（styleタグ直接書き換え、リロードなし）
- PNG取得: `downloadPNG()` 関数（iframe内でhtml2canvasを実行）
- 高さ同期: iframe内の `notify()` → postMessage → 親の messageHandler
```

---

## ファイルサイズ比較

| ファイル | 行数 | 用途 |
|---|---|---|
| 旧 lstep-preview.html | 3,605行 | 全部入り（重い） |
| **css-preview.html** | **約1,900行** | UIとロジックのみ |
| **data/samples.js** | **約1,730行** | データのみ |

Claude Code での作業は基本的に **片方だけ** 渡せばよいため、
コンテキストが半分以下になります。

---

## トラブルシューティング

| 症状 | 原因 | 対処 |
|---|---|---|
| サンプルが読み込まれない | samples.js の読み込み順 | `<script src="data/samples.js">` が html2canvas の後にあることを確認 |
| カラーカスタマイズが効かない | primaryカラーが彩度ゼロ | SAMPLE_META の primary を有彩色（#で始まる6桁）に変更 |
| iframeが真っ白 | html2canvas のクロスフレーム問題 | downloadPNG() の win.html2canvas を使っているか確認 |
| 背景色が途切れる | form-bottom の float clearfix | .form-bottom { overflow: hidden } が MYFM_BASE_CSS にあることを確認 |
