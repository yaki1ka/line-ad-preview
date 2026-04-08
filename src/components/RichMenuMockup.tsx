import type { RichMenuData } from "../types";
import { LAYOUT_ROWS, LAYOUT_COLS, LAYOUT_CELL_COUNT } from "../types";

interface Props {
  data: RichMenuData;
  showLabels: boolean;
}

// LINE rich menu: 2560×1686 (large/2-row), 2560×843 (small/1-row)
const SCREEN_W = 294; // inner screen width (300px phone − 3px×2 side padding)
const LARGE_H = Math.round(SCREEN_W / (2560 / 1686)); // ≈ 194px
const SMALL_H = Math.round(LARGE_H / 2);               // ≈ 97px
const MENU_TITLE_H = 28;

export const RichMenuMockup = ({ data, showLabels }: Props) => {
  const rows = LAYOUT_ROWS[data.layout];
  const cols = LAYOUT_COLS[data.layout];
  const cellCount = LAYOUT_CELL_COUNT[data.layout];
  const menuH = rows === 2 ? LARGE_H : SMALL_H;

  // Fix total phone screen height to 9:16 (≈530px)
  const screenH = Math.round(300 * 16 / 9) - 3;
  const chatH = screenH - 50 - 44 - menuH - MENU_TITLE_H - 22;

  const cellW = SCREEN_W / cols;
  const cellH = menuH / rows;

  return (
    /* Outer: natural height (no flex stretching) */
    <div style={{ display: "inline-flex", flexDirection: "column" }}>
      {/* Phone shell */}
      <div
        style={{
          width: 300,
          background: "#1a1a1a",
          borderRadius: 44,
          padding: "0 3px 3px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.28), 0 0 0 1px #333",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Side buttons */}
        <div style={{ position: "absolute", left: -3, top: 90,  width: 3, height: 30, background: "#333", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", left: -3, top: 132, width: 3, height: 50, background: "#333", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", left: -3, top: 194, width: 3, height: 50, background: "#333", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", right: -3, top: 140, width: 3, height: 60, background: "#333", borderRadius: "0 2px 2px 0" }} />

        {/* Screen */}
        <div
          style={{
            background: "#000",
            borderRadius: 42,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Status bar */}
          <div
            style={{
              background: "#fff",
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 20px",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", width: 110, height: 28, background: "#e5e7eb", borderRadius: 20 }} />
            <span style={{ color: "#111", fontSize: 12, fontWeight: 600, zIndex: 1, fontFamily: "'Noto Sans JP', sans-serif" }}>9:41</span>
            <div style={{ display: "flex", gap: 5, alignItems: "center", zIndex: 1 }}>
              <svg width="15" height="11" viewBox="0 0 15 11" fill="#111">
                <rect x="0" y="7" width="2.5" height="4" rx="0.5" /><rect x="3.5" y="5" width="2.5" height="6" rx="0.5" />
                <rect x="7" y="3" width="2.5" height="8" rx="0.5" /><rect x="10.5" y="1" width="2.5" height="10" rx="0.5" />
              </svg>
              <svg width="14" height="10" viewBox="0 0 24 18" fill="#111">
                <path d="M12 6C8.5 6 5.3 7.4 3 9.7L1 7.7C3.8 4.8 7.7 3 12 3s8.2 1.8 11 4.7l-2 2C18.7 7.4 15.5 6 12 6z"/>
                <path d="M12 11c-1.9 0-3.6.8-4.8 2l-2-2C6.8 9.7 9.3 8.5 12 8.5s5.2 1.2 6.8 2.5l-2 2C15.6 11.8 13.9 11 12 11z"/>
                <circle cx="12" cy="16" r="2"/>
              </svg>
            </div>
          </div>

          {/* Chat header */}
          <div
            style={{
              background: "#06c755",
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 14px",
              flexShrink: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
              </svg>
              {data.accountIconUrl ? (
                <img src={data.accountIconUrl} alt="icon" style={{ width: 28, height: 28, borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(255,255,255,0.4)" }} />
              ) : (
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#fff" }}>
                  {data.accountName ? data.accountName[0].toUpperCase() : "L"}
                </div>
              )}
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 15, fontFamily: "'Noto Sans JP', sans-serif" }}>
                {data.accountName || "LINEアカウント名"}
              </span>
            </div>
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
              </svg>
            </div>
          </div>

          {/* Chat messages */}
          <div
            style={{
              background: "#f0f0f0",
              height: chatH,
              flexShrink: 0,
              padding: "10px 10px 6px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              gap: 6,
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-end", gap: 6 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#dde4ec", flexShrink: 0 }} />
              <div style={{ background: "#fff", borderRadius: "0 12px 12px 12px", padding: "7px 10px", fontSize: 12, color: "#111", maxWidth: "65%", fontFamily: "'Noto Sans JP', sans-serif" }}>
                こんにちは！
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div style={{ background: "#06c755", borderRadius: "12px 0 12px 12px", padding: "7px 10px", fontSize: 12, color: "#fff", maxWidth: "65%", fontFamily: "'Noto Sans JP', sans-serif" }}>
                よろしくお願いします！
              </div>
            </div>
          </div>

          {/* Rich menu grid — title is now BELOW */}
          <div
            style={{
              width: SCREEN_W,
              height: menuH,
              flexShrink: 0,
              overflow: "hidden",
              backgroundImage: data.imageUrl ? `url(${data.imageUrl})` : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "grid",
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gridTemplateRows: `repeat(${rows}, 1fr)`,
            }}
          >
            {Array.from({ length: cellCount }).map((_, i) => {
              const cell = data.cells[i] ?? { label: "", color: "#ccc" };
              const col = i % cols;
              const row = Math.floor(i / cols);
              return (
                <div
                  key={i}
                  style={{
                    borderRight: col < cols - 1 ? "1px solid rgba(255,255,255,0.5)" : undefined,
                    borderBottom: row < rows - 1 ? "1px solid rgba(255,255,255,0.5)" : undefined,
                    background: data.imageUrl ? "transparent" : cell.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: cellW,
                    height: cellH,
                    position: "relative",
                  }}
                >
                  {showLabels && cell.label && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        fontSize: Math.max(12, Math.min(16, cellW / 7)),
                        fontWeight: 800,
                        color: data.imageUrl ? "rgba(255,255,255,0.95)" : "#fff",
                        textShadow: "0 1px 4px rgba(0,0,0,0.6)",
                        padding: "0 6px",
                        fontFamily: "'Noto Sans JP', sans-serif",
                        lineHeight: 1.3,
                      }}
                    >
                      {cell.label}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Menu title bar — below the grid, text centered */}
          <div
            style={{
              background: "#fff",
              height: MENU_TITLE_H,
              borderTop: "1px solid #e5e7eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" style={{ marginRight: 6 }}>
              <polyline points="18 15 12 9 6 15"/>
            </svg>
            <span style={{ fontSize: 11, color: "#555", fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}>
              {data.menuTitle || "メニュー"}
            </span>
          </div>

          {/* Home indicator */}
          <div style={{ background: "#fff", height: 22, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ width: 100, height: 4, background: "#1a1a1a", borderRadius: 2, opacity: 0.25 }} />
          </div>
        </div>
      </div>
    </div>
  );
};
