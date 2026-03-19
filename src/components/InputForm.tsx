import { useRef } from "react";
import type { ChangeEvent } from "react";
import type { AdData } from "../types";
import { TITLE_MAX, LONG_TITLE_MAX, DESC_MAX } from "../types";

interface Props {
  data: AdData;
  onChange: (data: AdData) => void;
  /** Which ad format is being previewed */
  mode: "timeline" | "talklist";
}

const countChars = (str: string) => [...str].length;

const CharCount = ({ current, max }: { current: number; max: number }) => {
  const over = current > max;
  return (
    <span style={{ fontSize: 11, color: over ? "#ef4444" : "#9ca3af", fontWeight: over ? 700 : 400 }}>
      {current}/{max}文字
    </span>
  );
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "8px 12px",
  border: "1px solid #d1d5db",
  borderRadius: 6,
  fontSize: 14,
  fontFamily: "'Noto Sans JP', sans-serif",
  outline: "none",
  boxSizing: "border-box",
  color: "#111",
  background: "#fff",
};

const labelStyle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: "#374151",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 6,
};

export const InputForm = ({ data, onChange, mode }: Props) => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const iconInputRef = useRef<HTMLInputElement>(null);

  const titleMax = mode === "talklist" ? LONG_TITLE_MAX : TITLE_MAX;

  const update = (patch: Partial<AdData>) => onChange({ ...data, ...patch });

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    update({ imageUrl: url });
  };

  const handleIconUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    update({ brandIconUrl: url });
  };

  const titleCount = countChars(data.title);
  const descCount = countChars(data.description);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Brand section */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
          ブランド情報
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {/* Brand name */}
          <div>
            <label style={labelStyle}>
              <span>ブランド名 <span style={{ color: "#ef4444" }}>*</span></span>
            </label>
            <input
              style={inputStyle}
              type="text"
              placeholder="例: ゴールドガーデン"
              value={data.brandName}
              onChange={(e) => update({ brandName: e.target.value })}
              maxLength={30}
            />
          </div>
          {/* Brand icon */}
          <div>
            <label style={labelStyle}>
              <span>ブランドアイコン</span>
              <span style={{ fontSize: 11, color: "#9ca3af" }}>任意</span>
            </label>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {data.brandIconUrl ? (
                <img
                  src={data.brandIconUrl}
                  alt="icon"
                  style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", border: "1px solid #e5e7eb" }}
                />
              ) : (
                <div
                  style={{
                    width: 40, height: 40, borderRadius: "50%", background: "#f3f4f6",
                    border: "1px dashed #d1d5db", display: "flex", alignItems: "center",
                    justifyContent: "center", color: "#9ca3af", fontSize: 20,
                  }}
                >
                  +
                </div>
              )}
              <button
                onClick={() => iconInputRef.current?.click()}
                style={{
                  padding: "6px 14px", border: "1px solid #d1d5db", borderRadius: 6,
                  background: "#f9fafb", fontSize: 13, cursor: "pointer", color: "#374151",
                }}
              >
                画像を選択
              </button>
              {data.brandIconUrl && (
                <button
                  onClick={() => update({ brandIconUrl: null })}
                  style={{ padding: "6px 10px", border: "1px solid #fca5a5", borderRadius: 6, background: "#fff", fontSize: 13, cursor: "pointer", color: "#ef4444" }}
                >
                  削除
                </button>
              )}
              <input ref={iconInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleIconUpload} />
            </div>
          </div>
        </div>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: 0 }} />

      {/* Creative section */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
          クリエイティブ
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {/* Image upload */}
          <div>
            <label style={labelStyle}>
              <span>広告画像 <span style={{ color: "#ef4444" }}>*</span></span>
              <span style={{ fontSize: 11, color: "#9ca3af" }}>正方形 or 横長</span>
            </label>

            {/* Aspect ratio selector */}
            <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
              {(["square", "landscape"] as const).map((asp) => (
                <button
                  key={asp}
                  onClick={() => update({ imageAspect: asp })}
                  style={{
                    flex: 1, padding: "6px 0", border: `2px solid ${data.imageAspect === asp ? "#06c755" : "#d1d5db"}`,
                    borderRadius: 6, background: data.imageAspect === asp ? "#f0fdf4" : "#f9fafb",
                    fontSize: 12, cursor: "pointer", fontWeight: data.imageAspect === asp ? 700 : 400,
                    color: data.imageAspect === asp ? "#16a34a" : "#6b7280",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                  }}
                >
                  {asp === "square" ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="1" width="12" height="12" rx="1" /></svg>
                      正方形 (1:1)
                    </>
                  ) : (
                    <>
                      <svg width="20" height="12" viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="1" width="18" height="10" rx="1" /></svg>
                      横長 (1.91:1)
                    </>
                  )}
                </button>
              ))}
            </div>

            {/* Upload area */}
            <div
              onClick={() => imageInputRef.current?.click()}
              style={{
                border: "2px dashed #d1d5db", borderRadius: 8, padding: 16, textAlign: "center",
                cursor: "pointer", background: "#f9fafb", transition: "border-color 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.borderColor = "#06c755")}
              onMouseOut={(e) => (e.currentTarget.style.borderColor = "#d1d5db")}
            >
              {data.imageUrl ? (
                <div style={{ position: "relative" }}>
                  <img
                    src={data.imageUrl}
                    alt="preview"
                    style={{
                      maxWidth: "100%", maxHeight: 120, objectFit: "contain",
                      borderRadius: 6, display: "block", margin: "0 auto",
                    }}
                  />
                  <div style={{ fontSize: 12, color: "#6b7280", marginTop: 8 }}>クリックして変更</div>
                </div>
              ) : (
                <div style={{ color: "#9ca3af" }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: "0 auto 8px" }}>
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                  <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>クリックして画像をアップロード</div>
                  <div style={{ fontSize: 11 }}>JPG, PNG, GIF 対応</div>
                  <div style={{ fontSize: 11, marginTop: 2 }}>
                    {mode === "talklist"
                      ? "600×400px (3:2) 推奨"
                      : "正方形: 1,080×1,080px / 横長: 1,200×628px 推奨"}
                  </div>
                </div>
              )}
            </div>
            {data.imageUrl && (
              <button
                onClick={(e) => { e.stopPropagation(); update({ imageUrl: null }); }}
                style={{ marginTop: 6, padding: "4px 10px", border: "1px solid #fca5a5", borderRadius: 6, background: "#fff", fontSize: 12, cursor: "pointer", color: "#ef4444" }}
              >
                画像を削除
              </button>
            )}
            <input ref={imageInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageUpload} />
          </div>

          {/* Title */}
          <div>
            <label style={labelStyle}>
              <span>
                {mode === "talklist" ? "長いタイトル" : "タイトル"}
                {" "}<span style={{ color: "#ef4444" }}>*</span>
              </span>
              <CharCount current={titleCount} max={titleMax} />
            </label>
            <input
              style={{
                ...inputStyle,
                borderColor: titleCount > titleMax ? "#ef4444" : "#d1d5db",
              }}
              type="text"
              placeholder="タイトルがここに表示されます"
              value={data.title}
              onChange={(e) => update({ title: e.target.value })}
            />
            {titleCount > titleMax && (
              <div style={{ fontSize: 11, color: "#ef4444", marginTop: 4 }}>
                {titleCount - titleMax}文字超過しています
              </div>
            )}
          </div>

          {/* Description (timeline only) */}
          {mode === "timeline" ? (
            <div>
              <label style={labelStyle}>
                <span>説明文</span>
                <CharCount current={descCount} max={DESC_MAX} />
              </label>
              <textarea
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  minHeight: 80,
                  borderColor: descCount > DESC_MAX ? "#ef4444" : "#d1d5db",
                }}
                placeholder="説明文がここに表示されます"
                value={data.description}
                onChange={(e) => update({ description: e.target.value })}
              />
              {descCount > DESC_MAX && (
                <div style={{ fontSize: 11, color: "#ef4444", marginTop: 4 }}>
                  {descCount - DESC_MAX}文字超過しています
                </div>
              )}
            </div>
          ) : (
            <div
              style={{
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: 6,
                padding: "10px 12px",
                fontSize: 12,
                color: "#9ca3af",
              }}
            >
              ※ トークリスト形式では説明文は表示されません
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
