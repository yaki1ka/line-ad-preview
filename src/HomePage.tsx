import { useNavigate } from "react-router-dom";

const tools: {
  to: string;
  href?: string;
  label: string;
  sublabel: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
  border: string;
}[] = [
  {
    to: "/ad-preview",
    label: "友だち追加広告",
    sublabel: "Ad Preview",
    description: "タイムライン・トークリストに表示される広告クリエイティブの見た目を確認できます",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 10h4M7 13h2" />
        <rect x="14" y="8" width="4" height="5" rx="1" />
      </svg>
    ),
    color: "#06c755",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    to: "/rich-menu",
    label: "リッチメニュー",
    sublabel: "Rich Menu",
    description: "トーク画面下部に表示されるリッチメニューのレイアウトや画像の見た目を確認できます",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="8" height="8" rx="1" />
        <rect x="13" y="3" width="8" height="8" rx="1" />
        <rect x="3" y="13" width="8" height="8" rx="1" />
        <rect x="13" y="13" width="8" height="8" rx="1" />
      </svg>
    ),
    color: "#7c4de8",
    bg: "#faf5ff",
    border: "#e9d5ff",
  },
  {
    to: "",
    href: "css-preview.html",
    label: "CSS プレビュアー",
    sublabel: "🎨 CSS プレビュアー（Lステップ）",
    description: "Lステップ 回答フォームのカスタムCSS をリアルタイムでプレビューできます",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    color: "#f97316",
    bg: "#fff7ed",
    border: "#fed7aa",
  },
];

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "calc(100vh - 56px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 style={{ margin: "0 0 10px", fontSize: 26, fontWeight: 800, color: "#111", letterSpacing: "-0.5px" }}>
          何をプレビューしますか？
        </h1>
        <p style={{ margin: 0, fontSize: 14, color: "#6b7280" }}>
          ツールを選んでください
        </p>
      </div>

      {/* Tool cards */}
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center", maxWidth: 700, width: "100%" }}>
        {tools.map(({ to, href, label, sublabel, description, icon, color, bg, border }) => (
          <button
            key={to || href}
            onClick={() => href ? (window.location.href = href) : navigate(to)}
            style={{
              flex: "1 1 280px",
              maxWidth: 320,
              padding: "32px 28px",
              background: "#fff",
              border: `2px solid ${border}`,
              borderRadius: 16,
              cursor: "pointer",
              textAlign: "left",
              transition: "transform 0.15s, box-shadow 0.15s, border-color 0.15s",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              fontFamily: "'Noto Sans JP', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
              e.currentTarget.style.borderColor = color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
              e.currentTarget.style.borderColor = border;
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: 16,
                background: bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color,
                marginBottom: 20,
              }}
            >
              {icon}
            </div>

            {/* Labels */}
            <div style={{ fontSize: 11, fontWeight: 700, color, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>
              {sublabel}
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#111", marginBottom: 10, letterSpacing: "-0.3px" }}>
              {label}
            </div>
            <p style={{ margin: 0, fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>
              {description}
            </p>

            {/* Arrow */}
            <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 4, color, fontSize: 13, fontWeight: 700 }}>
              開く
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
