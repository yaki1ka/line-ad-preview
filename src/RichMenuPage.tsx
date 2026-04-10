import { useState, useRef, type ChangeEvent } from "react";
import html2canvas from "html2canvas";
import type { RichMenuData, RichMenuLayout } from "./types";
import { defaultCells, LAYOUT_CELL_COUNT, LAYOUT_COLS, LAYOUT_ROWS } from "./types";
import { RichMenuMockup } from "./components/RichMenuMockup";

const LAYOUTS: { value: RichMenuLayout; label: string; desc: string }[] = [
  { value: "3x2", label: "3×2", desc: "6マス（大）" },
  { value: "2x2", label: "2×2", desc: "4マス（大）" },
  { value: "3x1", label: "3×1", desc: "3マス（小）" },
  { value: "2x1", label: "2×1", desc: "2マス（小）" },
];

const PRESET_COLORS = ["#4a90e2", "#7c4de8", "#e25c4a", "#e2a34a", "#4ae27c", "#4adce2", "#e24ab0", "#111827", "#374151", "#6b7280"];

const defaultData: RichMenuData = {
  layout: "3x2",
  imageUrl: null,
  cells: defaultCells("3x2"),
  menuTitle: "メニュー",
  accountName: "",
  accountIconUrl: null,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "7px 10px",
  border: "1px solid #d1d5db",
  borderRadius: 6,
  fontSize: 13,
  fontFamily: "'Noto Sans JP', sans-serif",
  outline: "none",
  boxSizing: "border-box",
  color: "#111",
  background: "#fff",
};

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  color: "#374151",
  marginBottom: 5,
  display: "block",
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontSize: 12, fontWeight: 700, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>
    {children}
  </div>
);

const Divider = () => <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: 0 }} />;

export const RichMenuPage = () => {
  const [data, setData] = useState<RichMenuData>(defaultData);
  const [showLabels, setShowLabels] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const bgInputRef = useRef<HTMLInputElement>(null);
  const iconInputRef = useRef<HTMLInputElement>(null);

  const update = (patch: Partial<RichMenuData>) => setData((d) => ({ ...d, ...patch }));

  const changeLayout = (layout: RichMenuLayout) => {
    const count = LAYOUT_CELL_COUNT[layout];
    const cells = Array.from({ length: count }, (_, i) =>
      data.cells[i] ?? defaultCells(layout)[i]
    );
    update({ layout, cells });
  };

  const updateCell = (i: number, patch: Partial<{ label: string; color: string }>) => {
    const cells = data.cells.map((c, idx) => (idx === i ? { ...c, ...patch } : c));
    update({ cells });
  };

  const handleBgUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    update({ imageUrl: URL.createObjectURL(file) });
  };

  const handleIconUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    update({ accountIconUrl: URL.createObjectURL(file) });
  };

  const handleDownload = async () => {
    if (!previewRef.current) return;
    setDownloading(true);
    try {
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
        logging: false,
      });
      const link = document.createElement("a");
      link.download = "line-rich-menu.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } finally {
      setDownloading(false);
    }
  };

  const cols = LAYOUT_COLS[data.layout];
  const rows = LAYOUT_ROWS[data.layout];

  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "24px 20px",
        display: "grid",
        gridTemplateColumns: "320px 1fr",
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
          padding: 20,
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          position: "sticky",
          top: 20,
          display: "flex",
          flexDirection: "column",
          gap: 18,
          maxHeight: "calc(100vh - 100px)",
          overflowY: "auto",
        }}
      >
        <h2 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#111", display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#06c755" strokeWidth="2.5" strokeLinecap="round">
            <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
          </svg>
          リッチメニューを設定
        </h2>

        {/* Account info */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <SectionLabel>LINEアカウント情報</SectionLabel>
          <div>
            <label style={labelStyle}>アカウント名</label>
            <input
              style={inputStyle}
              type="text"
              placeholder="LINEアカウント名"
              value={data.accountName}
              onChange={(e) => update({ accountName: e.target.value })}
              maxLength={30}
            />
          </div>
          <div>
            <label style={labelStyle}>プロフィールアイコン</label>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {data.accountIconUrl ? (
                <img src={data.accountIconUrl} alt="icon" style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", border: "1px solid #e5e7eb" }} />
              ) : (
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#f3f4f6", border: "1px dashed #d1d5db", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", fontSize: 20 }}>+</div>
              )}
              <button onClick={() => iconInputRef.current?.click()} style={{ padding: "5px 12px", border: "1px solid #d1d5db", borderRadius: 6, background: "#f9fafb", fontSize: 12, cursor: "pointer", color: "#374151" }}>
                画像を選択
              </button>
              {data.accountIconUrl && (
                <button onClick={() => update({ accountIconUrl: null })} style={{ padding: "5px 10px", border: "1px solid #fca5a5", borderRadius: 6, background: "#fff", fontSize: 12, cursor: "pointer", color: "#ef4444" }}>
                  削除
                </button>
              )}
              <input ref={iconInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleIconUpload} />
            </div>
          </div>
        </div>

        <Divider />

        {/* Layout */}
        <div>
          <SectionLabel>レイアウト</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {LAYOUTS.map(({ value, label, desc }) => (
              <button
                key={value}
                onClick={() => changeLayout(value)}
                style={{
                  padding: "8px 6px",
                  border: `2px solid ${data.layout === value ? "#06c755" : "#d1d5db"}`,
                  borderRadius: 8,
                  background: data.layout === value ? "#f0fdf4" : "#f9fafb",
                  cursor: "pointer",
                  textAlign: "center",
                  color: data.layout === value ? "#16a34a" : "#4b5563",
                }}
              >
                <div style={{ fontSize: 16, fontWeight: 800, marginBottom: 2 }}>{label}</div>
                <div style={{ fontSize: 11, color: data.layout === value ? "#15803d" : "#6b7280" }}>{desc}</div>
              </button>
            ))}
          </div>
        </div>

        <Divider />

        {/* Menu title */}
        <div>
          <SectionLabel>メニュータイトル</SectionLabel>
          <input
            style={inputStyle}
            type="text"
            value={data.menuTitle}
            onChange={(e) => update({ menuTitle: e.target.value })}
            maxLength={14}
          />
          <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 4 }}>最大14文字</div>
        </div>

        <Divider />

        {/* Background image */}
        <div>
          <SectionLabel>背景画像（任意）</SectionLabel>
          <div
            onClick={() => bgInputRef.current?.click()}
            style={{ border: "2px dashed #d1d5db", borderRadius: 8, padding: 12, textAlign: "center", cursor: "pointer", background: "#f9fafb" }}
            onMouseOver={(e) => (e.currentTarget.style.borderColor = "#06c755")}
            onMouseOut={(e) => (e.currentTarget.style.borderColor = "#d1d5db")}
          >
            {data.imageUrl ? (
              <div>
                <img src={data.imageUrl} alt="bg" style={{ maxWidth: "100%", maxHeight: 80, objectFit: "contain", borderRadius: 4 }} />
                <div style={{ fontSize: 11, color: "#6b7280", marginTop: 6 }}>クリックして変更</div>
              </div>
            ) : (
              <div style={{ color: "#9ca3af" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: "0 auto 6px" }}>
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                <div style={{ fontSize: 12, fontWeight: 600 }}>画像をアップロード</div>
                <div style={{ fontSize: 10, marginTop: 2 }}>2500×1686px (大) / 2500×843px (小) 推奨</div>
              </div>
            )}
          </div>
          {data.imageUrl && (
            <button onClick={() => update({ imageUrl: null })} style={{ marginTop: 6, padding: "4px 10px", border: "1px solid #fca5a5", borderRadius: 6, background: "#fff", fontSize: 12, cursor: "pointer", color: "#ef4444" }}>
              画像を削除
            </button>
          )}
          <input ref={bgInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleBgUpload} />
        </div>

        <Divider />

        {/* Per-cell settings */}
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <SectionLabel>各マスの設定</SectionLabel>
            {/* Show labels toggle */}
            <button
              onClick={() => setShowLabels((v) => !v)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 10px",
                border: `1px solid ${showLabels ? "#06c755" : "#d1d5db"}`,
                borderRadius: 20,
                background: showLabels ? "#f0fdf4" : "#f9fafb",
                cursor: "pointer",
                fontSize: 11,
                fontWeight: 700,
                color: showLabels ? "#16a34a" : "#6b7280",
                fontFamily: "'Noto Sans JP', sans-serif",
              }}
            >
              <div style={{
                width: 28, height: 16, borderRadius: 8,
                background: showLabels ? "#06c755" : "#d1d5db",
                position: "relative", transition: "background 0.2s",
              }}>
                <div style={{
                  position: "absolute", top: 2, left: showLabels ? 14 : 2, width: 12, height: 12,
                  borderRadius: "50%", background: "#fff", transition: "left 0.2s",
                }} />
              </div>
              プレビューに表示
            </button>
          </div>

          {/* Grid preview of cell order */}
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 4, marginBottom: 12, padding: 6, background: "#f3f4f6", borderRadius: 8 }}>
            {data.cells.map((cell, i) => (
              <div key={i} style={{ height: rows === 2 ? 30 : 22, borderRadius: 4, background: data.imageUrl ? "#9ca3af" : cell.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff", fontWeight: 700 }}>
                {i + 1}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {data.cells.map((cell, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 22, height: 22, borderRadius: 4, background: cell.color, flexShrink: 0, border: "1px solid rgba(0,0,0,0.1)" }} />
                <input
                  style={{ ...inputStyle, flex: 1, padding: "5px 8px" }}
                  type="text"
                  placeholder={`マス${i + 1}のラベル`}
                  value={cell.label}
                  onChange={(e) => updateCell(i, { label: e.target.value })}
                  maxLength={12}
                />
                <div style={{ display: "flex", gap: 3, flexShrink: 0 }}>
                  {PRESET_COLORS.slice(0, 5).map((c) => (
                    <button
                      key={c}
                      onClick={() => updateCell(i, { color: c })}
                      style={{ width: 14, height: 14, borderRadius: 3, background: c, border: cell.color === c ? "2px solid #111" : "1px solid rgba(0,0,0,0.15)", cursor: "pointer", padding: 0 }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "28px 20px",
            background: "linear-gradient(135deg, #e8edf2 0%, #d8e4f0 100%)",
            borderRadius: 16,
          }}
        >
          <div ref={previewRef}>
            <RichMenuMockup data={data} showLabels={showLabels} />
          </div>

          <button
            onClick={handleDownload}
            disabled={downloading}
            style={{
              marginTop: 16,
              padding: "9px 24px",
              background: downloading ? "#9ca3af" : "#111",
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
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            {downloading ? "処理中..." : "PNG ダウンロード"}
          </button>
        </div>

        {/* Spec note */}
        <div style={{ marginTop: 16, padding: "12px 14px", background: "#f9fafb", borderRadius: 8, border: "1px solid #e5e7eb" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 6 }}>推奨仕様</div>
          <div style={{ fontSize: 11, color: "#6b7280", lineHeight: 1.7 }}>
            <div>大サイズ（2段）: <strong>2500×1686px</strong></div>
            <div>小サイズ（1段）: <strong>2500×843px</strong></div>
            <div>ファイル形式: JPG / PNG　容量: 1MB 以下</div>
            <div>ラベル: 最大12文字</div>
          </div>
        </div>
      </div>
    </main>
  );
};
