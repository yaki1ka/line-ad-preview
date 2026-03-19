import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  label: string;
}

export const SmartphoneMockup = ({ children, label }: Props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      <div
        style={{
          width: 320,
          background: "#fff",
          borderRadius: 40,
          border: "3px solid #374151",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15), inset 0 0 0 1px #6b7280",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Status bar notch */}
        <div
          style={{
            background: "#1f2937",
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
            position: "relative",
          }}
        >
          {/* Notch */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: 120,
              height: 28,
              background: "#111827",
              borderRadius: "0 0 20px 20px",
            }}
          />
          <span style={{ color: "#fff", fontSize: 11, fontWeight: 600, zIndex: 1 }}>9:41</span>
          <div style={{ display: "flex", gap: 6, alignItems: "center", zIndex: 1 }}>
            {/* Signal */}
            <svg width="14" height="10" viewBox="0 0 14 10" fill="#fff">
              <rect x="0" y="7" width="2" height="3" rx="0.5" />
              <rect x="3" y="5" width="2" height="5" rx="0.5" />
              <rect x="6" y="3" width="2" height="7" rx="0.5" />
              <rect x="9" y="1" width="2" height="9" rx="0.5" />
              <rect x="12" y="0" width="2" height="10" rx="0.5" />
            </svg>
            {/* WiFi */}
            <svg width="14" height="10" viewBox="0 0 24 18" fill="#fff">
              <path d="M12 6C8.5 6 5.3 7.4 3 9.7L1 7.7C3.8 4.8 7.7 3 12 3s8.2 1.8 11 4.7l-2 2C18.7 7.4 15.5 6 12 6z" />
              <path d="M12 11c-1.9 0-3.6.8-4.8 2l-2-2C6.8 9.7 9.3 8.5 12 8.5s5.2 1.2 6.8 2.5l-2 2C15.6 11.8 13.9 11 12 11z" />
              <circle cx="12" cy="16" r="2" />
            </svg>
            {/* Battery */}
            <svg width="20" height="10" viewBox="0 0 20 10" fill="#fff">
              <rect x="0" y="1" width="16" height="8" rx="1.5" stroke="#fff" strokeWidth="1" fill="none" />
              <rect x="1" y="2" width="12" height="6" rx="0.5" fill="#fff" />
              <rect x="17" y="3" width="2.5" height="4" rx="1" fill="#fff" />
            </svg>
          </div>
        </div>

        {/* LINE App header */}
        <div
          style={{
            background: "#06c755",
            height: 48,
            display: "flex",
            alignItems: "center",
            padding: "0 16px",
            gap: 10,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 16, fontFamily: "'Noto Sans JP', sans-serif" }}>
            {label === "サンプル1" ? "タイムライン" : "トーク"}
          </span>
        </div>

        {/* Screen content */}
        <div
          style={{
            background: label === "サンプル1" ? "#f3f4f6" : "#f0f0f0",
            minHeight: 480,
            padding: label === "サンプル1" ? 12 : "12px 0",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {label === "サンプル1" ? (
            <>
              {/* Timeline post placeholder */}
              <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e5e7eb", padding: 12, display: "flex", gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#d1d5db", flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ height: 10, background: "#e5e7eb", borderRadius: 4, width: "60%", marginBottom: 6 }} />
                  <div style={{ height: 8, background: "#e5e7eb", borderRadius: 4, width: "80%" }} />
                </div>
              </div>
              {/* Ad card */}
              {children}
              {/* Another post placeholder */}
              <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e5e7eb", padding: 12, display: "flex", gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#d1d5db", flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ height: 10, background: "#e5e7eb", borderRadius: 4, width: "45%", marginBottom: 6 }} />
                  <div style={{ height: 8, background: "#e5e7eb", borderRadius: 4, width: "70%" }} />
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Chat list items */}
              {[
                { name: "友だち A", msg: "ありがとうございます！" },
                { name: "友だち B", msg: "了解です" },
              ].map((chat, i) => (
                <div key={i} style={{ background: "#fff", padding: "10px 16px", display: "flex", gap: 10, alignItems: "center" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#d1d5db", flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 3 }}>{chat.name}</div>
                    <div style={{ fontSize: 12, color: "#9ca3af", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{chat.msg}</div>
                  </div>
                </div>
              ))}
              {/* Ad in chat list */}
              <div style={{ padding: "0 0" }}>{children}</div>
              {/* More chat items */}
              {[{ name: "友だち C", msg: "またね" }].map((chat, i) => (
                <div key={i} style={{ background: "#fff", padding: "10px 16px", display: "flex", gap: 10, alignItems: "center" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#d1d5db", flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 3 }}>{chat.name}</div>
                    <div style={{ fontSize: 12, color: "#9ca3af" }}>{chat.msg}</div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Home indicator */}
        <div style={{ background: "#f9fafb", height: 30, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 100, height: 4, background: "#374151", borderRadius: 2 }} />
        </div>
      </div>
    </div>
  );
};
