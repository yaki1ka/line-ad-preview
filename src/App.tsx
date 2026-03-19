import { Routes, Route, NavLink } from "react-router-dom";
import { AdPreviewPage } from "./AdPreviewPage";
import { RichMenuPage } from "./RichMenuPage";
import "./App.css";

const NAV_ITEMS = [
  { to: "/", label: "友だち追加広告" },
  { to: "/rich-menu", label: "リッチメニュー" },
];

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#f0f2f5", fontFamily: "'Noto Sans JP', sans-serif" }}>
      {/* Shared header with navigation */}
      <header
        style={{
          background: "#06c755",
          padding: "0 24px",
          height: 56,
          display: "flex",
          alignItems: "center",
          gap: 16,
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <div style={{ width: 32, height: 32, background: "rgba(255,255,255,0.2)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 2C6.48 2 2 5.92 2 10.8c0 3.16 1.76 5.95 4.44 7.68L5.5 22l4.12-2.07c.77.21 1.56.32 2.38.32 5.52 0 10-3.92 10-8.8C22 5.92 17.52 2 12 2z" />
            </svg>
          </div>
          <span style={{ fontSize: 14, fontWeight: 800, color: "#fff", letterSpacing: "-0.2px" }}>
            LINE プレビューツール
          </span>
        </div>

        {/* Navigation */}
        <nav style={{ display: "flex", gap: 4, marginLeft: 8 }}>
          {NAV_ITEMS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              style={({ isActive }) => ({
                padding: "6px 14px",
                borderRadius: 20,
                fontSize: 13,
                fontWeight: isActive ? 700 : 500,
                color: isActive ? "#06c755" : "rgba(255,255,255,0.85)",
                background: isActive ? "#fff" : "rgba(255,255,255,0.12)",
                textDecoration: "none",
                transition: "all 0.15s",
                whiteSpace: "nowrap" as const,
              })}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      {/* Page content */}
      <Routes>
        <Route path="/" element={<AdPreviewPage />} />
        <Route path="/rich-menu" element={<RichMenuPage />} />
      </Routes>
    </div>
  );
}
