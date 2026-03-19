import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import type { AdData } from "./types";
import { InputForm } from "./components/InputForm";
import { AdPreviewSample1, AdPreviewSample2 } from "./components/AdPreviewCard";
import { SmartphoneMockup } from "./components/SmartphoneMockup";
import "./App.css";

const defaultData: AdData = {
  brandName: "",
  brandIconUrl: null,
  imageUrl: null,
  imageAspect: "square",
  title: "",
  description: "",
};

type TabKey = "timeline" | "talklist";

export default function App() {
  const [data, setData] = useState<AdData>(defaultData);
  const [activeTab, setActiveTab] = useState<TabKey>("timeline");
  const [downloading, setDownloading] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!previewRef.current) return;
    setDownloading(true);
    try {
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#e8edf2",
        logging: false,
      });
      const link = document.createElement("a");
      link.download = `line-ad-preview-${activeTab}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } finally {
      setDownloading(false);
    }
  };

  const tabStyle = (tab: TabKey): React.CSSProperties => ({
    padding: "8px 20px",
    border: "2px solid",
    borderColor: activeTab === tab ? "#06c755" : "#e5e7eb",
    borderRadius: 8,
    background: activeTab === tab ? "#06c755" : "#fff",
    color: activeTab === tab ? "#fff" : "#6b7280",
    fontWeight: activeTab === tab ? 700 : 500,
    fontSize: 13,
    cursor: "pointer",
    transition: "all 0.15s",
    fontFamily: "'Noto Sans JP', sans-serif",
    display: "flex",
    alignItems: "center",
    gap: 6,
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f0f2f5",
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "#06c755",
          padding: "0 24px",
          height: 56,
          display: "flex",
          alignItems: "center",
          gap: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        }}
      >
        <div
          style={{
            width: 34, height: 34, background: "rgba(255,255,255,0.2)", borderRadius: 10,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
            <path d="M12 2C6.48 2 2 5.92 2 10.8c0 3.16 1.76 5.95 4.44 7.68L5.5 22l4.12-2.07c.77.21 1.56.32 2.38.32 5.52 0 10-3.92 10-8.8C22 5.92 17.52 2 12 2z" />
          </svg>
        </div>
        <div>
          <h1 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#fff" }}>
            LINE 友だち追加広告 プレビューツール
          </h1>
          <p style={{ margin: 0, fontSize: 11, color: "rgba(255,255,255,0.75)" }}>
            クリエイティブの見た目をスマホで確認できます
          </p>
        </div>
      </header>

      {/* Main layout */}
      <main
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "24px 20px",
          display: "grid",
          gridTemplateColumns: "360px 1fr",
          gap: 20,
          alignItems: "start",
        }}
      >
        {/* Left: Input panel */}
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            border: "1px solid #e5e7eb",
            padding: 22,
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            position: "sticky",
            top: 20,
          }}
        >
          <h2 style={{ margin: "0 0 18px", fontSize: 14, fontWeight: 700, color: "#111", display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#06c755" strokeWidth="2.5" strokeLinecap="round">
              <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
            広告情報を入力
          </h2>
          <InputForm data={data} onChange={setData} />
        </div>

        {/* Right: Preview panel */}
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            border: "1px solid #e5e7eb",
            padding: 22,
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          }}
        >
          {/* Panel header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
            <h2 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#111", display: "flex", alignItems: "center", gap: 6 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#06c755" strokeWidth="2.5" strokeLinecap="round">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
              プレビュー
            </h2>
            <button
              onClick={handleDownload}
              disabled={downloading}
              style={{
                padding: "8px 16px",
                background: downloading ? "#9ca3af" : "#111",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 700,
                cursor: downloading ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "'Noto Sans JP', sans-serif",
                transition: "background 0.15s",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {downloading ? "処理中..." : "PNG ダウンロード"}
            </button>
          </div>

          {/* Tab switcher */}
          <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
            <button style={tabStyle("timeline")} onClick={() => setActiveTab("timeline")}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="12" cy="5" r="3"/><line x1="12" y1="8" x2="12" y2="21"/>
              </svg>
              タイムライン
            </button>
            <button style={tabStyle("talklist")} onClick={() => setActiveTab("talklist")}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
              トークリスト
            </button>
          </div>

          {/* Spec badge */}
          <div
            style={{
              background: "#f0fdf4",
              border: "1px solid #bbf7d0",
              borderRadius: 8,
              padding: "8px 14px",
              marginBottom: 20,
              fontSize: 11,
              color: "#166534",
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <span style={{ fontWeight: 700 }}>
              {activeTab === "timeline" ? "📋 タイムライン（カード形式）" : "💬 トークリスト（コンパクト）"}
            </span>
            <span>タイトル: 最大20文字</span>
            {activeTab === "timeline" && <span>説明文: 最大75文字</span>}
            <span>画像: {data.imageAspect === "square" ? "1,080×1,080px" : "1,200×628px"}</span>
          </div>

          {/* Mockup preview */}
          <div
            ref={previewRef}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "28px 20px",
              background: "linear-gradient(135deg, #e8edf2 0%, #d8e4f0 100%)",
              borderRadius: 16,
            }}
          >
            {activeTab === "timeline" ? (
              <SmartphoneMockup screen="timeline">
                <AdPreviewSample1 data={data} />
              </SmartphoneMockup>
            ) : (
              <SmartphoneMockup screen="talklist">
                <AdPreviewSample2 data={data} />
              </SmartphoneMockup>
            )}
          </div>

          {/* Ad-only preview strip */}
          <div style={{ marginTop: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#9ca3af", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
              広告カードのみプレビュー
              <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
              <div style={{ border: "1px solid #e5e7eb", borderRadius: 8, overflow: "hidden" }}>
                <div style={{ fontSize: 10, color: "#9ca3af", padding: "4px 8px", background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>タイムライン</div>
                <AdPreviewSample1 data={data} />
              </div>
              <div style={{ border: "1px solid #e5e7eb", borderRadius: 8, overflow: "hidden", maxWidth: 290 }}>
                <div style={{ fontSize: 10, color: "#9ca3af", padding: "4px 8px", background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>トークリスト</div>
                <AdPreviewSample2 data={data} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
