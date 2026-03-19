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

type TabKey = "sample1" | "sample2";

export default function App() {
  const [data, setData] = useState<AdData>(defaultData);
  const [activeTab, setActiveTab] = useState<TabKey>("sample1");
  const [downloading, setDownloading] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!previewRef.current) return;
    setDownloading(true);
    try {
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#f3f4f6",
      });
      const link = document.createElement("a");
      link.download = `line-ad-preview-${activeTab === "sample1" ? "card" : "compact"}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } finally {
      setDownloading(false);
    }
  };

  const tabStyle = (tab: TabKey): React.CSSProperties => ({
    padding: "8px 24px",
    border: "1px solid",
    borderColor: activeTab === tab ? "#06c755" : "#d1d5db",
    borderRadius: 6,
    background: activeTab === tab ? "#06c755" : "#fff",
    color: activeTab === tab ? "#fff" : "#6b7280",
    fontWeight: activeTab === tab ? 700 : 400,
    fontSize: 14,
    cursor: "pointer",
    transition: "all 0.15s",
    fontFamily: "'Noto Sans JP', sans-serif",
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "#fff",
          borderBottom: "1px solid #e5e7eb",
          padding: "0 24px",
          height: 56,
          display: "flex",
          alignItems: "center",
          gap: 12,
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        }}
      >
        <div
          style={{
            width: 32, height: 32, background: "#06c755", borderRadius: 8,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
            <path d="M12 2C6.48 2 2 5.92 2 10.8c0 3.16 1.76 5.95 4.44 7.68L5.5 22l4.12-2.07c.77.21 1.56.32 2.38.32 5.52 0 10-3.92 10-8.8C22 5.92 17.52 2 12 2z" />
          </svg>
        </div>
        <div>
          <h1 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#111" }}>
            LINE 友だち追加広告 プレビューツール
          </h1>
          <p style={{ margin: 0, fontSize: 11, color: "#9ca3af" }}>
            クリエイティブの見た目を確認できます
          </p>
        </div>
      </header>

      {/* Main layout */}
      <main
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: 24,
          display: "grid",
          gridTemplateColumns: "380px 1fr",
          gap: 24,
          alignItems: "start",
        }}
      >
        {/* Left: Input panel */}
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            border: "1px solid #e5e7eb",
            padding: 24,
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <h2 style={{ margin: "0 0 20px", fontSize: 15, fontWeight: 700, color: "#111" }}>
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
            padding: 24,
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <h2 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#111" }}>
              プレビュー
            </h2>
            <button
              onClick={handleDownload}
              disabled={downloading}
              style={{
                padding: "8px 18px",
                background: downloading ? "#d1d5db" : "#06c755",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 700,
                cursor: downloading ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "'Noto Sans JP', sans-serif",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {downloading ? "作成中..." : "画像ダウンロード"}
            </button>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
            <button style={tabStyle("sample1")} onClick={() => setActiveTab("sample1")}>
              サンプル1（カード）
            </button>
            <button style={tabStyle("sample2")} onClick={() => setActiveTab("sample2")}>
              サンプル2（コンパクト）
            </button>
          </div>

          {/* Ad spec info */}
          <div
            style={{
              background: "#f0fdf4",
              border: "1px solid #bbf7d0",
              borderRadius: 8,
              padding: "10px 14px",
              marginBottom: 20,
              fontSize: 12,
              color: "#166534",
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <span>
              <strong>表示形式:</strong>{" "}
              {activeTab === "sample1" ? "タイムライン（カード形式）" : "トークリスト（コンパクト）"}
            </span>
            <span>
              <strong>タイトル:</strong> 最大20文字
            </span>
            {activeTab === "sample1" && (
              <span>
                <strong>説明文:</strong> 最大75文字
              </span>
            )}
          </div>

          {/* Preview with mockup */}
          <div
            ref={previewRef}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: 24,
              background: "#f3f4f6",
              borderRadius: 12,
            }}
          >
            {activeTab === "sample1" ? (
              <SmartphoneMockup label="サンプル1">
                <AdPreviewSample1 data={data} />
              </SmartphoneMockup>
            ) : (
              <SmartphoneMockup label="サンプル2">
                <AdPreviewSample2 data={data} />
              </SmartphoneMockup>
            )}
          </div>

          {/* Quick preview without mockup */}
          <div style={{ marginTop: 24 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#6b7280", marginBottom: 12 }}>
              広告のみプレビュー
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 6 }}>サンプル1 (カード)</div>
                <AdPreviewSample1 data={data} />
              </div>
              <div>
                <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 6 }}>サンプル2 (コンパクト)</div>
                <AdPreviewSample2 data={data} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
