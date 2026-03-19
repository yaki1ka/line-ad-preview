import type { AdData } from "../types";

interface Props {
  data: AdData;
}

const ImagePlaceholder = ({ aspect }: { aspect: "square" | "landscape" }) => (
  <div
    style={{
      width: "100%",
      paddingTop: aspect === "square" ? "100%" : "52.36%",
      position: "relative",
      background: "#dde4ec",
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 6,
        color: "#aab4c2",
      }}
    >
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span style={{ fontSize: 11 }}>広告画像</span>
    </div>
  </div>
);

const BrandIcon = ({ url, name }: { url: string | null; name: string }) => {
  if (url) {
    return (
      <img
        src={url}
        alt={name}
        style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: "1px solid rgba(0,0,0,0.08)" }}
      />
    );
  }
  const initial = name ? name[0] : "L";
  return (
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "#e8edf2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 15,
        color: "#6b7280",
        fontWeight: 700,
        flexShrink: 0,
        border: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      {initial}
    </div>
  );
};

// Timeline card format (タイムライン)
export const AdPreviewSample1 = ({ data }: Props) => {
  const title = data.title || "タイトルがここに表示されます";
  const desc = data.description || "説明文がここに表示されます。詳しくは公式アカウントへ。";
  const brand = data.brandName || "ブランド名";

  return (
    <div
      style={{
        background: "#fff",
        width: "100%",
        maxWidth: 290,
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      {/* Header: icon + brand name + ad label */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px 8px" }}>
        <BrandIcon url={data.brandIconUrl} name={brand} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#111",
              lineHeight: 1.3,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {brand}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
            <span
              style={{
                fontSize: 10,
                color: "#888",
                border: "1px solid #ccc",
                borderRadius: 2,
                padding: "0 4px",
                lineHeight: "16px",
                display: "inline-block",
              }}
            >
              広告
            </span>
            <span style={{ fontSize: 10, color: "#aaa" }}>・友だち追加</span>
          </div>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2" style={{ flexShrink: 0 }}>
          <circle cx="12" cy="5" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="12" cy="19" r="1.5" />
        </svg>
      </div>

      {/* Ad image */}
      {data.imageUrl ? (
        <div
          style={{
            width: "100%",
            paddingTop: data.imageAspect === "square" ? "100%" : "52.36%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src={data.imageUrl}
            alt="ad"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      ) : (
        <ImagePlaceholder aspect={data.imageAspect} />
      )}

      {/* Footer: title + description + CTA button */}
      <div style={{ padding: "10px 12px 12px" }}>
        <div style={{ marginBottom: 10 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#111",
              lineHeight: 1.5,
              marginBottom: 3,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 11,
              color: data.description ? "#666" : "#c0c0c0",
              lineHeight: 1.5,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {desc}
          </div>
        </div>
        <button
          style={{
            width: "100%",
            background: "#06c755",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "10px 0",
            fontSize: 14,
            fontWeight: 700,
            cursor: "default",
            fontFamily: "'Noto Sans JP', sans-serif",
            letterSpacing: "0.02em",
          }}
        >
          友だち追加
        </button>
      </div>
    </div>
  );
};

// Talk list compact format (トークリスト)
export const AdPreviewSample2 = ({ data }: Props) => {
  const title = data.title || "タイトルがここに表示されます";
  const brand = data.brandName || "ブランド名";

  return (
    <div
      style={{
        background: "#fff",
        width: "100%",
        maxWidth: 290,
        fontFamily: "'Noto Sans JP', sans-serif",
        padding: "10px 12px",
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          width: 54,
          height: 54,
          borderRadius: 8,
          overflow: "hidden",
          flexShrink: 0,
          background: "#e8edf2",
        }}
      >
        {data.imageUrl ? (
          <img src={data.imageUrl} alt="ad" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#aab4c2" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
        )}
      </div>

      {/* Text content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#111",
            lineHeight: 1.4,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            marginBottom: 3,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span
            style={{
              fontSize: 10,
              color: "#888",
              border: "1px solid #ccc",
              borderRadius: 2,
              padding: "0 3px",
              lineHeight: "15px",
              display: "inline-block",
              flexShrink: 0,
            }}
          >
            広告
          </span>
          <span
            style={{
              fontSize: 11,
              color: "#888",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {brand}
          </span>
        </div>
      </div>

      {/* CTA */}
      <button
        style={{
          background: "#06c755",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          padding: "7px 10px",
          fontSize: 11,
          fontWeight: 700,
          whiteSpace: "nowrap",
          cursor: "default",
          flexShrink: 0,
          fontFamily: "'Noto Sans JP', sans-serif",
        }}
      >
        追加
      </button>
    </div>
  );
};
