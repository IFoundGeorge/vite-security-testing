import type { ReactNode } from "react";

export interface PageSectionProps {
  variant: "simple" | "gradient";
  className: string;
  children: ReactNode;
}