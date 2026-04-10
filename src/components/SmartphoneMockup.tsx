import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  /** "timeline" | "talklist" */
  screen: "timeline" | "talklist";
}

export const SmartphoneMockup = ({ children, screen }: Props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Phone outer shell */}
      <div
        style={{
          width: 300,
          background: "#1a1a1a",
          borderRadius: 44,
          padding: "0 3px 3px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.28), 0 0 0 1px #333",
          position: "relative",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Side buttons */}
        <div style={{ position: "absolute", left: -3, top: 90, width: 3, height: 30, background: "#333", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", left: -3, top: 132, width: 3, height: 50, background: "#333", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", left: -3, top: 194, width: 3, height: 50, background: "#333", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", right: -3, top: 140, width: 3, height: 60, background: "#333", borderRadius: "0 2px 2px 0" }} />

        {/* Screen */}
        <div
          style={{
            background: "#000",
            borderRadius: 42,
            overflow: "hidden",
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Status bar */}
          <div
            style={{
              background: "#000",
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 20px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 12,
                left: "50%",
                transform: "translateX(-50%)",
                width: 110,
                height: 28,
                background: "#111",
                borderRadius: 20,
              }}
            />
            <span style={{ color: "#fff", fontSize: 12, fontWeight: 600, zIndex: 1, fontFamily: "'Noto Sans JP', sans-serif" }}>9:41</span>
            <div style={{ display: "flex", gap: 5, alignItems: "center", zIndex: 1 }}>
              <svg width="15" height="11" viewBox="0 0 15 11" fill="#fff">
                <rect x="0" y="7" width="2.5" height="4" rx="0.5" />
                <rect x="3.5" y="5" width="2.5" height="6" rx="0.5" />
                <rect x="7" y="3" width="2.5" height="8" rx="0.5" />
                <rect x="10.5" y="1" width="2.5" height="10" rx="0.5" />
              </svg>
              <svg width="14" height="10" viewBox="0 0 24 18" fill="#fff">
                <path d="M12 6C8.5 6 5.3 7.4 3 9.7L1 7.7C3.8 4.8 7.7 3 12 3s8.2 1.8 11 4.7l-2 2C18.7 7.4 15.5 6 12 6z"/>
                <path d="M12 11c-1.9 0-3.6.8-4.8 2l-2-2C6.8 9.7 9.3 8.5 12 8.5s5.2 1.2 6.8 2.5l-2 2C15.6 11.8 13.9 11 12 11z"/>
                <circle cx="12" cy="16" r="2"/>
              </svg>
              <svg width="22" height="11" viewBox="0 0 22 11" fill="none">
                <rect x="0.5" y="0.5" width="17" height="10" rx="2" stroke="#fff" strokeWidth="1"/>
                <rect x="1.5" y="1.5" width="13" height="8" rx="1" fill="#fff"/>
                <path d="M18 3.5v4c1.1-.5 1.5-1.2 1.5-2s-.4-1.5-1.5-2z" fill="#fff"/>
              </svg>
            </div>
          </div>

          {/* LINE App header */}
          <div
            style={{
              background: "#06c755",
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 14px",
            }}
          >
            <span
              style={{
                color: "#fff",
                fontWeight: 800,
                fontSize: 17,
                fontFamily: "'Noto Sans JP', sans-serif",
                letterSpacing: "-0.3px",
              }}
            >
              {screen === "timeline" ? "タイムライン" : "トーク"}
            </span>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              {screen === "timeline" ? (
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              ) : (
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              )}
            </div>
          </div>

          {/* Content — flex:1 fills remaining screen height */}
          <div
            style={{
              background: screen === "timeline" ? "#f0f0f0" : "#fff",
              flex: 1,
            }}
          >
            {screen === "timeline" ? (
              <TimelineScreen adCard={children} />
            ) : (
              <TalklistScreen adCard={children} />
            )}
          </div>

          {/* Bottom tab bar */}
          <BottomTabBar active={screen} />

          {/* Home indicator */}
          <div style={{ background: "#fff", height: 22, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 100, height: 4, background: "#1a1a1a", borderRadius: 2, opacity: 0.25 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const BottomTabBar = ({ active }: { active: "timeline" | "talklist" }) => {
  const tabs = [
    {
      label: "トーク",
      active: active === "talklist",
      icon: (
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      ),
    },
    {
      label: "友だち",
      active: false,
      icon: (
        <>
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87"/>
          <path d="M16 3.13a4 4 0 010 7.75"/>
        </>
      ),
    },
    {
      label: "タイムライン",
      active: active === "timeline",
      icon: (
        <>
          <circle cx="12" cy="5" r="3"/>
          <line x1="12" y1="8" x2="12" y2="21"/>
        </>
      ),
    },
    {
      label: "ウォレット",
      active: false,
      icon: <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>,
    },
    {
      label: "その他",
      active: false,
      icon: (
        <>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </>
      ),
    },
  ];

  return (
    <div
      style={{
        background: "#fff",
        borderTop: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "6px 0 4px",
      }}
    >
      {tabs.map(({ label, active: isActive, icon }) => (
        <div
          key={label}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isActive ? "#06c755" : "#bbb"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {icon}
          </svg>
          <span style={{ fontSize: 9, color: isActive ? "#06c755" : "#bbb", fontFamily: "'Noto Sans JP', sans-serif" }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

const TimelineScreen = ({ adCard }: { adCard: ReactNode }) => (
  <div>
    {/* Slim dummy post above (avatar + text only, no image) */}
    <div style={{ background: "#fff", marginBottom: 8, padding: "10px 12px" }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#dde4ec", flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ height: 8, background: "#e5e7eb", borderRadius: 3, width: "45%", marginBottom: 5 }} />
          <div style={{ height: 7, background: "#f0f0f0", borderRadius: 3, width: "70%" }} />
        </div>
      </div>
    </div>

    {/* Ad card */}
    <div style={{ background: "#fff", marginBottom: 8 }}>
      {adCard}
    </div>

    {/* Slim dummy post below */}
    <div style={{ background: "#fff", padding: "10px 12px" }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#dde4ec", flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ height: 8, background: "#e5e7eb", borderRadius: 3, width: "50%", marginBottom: 5 }} />
          <div style={{ height: 7, background: "#f0f0f0", borderRadius: 3, width: "60%" }} />
        </div>
      </div>
    </div>
  </div>
);

const TalklistScreen = ({ adCard }: { adCard: ReactNode }) => {
  const before = [
    { name: "友だちA", msg: "了解しました！", time: "12:30", unread: 2 },
    { name: "グループB", msg: "ありがとうございます", time: "11:15", unread: 0 },
  ];
  const after = [
    { name: "友だちC", msg: "またね！", time: "昨日" },
    { name: "友だちD", msg: "よろしくお願いします", time: "昨日" },
  ];

  const ChatRow = ({ name, msg, time, unread }: { name: string; msg: string; time: string; unread?: number }) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 14px",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#dde4ec", flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</div>
        <div style={{ fontSize: 12, color: "#aaa", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{msg}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, flexShrink: 0 }}>
        <span style={{ fontSize: 10, color: "#aaa" }}>{time}</span>
        {unread ? (
          <div style={{ background: "#ff3b30", color: "#fff", borderRadius: 10, minWidth: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, padding: "0 4px" }}>
            {unread}
          </div>
        ) : null}
      </div>
    </div>
  );

  return (
    <div>
      {before.map((c) => <ChatRow key={c.name} {...c} />)}
      <div style={{ borderBottom: "1px solid #f0f0f0" }}>{adCard}</div>
      {after.map((c) => <ChatRow key={c.name} {...c} />)}
    </div>
  );
};
