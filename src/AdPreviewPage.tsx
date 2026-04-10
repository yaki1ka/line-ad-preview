import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import type { AdData } from "./types";
import { InputForm } from "./components/InputForm";
import { AdPreviewSample1, AdPreviewSample2 } from "./components/AdPreviewCard";
import { SmartphoneMockup } from "./components/SmartphoneMockup";

const defaultData: AdData = {
  brandName: "",
  brandIconUrl: null,
  imageUrl: null,
  imageAspect: "square",
  title: "",
  description: "",
};

const makeDownloader = (
  ref: React.RefObject<HTMLDivElement | null>,
  filename: string,
  setSaving: (v: boolean) => void
) => async () => {
  if (!ref.current) return;
  setSaving(true);
  try {
    const canvas = await html2canvas(ref.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
      logging: false,
    });
    const link = document.createElement("a");
    link.download = filename;
    link.href = canvas.toDataURL("image/png");
    link.click();
  } finally {
    setSaving(false);
  }
};

const DlButton = ({ onClick, disabled, label }: { onClick: () => void; disabled: boolean; label: string }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      marginTop: 10,
      width: "100%",
      padding: "7px 0",
      background: disabled ? "#9ca3af" : "#111",
      color: "#fff",
      border: "none",
      borderRadius: 7,
      fontSize: 12,
      fontWeight: 700,
      cursor: disabled ? "not-allowed" : "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 5,
      fontFamily: "'Noto Sans JP', sans-serif",
    }}
  >
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
    {label}
  </button>
);

export const AdPreviewPage = () => {
  const [data, setData] = useState<AdData>(defaultData);
  const [downloadingTimeline, setDownloadingTimeline] = useState(false);
  const [downloadingTalklist, setDownloadingTalklist] = useState(false);
  const [downloadingCards, setDownloadingCards] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const talklistRef = useRef<HTMLDivElement>(null);
  const cardPreviewRef = useRef<HTMLDivElement>(null);

  const handleDownloadTimeline = makeDownloader(timelineRef, "line-ad-timeline.png", setDownloadingTimeline);
  const handleDownloadTalklist = makeDownloader(talklistRef, "line-ad-talklist.png", setDownloadingTalklist);
  const handleDownloadCards = makeDownloader(cardPreviewRef, "line-ad-cards.png", setDownloadingCards);

  return (
    <main
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "24px 20px",
        display: "grid",
        gridTemplateColumns: "340px 1fr",
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
        <h2 style={{ margin: "0 0 20px", fontSize: 14, fontWeight: 700, color: "#111", display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#06c755" strokeWidth="2.5" strokeLinecap="round">
            <rect x="2" y="3" width="20" height="14" rx="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
          プレビュー
        </h2>

        {/* Two phones side by side */}
        <div
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center",
            alignItems: "stretch",
            padding: "24px 16px",
            background: "linear-gradient(135deg, #e8edf2 0%, #d8e4f0 100%)",
            borderRadius: 16,
          }}
        >
          {/* Timeline */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#4b5563", marginBottom: 10, letterSpacing: "0.04em", textTransform: "uppercase" }}>
              タイムライン
            </div>
            <div ref={timelineRef} style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <SmartphoneMockup screen="timeline">
                <AdPreviewSample1 data={data} />
              </SmartphoneMockup>
            </div>
            <DlButton onClick={handleDownloadTimeline} disabled={downloadingTimeline} label={downloadingTimeline ? "処理中..." : "PNG DL"} />
          </div>

          {/* Talklist */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#4b5563", marginBottom: 10, letterSpacing: "0.04em", textTransform: "uppercase" }}>
              トークリスト
            </div>
            <div ref={talklistRef} style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <SmartphoneMockup screen="talklist">
                <AdPreviewSample2 data={data} />
              </SmartphoneMockup>
            </div>
            <DlButton onClick={handleDownloadTalklist} disabled={downloadingTalklist} label={downloadingTalklist ? "処理中..." : "PNG DL"} />
          </div>
        </div>

        {/* Ad-only preview strip */}
        <div style={{ marginTop: 24 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#9ca3af", display: "flex", alignItems: "center", gap: 6, flex: 1 }}>
              <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
              広告カードのみプレビュー
              <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
            </div>
            <button
              onClick={handleDownloadCards}
              disabled={downloadingCards}
              style={{
                marginLeft: 12,
                padding: "6px 12px",
                background: downloadingCards ? "#9ca3af" : "#111",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                fontSize: 11,
                fontWeight: 700,
                cursor: downloadingCards ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontFamily: "'Noto Sans JP', sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {downloadingCards ? "処理中..." : "2枚まとめてDL"}
            </button>
          </div>
          <div ref={cardPreviewRef} style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", padding: "12px", background: "#fff" }}>
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
  );
};
