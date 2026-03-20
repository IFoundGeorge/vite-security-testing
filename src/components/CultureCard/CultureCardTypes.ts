export type CardVariant = "horizontal" | "vertical";

export interface VariantStyle {
  container?: string;
  imageWrapper?: string;
  textWrapper?: string;
}
export const CULTURE_CARD_VARIANTS: Record<CardVariant, VariantStyle> = {
  horizontal: {
    container: "md:flex-row md:max-w-4xl",
    imageWrapper: "md:flex-[2] aspect-[385/320]",
    textWrapper: "md:flex-[3]",
  },

  vertical: {
    container: "md:max-w-xl",
    imageWrapper: "aspect-[410/300]",
  },
};

export interface CultureCardProps {
  variant?: CardVariant;
  image: string;
  name: string;
  description: string;
  className?: string;
}