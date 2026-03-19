export interface AdData {
  brandName: string;
  brandIconUrl: string | null;
  imageUrl: string | null;
  imageAspect: "square" | "landscape";
  title: string;
  description: string;
}

export const TITLE_MAX = 20;
export const DESC_MAX = 75;
