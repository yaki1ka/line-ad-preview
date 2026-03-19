import type { AdData } from "../types";

interface Props {
  data: AdData;
}

const ImagePlaceholder = ({ aspect }: { aspect: "square" | "landscape" }) => {
  const paddingTop = aspect === "square" ? "100%" : "52.36%";
  return (
    <div style={{ width: "100%", paddingTop, position: "relative", background: "#e4e8ed" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#b0bac5",
        }}
      >
        {/* Official-style image icon */}
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          <rect x="4" y="4" width="44" height="44" rx="4" stroke="#b0bac5" strokeWidth="2" fill="none"/>
          <circle cx="18" cy="18" r="4" stroke="#b0bac5" strokeWidth="2" fill="none"/>
          <path d="M4 36l12-12 8 8 8-10 16 14" stroke="#b0bac5" strokeWidth="2" strokeLinejoin="round" fill="none"/>
        </svg>
      </div>
    </div>
  );
};

const BrandIcon = ({ url, name }: { url: string | null; name: string }) => {
  if (url) {
    return (
      <img
        src={url}
        alt={name}
        style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: "1px solid rgba(0,0,0,0.08)" }}
      />
    );
  }
  // Default: hexagonal shield-like icon (matches official preview default)
  const initial = name ? name[0].toUpperCase() : "G";
  return (
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: "30%",
        background: "#e8edf5",
        border: "1px solid rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 14,
        fontWeight: 700,
        color: "#6b8ab5",
        flexShrink: 0,
        fontFamily: "sans-serif",
      }}
    >
      {initial}
    </div>
  );
};

/**
 * Timeline card format (タイムライン / サンプル1)
 *
 * Official layout (confirmed from screenshot):
 *   [brand icon] [brand name]
 *                [Sponsored]
 *   [full-width image]
 *   [title text ............] [友だち追加]
 *   [description text]
 */
export const AdPreviewSample1 = ({ data }: Props) => {
  const title = data.title || "タイトルがここに表示されます";
  const desc = data.description || "説明文がここに表示されます";
  const brand = data.brandName || "ブランド名";

  return (
    <div
      style={{
        background: "#fff",
        width: "100%",
        maxWidth: 290,
        fontFamily: "'Noto Sans JP', sans-serif",
        border: "1px solid #e5e7eb",
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      {/* Header: icon + brand name + Sponsored */}
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
          <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 1 }}>Sponsored</div>
        </div>
      </div>

      {/* Full-width ad image */}
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

      {/* Title (left) + 友だち追加 button (right) — same row */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px 6px" }}>
        <div
          style={{
            flex: 1,
            minWidth: 0,
            fontSize: 13,
            fontWeight: 700,
            color: "#111",
            lineHeight: 1.4,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {title}
        </div>
        <button
          style={{
            background: "#4a90e2",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            padding: "8px 14px",
            fontSize: 12,
            fontWeight: 700,
            whiteSpace: "nowrap",
            cursor: "default",
            flexShrink: 0,
            fontFamily: "'Noto Sans JP', sans-serif",
          }}
        >
          友だち追加
        </button>
      </div>

      {/* Description */}
      <div
        style={{
          padding: "0 12px 12px",
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
  );
};

/**
 * Talk list compact format (トークリスト / サンプル2)
 *
 * Official layout (confirmed from screenshot):
 *   Sponsored
 *   [square thumbnail] [bold title]
 *                      [brand name in blue]
 */
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
        padding: "8px 12px 10px",
        border: "1px solid #e5e7eb",
        borderRadius: 4,
      }}
    >
      {/* "Sponsored" at top */}
      <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 8 }}>Sponsored</div>

      {/* Row: square thumbnail + text */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {/* Square thumbnail */}
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 4,
            overflow: "hidden",
            flexShrink: 0,
            background: "#e4e8ed",
          }}
        >
          {data.imageUrl ? (
            <img src={data.imageUrl} alt="ad" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#b0bac5" }}>
              <svg width="24" height="24" viewBox="0 0 52 52" fill="none">
                <rect x="4" y="4" width="44" height="44" rx="4" stroke="#b0bac5" strokeWidth="3" fill="none"/>
                <circle cx="18" cy="18" r="5" stroke="#b0bac5" strokeWidth="3" fill="none"/>
                <path d="M4 36l12-12 8 8 8-10 16 14" stroke="#b0bac5" strokeWidth="3" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
          )}
        </div>

        {/* Title + brand */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#111",
              lineHeight: 1.4,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              marginBottom: 3,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 12,
              color: "#4a90e2",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {brand}
          </div>
        </div>
      </div>
    </div>
  );
};
