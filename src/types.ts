export interface AdData {
  brandName: string;
  brandIconUrl: string | null;
  imageUrl: string | null;
  imageAspect: "square" | "landscape";
  title: string;
  description: string;
}

export const TITLE_MAX = 20;
export const LONG_TITLE_MAX = 35; // Talk List (Small Image) format
export const DESC_MAX = 75;

// ─── Rich Menu ────────────────────────────────────────────────────────────────

/** Grid layout presets */
export type RichMenuLayout = "3x2" | "2x2" | "3x1" | "2x1";

export interface RichMenuCell {
  label: string;
  color: string; // background color when no image
}

export interface RichMenuData {
  layout: RichMenuLayout;
  imageUrl: string | null;
  cells: RichMenuCell[];
  menuTitle: string;
}

/** Number of cells per layout */
export const LAYOUT_CELL_COUNT: Record<RichMenuLayout, number> = {
  "3x2": 6,
  "2x2": 4,
  "3x1": 3,
  "2x1": 2,
};

/** Whether the layout is "large" (2-row) or "small" (1-row) */
export const LAYOUT_ROWS: Record<RichMenuLayout, 1 | 2> = {
  "3x2": 2,
  "2x2": 2,
  "3x1": 1,
  "2x1": 1,
};

/** Number of columns per layout */
export const LAYOUT_COLS: Record<RichMenuLayout, number> = {
  "3x2": 3,
  "2x2": 2,
  "3x1": 3,
  "2x1": 2,
};

const CELL_COLORS = ["#4a90e2", "#7c4de8", "#e25c4a", "#e2a34a", "#4ae27c", "#4adce2"];
export const defaultCells = (layout: RichMenuLayout): RichMenuCell[] =>
  Array.from({ length: LAYOUT_CELL_COUNT[layout] }, (_, i) => ({
    label: `メニュー${i + 1}`,
    color: CELL_COLORS[i % CELL_COLORS.length],
  }));
