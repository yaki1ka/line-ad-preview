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
