import type { AdData } from "../types";

interface Props {
  data: AdData;
}

const ImagePlaceholder = ({ aspect }: { aspect: "square" | "landscape" }) => (
  <div
    style={{
      width: "100%",
      paddingTop: aspect === "square" ? "100%" : "52.5%",
      position: "relative",
      background: "#e5e7eb",
      borderRadius: 4,
      overflow: "hidden",
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
        gap: 8,
        color: "#9ca3af",
      }}
    >
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    </div>
  </div>
);

const BrandIcon = ({ url, name }: { url: string | null; name: string }) => {
  const initial = name ? name[0] : "G";
  if (url) {
    return (
      <img
        src={url}
        alt={name}
        style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
      />
    );
  }
  return (
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        background: "#e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 14,
        color: "#6b7280",
        fontWeight: 600,
        flexShrink: 0,
        border: "1px solid #d1d5db",
      }}
    >
      {initial}
    </div>
  );
};

// Sample 1: Large card format
export const AdPreviewSample1 = ({ data }: Props) => {
  const title = data.title || "タイトルがここに表示されます";
  const desc = data.description || "説明文がここに表示されます";
  const brand = data.brandName || "ブランド名";

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 8,
        border: "1px solid #e5e7eb",
        overflow: "hidden",
        width: "100%",
        maxWidth: 280,
        fontFamily: "'Noto Sans JP', sans-serif",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px" }}>
        <BrandIcon url={data.brandIconUrl} name={brand} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#111", lineHeight: 1.3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {brand}
          </div>
          <div style={{ fontSize: 11, color: "#9ca3af" }}>Sponsored</div>
        </div>
      </div>

      {/* Image */}
      <div style={{ padding: "0 12px" }}>
        {data.imageUrl ? (
          <div
            style={{
              width: "100%",
              paddingTop: data.imageAspect === "square" ? "100%" : "52.5%",
              position: "relative",
              borderRadius: 4,
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
      </div>

      {/* Footer */}
      <div style={{ padding: "10px 12px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 8 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#111", lineHeight: 1.4, marginBottom: 4 }}>{title}</div>
          <div style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.4 }}>{desc}</div>
        </div>
        <button
          style={{
            background: "#06c755",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            padding: "8px 14px",
            fontSize: 12,
            fontWeight: 700,
            whiteSpace: "nowrap",
            cursor: "default",
            flexShrink: 0,
          }}
        >
          友だち追加
        </button>
      </div>
    </div>
  );
};

// Sample 2: Compact sidebar format
export const AdPreviewSample2 = ({ data }: Props) => {
  const title = data.title || "タイトルがここに表示されます";
  const brand = data.brandName || "ブランド名";

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 8,
        border: "1px solid #e5e7eb",
        overflow: "hidden",
        width: "100%",
        maxWidth: 280,
        fontFamily: "'Noto Sans JP', sans-serif",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ padding: "8px 12px" }}>
        <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 8 }}>Sponsored</div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {/* Thumbnail */}
          <div style={{ width: 64, height: 64, borderRadius: 4, overflow: "hidden", flexShrink: 0, background: "#e5e7eb" }}>
            {data.imageUrl ? (
              <img src={data.imageUrl} alt="ad" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
            )}
          </div>
          {/* Text */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#111", lineHeight: 1.4, marginBottom: 2 }}>{title}</div>
            <div style={{ fontSize: 12, color: "#06c755", fontWeight: 500 }}>{brand}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
